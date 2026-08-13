import driver from "../config/db";

export async function getAllDevelopers() {
  const session = driver.session();

  try {
    const result = await session.run(
      `
      MATCH (d:Developer)
      RETURN d
      ORDER BY d.name
      `
    );

    return result.records.map((record) => record.get("d").properties);
  } finally {
    await session.close();
  }
}

export async function getDeveloperById(id: string) {
  const session = driver.session();

  try {
    const result = await session.run(
      `
      MATCH (d:Developer {id: $id})
      OPTIONAL MATCH (d)-[r:HAS_SKILL]->(s:Skill)
      RETURN d,
             collect({
               name: s.name,
               level: r.level
             }) AS skills
      `,
      { id }
    );

    if (result.records.length === 0) {
      return null;
    }

    const record = result.records[0];

    return {
      ...record.get("d").properties,
      skills: record.get("skills"),
    };
  } finally {
    await session.close();
  }
}