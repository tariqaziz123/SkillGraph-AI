import DeveloperCard from "@/components/DeveloperCard";
import { getDevelopers } from "@/lib/api";
import { Developer } from "@/types/developer";

export default async function HomePage() {
  try {
    const response = await getDevelopers();

    const developers: Developer[] = response.data ?? response;

    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
              SkillGraph AI
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Explore developer skills and connections
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Discover developers, their skills, projects, technologies,
              and graph-based recommendations.
            </p>
          </div>

          {developers.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-10 text-center">
              <h2 className="text-xl font-semibold">
                No developers found
              </h2>

              <p className="mt-2 text-slate-400">
                There are currently no developers available.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {developers.map((developer) => (
                <DeveloperCard
                  key={developer.id}
                  developer={developer}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    );
  } catch {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-2xl rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center">
          <h1 className="text-xl font-semibold">
            Unable to load developers
          </h1>

          <p className="mt-2 text-slate-400">
            Please make sure the backend server is running and try again.
          </p>
        </div>
      </main>
    );
  }
}