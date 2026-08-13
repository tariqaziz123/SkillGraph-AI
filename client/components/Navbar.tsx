"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Developers",
    href: "/",
  },
  {
    name: "Skills",
    href: "/skills",
  },
  {
    name: "Technologies",
    href: "/technologies",
  },
  {
    name: "Companies",
    href: "/companies",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-bold text-cyan-400"
        >
          SkillGraph AI
        </Link>

        <nav className="flex items-center gap-6">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  active
                    ? "font-semibold text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}