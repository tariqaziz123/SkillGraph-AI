import { Request, Response } from "express";
import { getTechnologies } from "../services/technology.service";

export async function fetchTechnologies(
  req: Request,
  res: Response
) {
    try {
        const technologies = await getTechnologies();

        res.json({
            success: true,
            count: technologies.length,
            data: technologies,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching technologies",
        });
    }
}