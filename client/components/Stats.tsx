type Props = {
    developers: number;
    skills: number;
    technologies: number;
    companies: number;
    projects: number;
};

export default function Stats({
    developers,
    skills,
    technologies,
    companies,
    projects,
}: Props) {
    const stats = [
        {
            icon: "👨‍💻",
            title: "Developers",
            value: developers,
        },
        {
            icon: "🛠",
            title: "Skills",
            value: skills,
        },
        {
            icon: "⚙️",
            title: "Technologies",
            value: technologies,
        },
        {
            icon: "🏢",
            title: "Companies",
            value: companies,
        },
        {
            icon: "🚀",
            title: "Projects",
            value: projects,
        },
    ];

    return (
        <section className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((stat) => (
                <div
                    key={stat.title}
                    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                    <div className="text-3xl">
                        {stat.icon}
                    </div>

                    <p className="mt-3 text-sm text-slate-400">
                        {stat.title}
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-cyan-400">
                        {stat.value}
                    </h2>
                </div>
            ))}
        </section>
    );
}