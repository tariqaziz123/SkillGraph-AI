import { Technology } from "@/types/technology";

type Props = {
  technology: Technology;
};

export default function TechnologyCard({
  technology,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-cyan-500/50">
      <h2 className="text-lg font-semibold text-cyan-400">
        {technology.name}
      </h2>
    </div>
  );
}