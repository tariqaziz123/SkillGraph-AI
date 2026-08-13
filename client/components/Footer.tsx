export default function Footer() {
  return (
    <footer className="mt-5 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-xl font-bold text-cyan-400">
              SkillGraph AI
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Developer discovery powered by graph databases.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span className="rounded-full bg-slate-900 px-3 py-1">
              Next.js
            </span>

            <span className="rounded-full bg-slate-900 px-3 py-1">
              Express.js
            </span>

            <span className="rounded-full bg-slate-900 px-3 py-1">
              TypeScript
            </span>

            <span className="rounded-full bg-slate-900 px-3 py-1">
              Tailwind CSS
            </span>

            <span className="rounded-full bg-slate-900 px-3 py-1">
              CognoDB
            </span>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} SkillGraph AI • Built for the Wexa AI Software Engineer Assessment.
        </div>
      </div>
    </footer>
  );
}