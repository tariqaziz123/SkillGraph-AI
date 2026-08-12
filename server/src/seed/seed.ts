import "dotenv/config";

import driver from "../config/db";
import { schemaQueries } from "../queries/schema.queries";

async function seedDatabase() {
  const session = driver.session();

  try {
    console.log("🌱 Starting database seed...");

    // ----------------------------------
    // 1. Create constraints
    // ----------------------------------

    for (const query of schemaQueries) {
      await session.run(query);
    }

    console.log("✅ Constraints created");

    // ----------------------------------
    // 2. Create Developers
    // ----------------------------------

    await session.run(
      `
      UNWIND $developers AS developer
      MERGE (d:Developer {id: developer.id})
      SET
        d.name = developer.name,
        d.email = developer.email,
        d.location = developer.location,
        d.experienceYears = developer.experienceYears
      `,
      {
        developers: [
          {
            id: "dev-001",
            name: "Aarav Sharma",
            email: "aarav@example.com",
            location: "Bengaluru",
            experienceYears: 5,
          },
          {
            id: "dev-002",
            name: "Priya Nair",
            email: "priya@example.com",
            location: "Mumbai",
            experienceYears: 4,
          },
          {
            id: "dev-003",
            name: "Rahul Mehta",
            email: "rahul@example.com",
            location: "Delhi",
            experienceYears: 7,
          },
          {
            id: "dev-004",
            name: "Sneha Kapoor",
            email: "sneha@example.com",
            location: "Pune",
            experienceYears: 3,
          },
          {
            id: "dev-005",
            name: "Arjun Rao",
            email: "arjun@example.com",
            location: "Hyderabad",
            experienceYears: 6,
          },
          {
            id: "dev-006",
            name: "Meera Iyer",
            email: "meera@example.com",
            location: "Chennai",
            experienceYears: 5,
          },
          {
            id: "dev-007",
            name: "Vikram Singh",
            email: "vikram@example.com",
            location: "Bengaluru",
            experienceYears: 8,
          },
          {
            id: "dev-008",
            name: "Ananya Das",
            email: "ananya@example.com",
            location: "Kolkata",
            experienceYears: 2,
          },
        ],
      }
    );

    console.log("✅ Developers created");

    // ----------------------------------
    // 3. Create Skills
    // ----------------------------------

    await session.run(
      `
      UNWIND $skills AS skill
      MERGE (s:Skill {id: skill.id})
      SET
        s.name = skill.name,
        s.category = skill.category
      `,
      {
        skills: [
          {
            id: "skill-001",
            name: "React",
            category: "Frontend",
          },
          {
            id: "skill-002",
            name: "Next.js",
            category: "Frontend",
          },
          {
            id: "skill-003",
            name: "TypeScript",
            category: "Language",
          },
          {
            id: "skill-004",
            name: "JavaScript",
            category: "Language",
          },
          {
            id: "skill-005",
            name: "Node.js",
            category: "Backend",
          },
          {
            id: "skill-006",
            name: "GraphQL",
            category: "API",
          },
          {
            id: "skill-007",
            name: "Redux",
            category: "State Management",
          },
          {
            id: "skill-008",
            name: "Python",
            category: "Language",
          },
          {
            id: "skill-009",
            name: "AWS",
            category: "Cloud",
          },
          {
            id: "skill-010",
            name: "Docker",
            category: "DevOps",
          },
        ],
      }
    );

    console.log("✅ Skills created");

    // ----------------------------------
    // 4. Create Technologies
    // ----------------------------------

    await session.run(
      `
      UNWIND $technologies AS technology
      MERGE (t:Technology {id: technology.id})
      SET
        t.name = technology.name,
        t.category = technology.category
      `,
      {
        technologies: [
          {
            id: "tech-001",
            name: "React",
            category: "Frontend",
          },
          {
            id: "tech-002",
            name: "Next.js",
            category: "Frontend",
          },
          {
            id: "tech-003",
            name: "Node.js",
            category: "Backend",
          },
          {
            id: "tech-004",
            name: "GraphQL",
            category: "API",
          },
          {
            id: "tech-005",
            name: "PostgreSQL",
            category: "Database",
          },
          {
            id: "tech-006",
            name: "MongoDB",
            category: "Database",
          },
          {
            id: "tech-007",
            name: "AWS",
            category: "Cloud",
          },
          {
            id: "tech-008",
            name: "Docker",
            category: "DevOps",
          },
        ],
      }
    );

    console.log("✅ Technologies created");

    // ----------------------------------
    // 5. Create Companies
    // ----------------------------------

    await session.run(
      `
      UNWIND $companies AS company
      MERGE (c:Company {id: company.id})
      SET
        c.name = company.name,
        c.industry = company.industry,
        c.location = company.location
      `,
      {
        companies: [
          {
            id: "company-001",
            name: "TechNova",
            industry: "Technology",
            location: "Bengaluru",
          },
          {
            id: "company-002",
            name: "CloudSphere",
            industry: "Cloud Computing",
            location: "Hyderabad",
          },
          {
            id: "company-003",
            name: "FinEdge",
            industry: "FinTech",
            location: "Mumbai",
          },
          {
            id: "company-004",
            name: "TravelHub",
            industry: "Travel Technology",
            location: "Delhi",
          },
          {
            id: "company-005",
            name: "DataWorks",
            industry: "Analytics",
            location: "Pune",
          },
        ],
      }
    );

    console.log("✅ Companies created");

    // ----------------------------------
    // 6. Create Projects
    // ----------------------------------

    await session.run(
      `
      UNWIND $projects AS project
      MERGE (p:Project {id: project.id})
      SET
        p.name = project.name,
        p.description = project.description,
        p.domain = project.domain,
        p.status = project.status
      `,
      {
        projects: [
          {
            id: "project-001",
            name: "Travel Booking Platform",
            description:
              "Enterprise travel booking and expense management platform.",
            domain: "Travel",
            status: "Production",
          },
          {
            id: "project-002",
            name: "FinTech Dashboard",
            description:
              "Financial analytics and reporting dashboard.",
            domain: "FinTech",
            status: "Production",
          },
          {
            id: "project-003",
            name: "Capability Radar",
            description:
              "Interactive technology capability visualization.",
            domain: "Analytics",
            status: "Production",
          },
          {
            id: "project-004",
            name: "E-Commerce Platform",
            description:
              "Modern online shopping platform.",
            domain: "E-Commerce",
            status: "Development",
          },
          {
            id: "project-005",
            name: "Analytics Engine",
            description:
              "Real-time analytics and reporting engine.",
            domain: "Analytics",
            status: "Production",
          },
          {
            id: "project-006",
            name: "Collaboration Suite",
            description:
              "Real-time team collaboration platform.",
            domain: "Productivity",
            status: "Production",
          },
        ],
      }
    );

    console.log("✅ Projects created");

    // ----------------------------------
// 7. Developer → Skill
// ----------------------------------

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

console.log("✅ Developer skills connected");

// ----------------------------------
// 8. Developer → Company
// ----------------------------------

await session.run(
  `
  UNWIND $relationships AS rel
  MATCH (d:Developer {id: rel.developerId})
  MATCH (c:Company {id: rel.companyId})
  MERGE (d)-[:WORKED_AT]->(c)
  `,
  {
    relationships: [
      { developerId: "dev-001", companyId: "company-001" },
      { developerId: "dev-002", companyId: "company-003" },
      { developerId: "dev-003", companyId: "company-002" },
      { developerId: "dev-004", companyId: "company-001" },
      { developerId: "dev-005", companyId: "company-004" },
      { developerId: "dev-006", companyId: "company-005" },
      { developerId: "dev-007", companyId: "company-002" },
      { developerId: "dev-008", companyId: "company-003" },
    ],
  }
);

console.log("✅ Developer-company relationships created");

// ----------------------------------
// 9. Developer → Project
// ----------------------------------

await session.run(
  `
  UNWIND $relationships AS rel
  MATCH (d:Developer {id: rel.developerId})
  MATCH (p:Project {id: rel.projectId})
  MERGE (d)-[:WORKED_ON]->(p)
  `,
  {
    relationships: [
      { developerId: "dev-001", projectId: "project-001" },
      { developerId: "dev-001", projectId: "project-003" },

      { developerId: "dev-002", projectId: "project-002" },
      { developerId: "dev-002", projectId: "project-006" },

      { developerId: "dev-003", projectId: "project-005" },

      { developerId: "dev-004", projectId: "project-001" },
      { developerId: "dev-004", projectId: "project-004" },

      { developerId: "dev-005", projectId: "project-001" },
      { developerId: "dev-005", projectId: "project-005" },

      { developerId: "dev-006", projectId: "project-003" },
      { developerId: "dev-006", projectId: "project-006" },

      { developerId: "dev-007", projectId: "project-002" },
      { developerId: "dev-007", projectId: "project-005" },

      { developerId: "dev-008", projectId: "project-004" },
    ],
  }
);

console.log("✅ Developer-project relationships created");

// ----------------------------------
// 10. Project → Technology
// ----------------------------------

await session.run(
  `
  UNWIND $relationships AS rel
  MATCH (p:Project {id: rel.projectId})
  MATCH (t:Technology {id: rel.technologyId})
  MERGE (p)-[:USES]->(t)
  `,
  {
    relationships: [
      { projectId: "project-001", technologyId: "tech-001" },
      { projectId: "project-001", technologyId: "tech-002" },
      { projectId: "project-001", technologyId: "tech-004" },

      { projectId: "project-002", technologyId: "tech-001" },
      { projectId: "project-002", technologyId: "tech-003" },
      { projectId: "project-002", technologyId: "tech-005" },

      { projectId: "project-003", technologyId: "tech-001" },
      { projectId: "project-003", technologyId: "tech-003" },
      { projectId: "project-003", technologyId: "tech-008" },

      { projectId: "project-004", technologyId: "tech-001" },
      { projectId: "project-004", technologyId: "tech-002" },
      { projectId: "project-004", technologyId: "tech-006" },

      { projectId: "project-005", technologyId: "tech-003" },
      { projectId: "project-005", technologyId: "tech-005" },
      { projectId: "project-005", technologyId: "tech-007" },

      { projectId: "project-006", technologyId: "tech-001" },
      { projectId: "project-006", technologyId: "tech-003" },
      { projectId: "project-006", technologyId: "tech-006" },
    ],
  }
);

console.log("✅ Project-technology relationships created");

// ----------------------------------
// 11. Skill → Skill
// ----------------------------------

await session.run(
  `
  UNWIND $relationships AS rel
  MATCH (s1:Skill {name: rel.from})
  MATCH (s2:Skill {name: rel.to})
  MERGE (s1)-[:RELATED_TO]->(s2)
  `,
  {
    relationships: [
      { from: "React", to: "Next.js" },
      { from: "React", to: "Redux" },
      { from: "React", to: "TypeScript" },
      { from: "Next.js", to: "TypeScript" },
      { from: "Node.js", to: "GraphQL" },
      { from: "Node.js", to: "Docker" },
      { from: "AWS", to: "Docker" },
    ],
  }
);

console.log("✅ Skill relationships created");

console.log("🎉 Database seeding completed successfully!");
  } catch (error) {
    console.error("❌ Database seeding failed:", error);
  } finally {
    await session.close();
    await driver.close();
  }
}

seedDatabase();