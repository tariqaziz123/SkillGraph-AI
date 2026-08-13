import { Request, Response } from "express";
import {
    getAllDevelopers,
    getDeveloperById,
    getRecommendedDevelopers,
    getDeveloperProjects
} from "../services/developer.service";
export async function getDevelopers(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const skill = req.query.skill as string | undefined;

        const developers = await getAllDevelopers(skill);

        res.status(200).json({
            success: true,
            count: developers.length,
            data: developers,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

export async function getDeveloper(
    req: Request,
    res: Response
): Promise<void> {

    try {
        const id = req.params.id;

        if (Array.isArray(id)) {
            res.status(400).json({
                success: false,
                message: "Invalid developer id",
            });
            return;
        }

        if (!id.startsWith("dev-")) {
            res.status(400).json({
                success: false,
                message: "Invalid developer id",
            });
            return;
        }

        const developer = await getDeveloperById(id);

        if (!developer) {
            res.status(404).json({
                message: "Developer not found",
            });
            return;
        }

        res.status(200).json({
            success: true,
            data: developer,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

export async function getRecommendations(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const id = req.params.id;

if (Array.isArray(id)) {
    res.status(400).json({
        success: false,
        message: "Invalid developer id",
    });
    return;
}

const developers = await getRecommendedDevelopers(id);

        res.status(200).json({
            success: true,
            count: developers.length,
            data: developers,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch recommendations",
        });
    }
}

export async function getProjects(
  req: Request,
  res: Response
) {
  try {
    const id = req.params.id;

if (Array.isArray(id)) {
    res.status(400).json({
        success: false,
        message: "Invalid developer id",
    });
    return;
}

const projects = await getDeveloperProjects(id);

    res.json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });
  }
}