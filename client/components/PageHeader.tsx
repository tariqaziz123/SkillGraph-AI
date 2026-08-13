type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="mb-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        {eyebrow}
      </p>

      <h1 className="mt-3 text-5xl font-bold tracking-tight">
        {title}
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
        {description}
      </p>
    </div>
  );
}