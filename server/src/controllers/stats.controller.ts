import { Request, Response } from "express";
import driver from "../config/db";

export const getStats = async (
  req: Request,
  res: Response
) => {
  const session = driver.session();

  try {
    const result = await session.run(`
      RETURN
      COUNT { MATCH (:Developer) } AS developers,
      COUNT { MATCH (:Skill) } AS skills,
      COUNT { MATCH (:Technology) } AS technologies,
      COUNT { MATCH (:Company) } AS companies,
      COUNT { MATCH (:Project) } AS projects
    `);

    const record = result.records[0];

    res.json({
      success: true,
      data: {
        developers: record.get("developers").toNumber(),
        skills: record.get("skills").toNumber(),
        technologies: record.get("technologies").toNumber(),
        companies: record.get("companies").toNumber(),
        projects: record.get("projects").toNumber(),
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch stats",
    });
  } finally {
    await session.close();
  }
};