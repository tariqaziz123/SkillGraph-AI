import dotenv from "dotenv";
dotenv.config();

import driver from "./config/db";

async function cleanup() {
  const session = driver.session();

  try {
    console.log("Deleting HAS_SKILL relationships...");

    const result = await session.run(`
      MATCH ()-[r:HAS_SKILL]->()
      DELETE r
      RETURN count(r) AS deleted
    `);

    console.log(result.records[0].get("deleted").toNumber());
    console.log("Done.");
  } catch (err) {
    console.error(err);
  } finally {
    await session.close();
    await driver.close();
  }
}

cleanup();