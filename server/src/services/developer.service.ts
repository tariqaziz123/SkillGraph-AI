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