import Link from "next/link";
import { Developer } from "@/types/developer";

type Props = {
  developer: Developer;
};

export default function DeveloperCard({ developer }: Props) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-500/50">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            {developer.name}
          </h2>

          {developer.location && (
            <p className="mt-1 text-sm text-slate-400">
              {developer.location}
            </p>
          )}
        </div>

        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
          Developer
        </span>
      </div>

      {developer.experienceYears !== undefined && (
        <p className="mb-5 text-sm text-slate-400">
          {developer.experienceYears} years experience
        </p>
      )}

      <Link
        href={`/developers/${developer.id}`}
        className="inline-flex rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-400"
      >
        View Profile
      </Link>
    </div>
  );
}