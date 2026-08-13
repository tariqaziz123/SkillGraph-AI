import { Request, Response } from "express";
import {
  getAllDevelopers,
  getDeveloperById,
} from "../services/developer.service";
export async function getDevelopers(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const developers = await getAllDevelopers();
    res.status(200).json(developers);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch developers",
    });
  }
}

export async function getDeveloper(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const developer = await getDeveloperById(req.params.id);

    if (!developer) {
      res.status(404).json({
        message: "Developer not found",
      });
      return;
    }

    res.json(developer);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}