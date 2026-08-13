import driver from "../config/db";

export async function getCompanies() {
  const session = driver.session();

  try {
    const result = await session.run(`
      MATCH (c:Company)
      RETURN c
      ORDER BY c.name
    `);

    return result.records.map(
      r => r.get("c").properties
    );
  } finally {
    await session.close();
  }
}