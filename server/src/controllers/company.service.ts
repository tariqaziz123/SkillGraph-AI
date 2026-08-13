import { Request, Response } from "express";
import { getCompanies } from "../services/company.service";

export async function fetchCompanies(
    req: Request,
    res: Response
) {
    try {
        const companies = await getCompanies();

        res.json({
            success: true,
            count: companies.length,
            data: companies,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching companies",
        });
    }
}