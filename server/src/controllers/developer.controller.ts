import { Request, Response } from "express";
import { getAllDevelopers } from "../services/developer.service";

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