import { getSkills } from "../services/skill.service";

export async function fetchSkills(
  req: Request,
  res: Response
) {
    try {
        const skills = await getSkills();

        res.json({
            success: true,
            count: skills.length,
            data: skills,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching skills",
        });
    }
}