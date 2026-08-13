import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-bold text-cyan-400"
        >
          SkillGraph AI
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-slate-300 hover:text-cyan-400"
          >
            Developers
          </Link>

          <Link
            href="/skills"
            className="text-slate-300 hover:text-cyan-400"
          >
            Skills
          </Link>

          <Link
            href="/technologies"
            className="text-slate-300 hover:text-cyan-400"
          >
            Technologies
          </Link>

          <Link
            href="/companies"
            className="text-slate-300 hover:text-cyan-400"
          >
            Companies
          </Link>
        </nav>
      </div>
    </header>
  );
}