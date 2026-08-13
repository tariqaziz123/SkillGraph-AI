type Props = {
  developers: number;
  skills: number;
  companies: number;
  projects: number;
};

export default function Stats({
  developers,
  skills,
  companies,
  projects,
}: Props) {
  const stats = [
    {
      title: "Developers",
      value: developers,
    },
    {
      title: "Skills",
      value: skills,
    },
    {
      title: "Companies",
      value: companies,
    },
    {
      title: "Projects",
      value: projects,
    },
  ];

  return (
    <section className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
        >
          <p className="text-sm text-slate-400">
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