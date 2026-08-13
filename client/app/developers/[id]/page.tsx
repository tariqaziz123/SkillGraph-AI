import Link from "next/link";

import {
    getDeveloper,
    getDeveloperProjects,
    getRecommendations,
} from "@/lib/api";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function DeveloperPage({ params }: Props) {
    const { id } = await params;

    try {
        // First check whether the developer exists
        const developerResponse = await getDeveloper(id);

        if (!developerResponse) {
            return (
                <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-3xl font-bold">
                            Developer not found
                        </h1>

                        <p className="mt-3 text-slate-400">
                            The developer you're looking for doesn't exist.
                        </p>

                        <Link
                            href="/"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-400"
                        >
                            ← Back to developers
                        </Link>
                    </div>
                </main>
            );
        }

        // Only fetch related data after confirming the developer exists
        const [projectsResponse, recommendationsResponse] =
            await Promise.all([
                getDeveloperProjects(id),
                getRecommendations(id),
            ]);

        const developer = developerResponse.data ?? developerResponse;
        const projects =
            projectsResponse?.data ?? projectsResponse ?? [];
        const recommendations =
            recommendationsResponse?.data ??
            recommendationsResponse ??
            [];

        return (
            <main className="min-h-screen bg-slate-950 text-white">
                <div className="mx-auto max-w-6xl px-6 py-12">

                    {/* Back */}
                    <Link
                        href="/"
                        className="text-sm text-slate-400 transition hover:text-cyan-400"
                    >
                        ← Back to developers
                    </Link>

                    {/* Profile Header */}
                    {/* Profile Header */}
                    <section className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/20">
                        <div className="p-8 sm:p-10">
                            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

                                {/* Developer Information */}
                                <div className="flex items-center gap-5">
                                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-4xl">
                                        👨‍💻
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                                            Developer Profile
                                        </p>

                                        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                                            {developer.name}
                                        </h1>

                                        {developer.location && (
                                            <p className="mt-2 text-slate-400">
                                                📍 {developer.location}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Experience */}
                                {developer.experienceYears !== undefined && (
                                    <div className="rounded-2xl border border-slate-700 bg-slate-950/80 px-8 py-5 text-center">
                                        <p className="text-3xl font-bold text-cyan-400">
                                            {developer.experienceYears}
                                        </p>

                                        <p className="mt-1 text-sm text-slate-400">
                                            Years Experience
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    {/* Skills */}
                    <section className="mt-10">
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                                    Expertise
                                </p>

                                <h2 className="mt-2 text-2xl font-bold">
                                    Skills
                                </h2>
                            </div>

                            {developer.skills?.length > 0 && (
                                <span className="text-sm text-slate-500">
                                    {developer.skills.length} skills
                                </span>
                            )}
                        </div>

                        {developer.skills?.length === 0 ? (
                            <div className="mt-5 rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-8 text-center">
                                <p className="text-slate-400">
                                    No skills listed for this developer.
                                </p>
                            </div>
                        ) : (
                            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {developer.skills.map(
                                    (
                                        skill: {
                                            name: string;
                                            level?: string;
                                        },
                                        index: number
                                    ) => (
                                        <div
                                            key={`${skill.name}-${index}`}
                                            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-slate-900"
                                        >
                                            <div className="flex items-center justify-between gap-4">
                                                <h3 className="font-semibold text-white">
                                                    {skill.name}
                                                </h3>

                                                {skill.level && (
                                                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                                                        {skill.level}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-800">
                                                <div
                                                    className={`h-full rounded-full ${skill.level === "Advanced"
                                                        ? "w-full"
                                                        : skill.level === "Intermediate"
                                                            ? "w-2/3"
                                                            : "w-1/3"
                                                        } bg-cyan-400`}
                                                />
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </section>

                    {/* Projects */}
                    <section className="mt-12">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                                Work
                            </p>

                            <h2 className="mt-2 text-2xl font-bold">
                                Projects
                            </h2>

                            <p className="mt-2 text-slate-400">
                                Projects this developer has contributed to.
                            </p>
                        </div>

                        {projects.length === 0 ? (
                            <div className="mt-5 rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-8 text-center">
                                <div className="text-4xl">📂</div>

                                <p className="mt-3 text-slate-400">
                                    No projects found for this developer.
                                </p>
                            </div>
                        ) : (
                            <div className="mt-6 grid gap-5 sm:grid-cols-2">
                                {projects.map((project: any) => (
                                    <div
                                        key={project.id ?? project.name}
                                        className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-slate-900 hover:shadow-lg hover:shadow-cyan-500/5"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                                                    Project
                                                </p>

                                                <h3 className="mt-2 text-xl font-bold">
                                                    {project.name}
                                                </h3>
                                            </div>

                                            <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                                                🚀
                                            </span>
                                        </div>

                                        {project.description && (
                                            <p className="mt-4 text-sm leading-6 text-slate-400">
                                                {project.description}
                                            </p>
                                        )}

                                        {project.technologies?.length > 0 && (
                                            <div className="mt-5">
                                                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                                                    Technologies
                                                </p>

                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map(
                                                        (technology: string) => (
                                                            <span
                                                                key={technology}
                                                                className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs text-slate-300 transition group-hover:border-slate-600"
                                                            >
                                                                {technology}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>

                    {/* Recommendations */}
                    <section className="mt-12 pb-16">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                                Graph Connections
                            </p>

                            <h2 className="mt-2 text-2xl font-bold">
                                Recommended Developers
                            </h2>

                            <p className="mt-2 text-slate-400">
                                Developers with similar skills based on the knowledge graph.
                            </p>
                        </div>

                        {recommendations.length === 0 ? (
                            <div className="mt-6 rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-8 text-center">
                                <div className="text-4xl">🔍</div>

                                <p className="mt-3 text-slate-400">
                                    No similar developers found.
                                </p>
                            </div>
                        ) : (
                            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {recommendations.map((recommended: any) => (
                                    <Link
                                        key={recommended.id}
                                        href={`/developers/${recommended.id}`}
                                        className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-slate-900 hover:shadow-lg hover:shadow-cyan-500/5"
                                    >
                                        {/* Developer */}
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-2xl">
                                                👨‍💻
                                            </div>

                                            <div>
                                                <h3 className="font-semibold transition group-hover:text-cyan-400">
                                                    {recommended.name}
                                                </h3>

                                                <p className="mt-1 text-xs text-slate-500">
                                                    {recommended.commonSkills} shared{" "}
                                                    {recommended.commonSkills === 1
                                                        ? "skill"
                                                        : "skills"}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Shared Skills */}
                                        {recommended.sharedSkills?.length > 0 && (
                                            <div className="mt-5">
                                                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                                                    Shared Skills
                                                </p>

                                                <div className="flex flex-wrap gap-2">
                                                    {recommended.sharedSkills.map(
                                                        (skill: string) => (
                                                            <span
                                                                key={skill}
                                                                className="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-300"
                                                            >
                                                                {skill}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* View Profile */}
                                        <div className="mt-5 text-sm font-medium text-cyan-400 transition group-hover:translate-x-1">
                                            View Profile →
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </section>

                </div>
            </main>
        );
    } catch (error) {
        console.error(error);

        return (
            <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
                <div className="mx-auto max-w-2xl rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center">
                    <h1 className="text-xl font-semibold">
                        Unable to load developer
                    </h1>

                    <p className="mt-2 text-slate-400">
                        Please make sure the backend is running and try again.
                    </p>
                </div>
            </main>
        );
    }
}