import { getCompanies } from "../services/company.service";

export async function fetchCompanies(
  req: Request,
  res: Response
) {
  const companies = await getCompanies();

  res.json({
    success: true,
    count: companies.length,
    data: companies,
  });
}