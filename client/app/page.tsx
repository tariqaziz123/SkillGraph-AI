import DeveloperCard from "@/components/DeveloperCard";
import PageHeader from "@/components/PageHeader";
import SearchBar from "@/components/SearchBar";
import Stats from "@/components/Stats";
import { getDevelopers, getStats } from "@/lib/api";
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
    const [developersResponse, statsResponse] = await Promise.all([
      getDevelopers(skill),
      getStats(),
    ]);

    const developers = developersResponse.data ?? developersResponse;
    const stats = statsResponse.data ?? statsResponse;

    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/30 px-8 py-20">
          {/* Hero */}
          <div className="mx-auto max-w-3xl text-center">
            <PageHeader
              eyebrow="SkillGraph AI"
              title="Discover Developers"
              description="Search developers by skills, explore projects, discover technologies and receive graph-powered recommendations."
            />

            <SearchBar />
          </div>
          <Stats
            developers={stats.developers}
            skills={stats.skills}
            companies={stats.companies}
            projects={stats.projects}
            technologies={stats.technologies}
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
                {developers.map((developer: Developer) => (
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