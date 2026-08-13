import { Request, Response } from "express";
import {
    getAllDevelopers,
    getDeveloperById,
    getRecommendedDevelopers,
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
        const { id } = req.params;

        if (!id.startsWith("dev-")) {
            return res.status(400).json({
                success: false,
                message: "Invalid developer id"
            });
        }
        const developer = await getDeveloperById(req.params.id);

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
        const developers = await getRecommendedDevelopers(req.params.id);

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