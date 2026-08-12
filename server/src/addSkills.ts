import dotenv from "dotenv";
dotenv.config();

import driver from "./config/db";
async function addSkills() {
  const session = driver.session();

  try {
    // Paste your existing HAS_SKILL session.run(...) block here
    await session.run(
  `
  UNWIND $relationships AS rel
  MATCH (d:Developer {id: rel.developerId})
  MATCH (s:Skill {id: rel.skillId})
  MERGE (d)-[r:HAS_SKILL]->(s)
  SET r.level = rel.level
  `,
  {
    relationships: [
      { developerId: "dev-001", skillId: "skill-001", level: "Advanced" },
      { developerId: "dev-001", skillId: "skill-002", level: "Advanced" },
      { developerId: "dev-001", skillId: "skill-003", level: "Advanced" },
      { developerId: "dev-001", skillId: "skill-005", level: "Intermediate" },
      { developerId: "dev-001", skillId: "skill-006", level: "Intermediate" },

      { developerId: "dev-002", skillId: "skill-001", level: "Advanced" },
      { developerId: "dev-002", skillId: "skill-003", level: "Advanced" },
      { developerId: "dev-002", skillId: "skill-007", level: "Advanced" },
      { developerId: "dev-002", skillId: "skill-006", level: "Advanced" },

      { developerId: "dev-003", skillId: "skill-005", level: "Advanced" },
      { developerId: "dev-003", skillId: "skill-008", level: "Advanced" },
      { developerId: "dev-003", skillId: "skill-009", level: "Advanced" },
      { developerId: "dev-003", skillId: "skill-010", level: "Advanced" },

      { developerId: "dev-004", skillId: "skill-001", level: "Intermediate" },
      { developerId: "dev-004", skillId: "skill-002", level: "Intermediate" },
      { developerId: "dev-004", skillId: "skill-003", level: "Intermediate" },

      { developerId: "dev-005", skillId: "skill-001", level: "Advanced" },
      { developerId: "dev-005", skillId: "skill-005", level: "Advanced" },
      { developerId: "dev-005", skillId: "skill-006", level: "Advanced" },
      { developerId: "dev-005", skillId: "skill-009", level: "Advanced" },

      { developerId: "dev-006", skillId: "skill-002", level: "Advanced" },
      { developerId: "dev-006", skillId: "skill-003", level: "Advanced" },
      { developerId: "dev-006", skillId: "skill-004", level: "Advanced" },
      { developerId: "dev-006", skillId: "skill-007", level: "Advanced" },

      { developerId: "dev-007", skillId: "skill-005", level: "Advanced" },
      { developerId: "dev-007", skillId: "skill-009", level: "Advanced" },
      { developerId: "dev-007", skillId: "skill-010", level: "Advanced" },
      { developerId: "dev-007", skillId: "skill-006", level: "Advanced" },

      { developerId: "dev-008", skillId: "skill-001", level: "Intermediate" },
      { developerId: "dev-008", skillId: "skill-004", level: "Intermediate" },
    ],
  }
);
    console.log("✅ HAS_SKILL relationships created");
  } catch (err) {
    console.error(err);
  } finally {
    await session.close();
    await driver.close();
  }
}

addSkills();