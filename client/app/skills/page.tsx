import PageHeader from "@/components/PageHeader";
import SkillCard from "@/components/SkillCard";
import { getSkills } from "@/lib/api";
import { Skill } from "@/types/skill";

export default async function SkillsPage() {
    try {
        const response = await getSkills();

        const skills: Skill[] = response.data ?? response;

        return (
            <main className="min-h-screen bg-slate-950 text-white">
                <section className="mx-auto max-w-7xl px-6 py-16">
                    <PageHeader
                        eyebrow="SkillGraph AI"
                        title="Skills"
                        description="Browse all skills available in the developer knowledge graph."
                    />

                    {skills.length === 0 ? (
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 text-center">
                            <h2 className="text-xl font-semibold">
                                No skills found
                            </h2>
                        </div>
                    ) : (
                        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {skills.map((skill) => (
                                <SkillCard
                                    key={skill.id}
                                    skill={skill}
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
                    Failed to load skills.
                </h1>
            </main>
        );
    }
}