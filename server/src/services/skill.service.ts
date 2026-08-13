import driver from "../config/db";

export async function getSkills() {
  const session = driver.session();

  try {
    const result = await session.run(`
      MATCH (s:Skill)
      RETURN s
      ORDER BY s.name
    `);

    return result.records.map(
      r => r.get("s").properties
    );
  } finally {
    await session.close();
  }
}