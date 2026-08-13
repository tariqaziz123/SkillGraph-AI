import DeveloperCard from "@/components/DeveloperCard";
import SearchBar from "@/components/SearchBar";
import Stats from "@/components/Stats";
import { getDevelopers } from "@/lib/api";
import { Developer } from "@/types/developer";

type Props = {
  searchParams: Promise<{
    skill?: string;
  }>;
};

export default async function HomePage({ searchParams }: Props) {
  const params = await searchParams;
  const skill = params.skill?.trim() ?? "";

  try {
    const response = await getDevelopers(skill);

    const developers: Developer[] = response.data ?? response;

    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-7xl px-6 py-16">
          {/* Hero */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
              SkillGraph AI
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Find developers by their skills
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Explore developers, skills, projects, technologies,
              and graph-based recommendations.
            </p>

            <SearchBar />
          </div>
          <Stats
            developers={8}
            skills={10}
            companies={5}
            projects={6}
          />
          {/* Results */}
          <div className="mt-16">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">
                  {skill
                    ? `Developers with "${skill}"`
                    : "All Developers"}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {developers.length} developer
                  {developers.length !== 1 ? "s" : ""} found
                </p>
              </div>
            </div>

            {developers.length === 0 ? (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-10 text-center">
                <h3 className="text-xl font-semibold">
                  No developers found
                </h3>

                <p className="mt-2 text-slate-400">
                  Try searching for another skill such as React,
                  TypeScript, Node.js, or GraphQL.
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
          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error(error);

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