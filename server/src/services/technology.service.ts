import driver from "../config/db";

export async function getTechnologies() {
  const session = driver.session();

  try {
    const result = await session.run(`
      MATCH (t:Technology)
      RETURN t
      ORDER BY t.name
    `);

    return result.records.map(
      r => r.get("t").properties
    );
  } finally {
    await session.close();
  }
}