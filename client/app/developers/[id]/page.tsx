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
        const [developerResponse, projectsResponse, recommendationsResponse] =
            await Promise.all([
                getDeveloper(id),
                getDeveloperProjects(id),
                getRecommendations(id),
            ]);

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
                            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-400"
                        >
                            ← Back to developers
                        </Link>
                    </div>
                </main>
            );
        }

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
                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold">
                            Skills
                        </h2>

                        <div className="mt-4 flex flex-wrap gap-3">
                            {developer.skills?.map(
                                (
                                    skill: {
                                        name: string;
                                        level?: string;
                                    },
                                    index: number
                                ) => (
                                    <div
                                        key={`${skill.name}-${index}`}
                                        className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3"
                                    >
                                        <p className="font-medium text-cyan-300">
                                            {skill.name}
                                        </p>

                                        {skill.level && (
                                            <p className="mt-1 text-xs text-slate-400">
                                                {skill.level}
                                            </p>
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="mt-10">
                        <h2 className="text-2xl font-semibold">
                            Projects
                        </h2>

                        {projects.length === 0 ? (
                            <p className="mt-4 text-slate-400">
                                No projects found.
                            </p>
                        ) : (
                            <div className="mt-5 grid gap-5 sm:grid-cols-2">
                                {projects.map((project: any) => (
                                    <div
                                        key={project.id ?? project.name}
                                        className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
                                    >
                                        <h3 className="text-lg font-semibold">
                                            {project.name}
                                        </h3>

                                        {project.description && (
                                            <p className="mt-2 text-sm text-slate-400">
                                                {project.description}
                                            </p>
                                        )}

                                        {project.technologies?.length > 0 && (
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {project.technologies.map(
                                                    (technology: string) => (
                                                        <span
                                                            key={technology}
                                                            className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                                                        >
                                                            {technology}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>

                    {/* Recommendations */}
                    <section className="mt-10 pb-16">
                        <h2 className="text-2xl font-semibold">
                            Recommended Developers
                        </h2>

                        {recommendations.length === 0 ? (
                            <p className="mt-4 text-slate-400">
                                No similar developers found.
                            </p>
                        ) : (
                            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {recommendations.map((developer: any) => (
                                    <Link
                                        key={developer.id}
                                        href={`/developers/${developer.id}`}
                                        className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-cyan-500/50"
                                    >
                                        <h3 className="font-semibold">
                                            {developer.name}
                                        </h3>

                                        <p className="mt-2 text-sm text-slate-400">
                                            {developer.commonSkills} shared skills
                                        </p>

                                        {developer.sharedSkills?.length > 0 && (
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {developer.sharedSkills.map(
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
                                        )}
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