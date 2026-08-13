import { getSkills } from "../services/skill.service";

export async function fetchSkills(
  req: Request,
  res: Response
) {
  const skills = await getSkills();

  res.json({
    success: true,
    count: skills.length,
    data: skills,
  });
}