import Link from "next/link";
import { Developer } from "@/types/developer";

type Props = {
  developer: Developer;
};

export default function DeveloperCard({ developer }: Props) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10">

      {/* Avatar */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 text-3xl">
        👤
      </div>

      {/* Name */}
      <h2 className="mt-5 text-xl font-bold">
        {developer.name}
      </h2>

      {/* Location */}
      {developer.location && (
        <p className="mt-2 text-sm text-slate-400">
          📍 {developer.location}
        </p>
      )}

      {/* Experience */}
      {developer.experienceYears !== undefined && (
        <p className="mt-2 text-sm text-slate-400">
          💼 {developer.experienceYears} years experience
        </p>
      )}

      {/* Skills */}
      {developer.skills?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {developer.skills.slice(0, 3).map((skill: any) => (
            <span
              key={skill.id ?? skill.name}
              className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
            >
              {skill.name}
            </span>
          ))}

          {developer.skills.length > 3 && (
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
              +{developer.skills.length - 3} more
            </span>
          )}
        </div>
      )}

      {/* Button */}
      <Link
        href={`/developers/${developer.id}`}
        className="mt-6 inline-flex items-center font-medium text-cyan-400 transition group-hover:translate-x-1"
      >
        View Profile →
      </Link>
    </div>
  );
}