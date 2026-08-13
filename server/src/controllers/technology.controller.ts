import { getTechnologies } from "../services/technology.service";

export async function fetchTechnologies(
  req: Request,
  res: Response
) {
  const technologies = await getTechnologies();

  res.json({
    success: true,
    count: technologies.length,
    data: technologies,
  });
}