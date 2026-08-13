import driver from "../config/db";

export async function getAllDevelopers(skill?: string) {
  const session = driver.session();

  try {
    let query = `
      MATCH (d:Developer)
      RETURN d
      ORDER BY d.name
    `;

    let params = {};

    if (skill) {
      query = `
        MATCH (d:Developer)-[:HAS_SKILL]->(s:Skill)
        WHERE toLower(s.name) = toLower($skill)
        RETURN DISTINCT d
        ORDER BY d.name
      `;

      params = { skill };
    }

    const result = await session.run(query, params);

    return result.records.map(
      (record) => record.get("d").properties
    );
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

export async function getRecommendedDevelopers(id: string) {
  const session = driver.session();

  try {
    const result = await session.run(
      `
      MATCH (d:Developer {id: $id})-[:HAS_SKILL]->(skill:Skill)<-[:HAS_SKILL]-(other:Developer)
      WHERE d <> other

      RETURN
        other,
        count(skill) AS commonSkills,
        collect(skill.name) AS sharedSkills

      ORDER BY commonSkills DESC
      `,
      { id }
    );

    return result.records.map((record) => ({
      ...record.get("other").properties,
      commonSkills: record.get("commonSkills").toNumber(),
      sharedSkills: record.get("sharedSkills"),
    }));
  } finally {
    await session.close();
  }
}