import PageHeader from "@/components/PageHeader";
import TechnologyCard from "@/components/TechnologyCard";
import { getTechnologies } from "@/lib/api";
import { Technology } from "@/types/technology";

export default async function TechnologiesPage() {
    try {
        const response = await getTechnologies();

        const technologies: Technology[] = response.data ?? response;

        return (
            <main className="min-h-screen bg-slate-950 text-white">
                <section className="mx-auto max-w-7xl px-6 py-16">
                    <PageHeader
                        eyebrow="SkillGraph AI"
                        title="Technologies"
                        description="Explore technologies used across developers and projects in the knowledge graph."
                    />
                    {technologies.length === 0 ? (
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 text-center">
                            <h2 className="text-xl font-semibold">
                                No technologies found
                            </h2>
                        </div>
                    ) : (
                        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {technologies.map((technology) => (
                                <TechnologyCard
                                    key={technology.id}
                                    technology={technology}
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
                    Failed to load technologies.
                </h1>
            </main>
        );
    }
}