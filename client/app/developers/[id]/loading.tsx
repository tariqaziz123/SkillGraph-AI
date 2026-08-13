export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl animate-pulse">

        {/* Back link */}
        <div className="h-4 w-36 rounded bg-slate-800" />

        {/* Profile */}
        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <div className="h-20 w-20 rounded-full bg-slate-800" />

              <div>
                <div className="h-4 w-32 rounded bg-slate-800" />
                <div className="mt-3 h-9 w-56 rounded bg-slate-800" />
                <div className="mt-3 h-4 w-32 rounded bg-slate-800" />
              </div>
            </div>

            <div className="h-24 w-36 rounded-2xl bg-slate-800" />
          </div>
        </section>

        {/* Skills */}
        <section className="mt-10">
          <div className="h-4 w-24 rounded bg-slate-800" />
          <div className="mt-3 h-7 w-32 rounded bg-slate-800" />

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-24 rounded-2xl border border-slate-800 bg-slate-900/60"
              />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mt-12">
          <div className="h-4 w-20 rounded bg-slate-800" />
          <div className="mt-3 h-7 w-32 rounded bg-slate-800" />

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-48 rounded-2xl border border-slate-800 bg-slate-900/60"
              />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}