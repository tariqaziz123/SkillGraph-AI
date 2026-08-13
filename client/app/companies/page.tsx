import CompanyCard from "@/components/CompanyCard";
import { getCompanies } from "@/lib/api";
import { Company } from "@/types/company";

export default async function CompaniesPage() {
  try {
    const response = await getCompanies();

    const companies: Company[] = response.data ?? response;

    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
              SkillGraph AI
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              Companies
            </h1>

            <p className="mt-3 text-slate-400">
              Browse all companies connected to developers in the graph.
            </p>
          </div>

          {companies.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 text-center">
              <h2 className="text-xl font-semibold">
                No companies found
              </h2>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {companies.map((company) => (
                <CompanyCard
                  key={company.id}
                  company={company}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    );
  } catch {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <h1 className="text-2xl">
          Failed to load companies.
        </h1>
      </main>
    );
  }
}