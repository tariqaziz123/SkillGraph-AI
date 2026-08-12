import dotenv from "dotenv";
dotenv.config();

import driver from "./config/db";

async function debug() {
  const session = driver.session();
try {
 const result = await session.run(`
MATCH (d:Developer)-[:HAS_SKILL]->(s:Skill)
RETURN d.name AS developer,
collect(s.name) AS skills
LIMIT 3
`);

result.records.forEach(record => {
  console.log(record.get("developer"));
  console.log(record.get("skills"));
});

} catch (err) {
  console.error(err);
} finally {
  await session.close();
  await driver.close();
}
}

debug();