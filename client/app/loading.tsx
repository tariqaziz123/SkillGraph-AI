export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl animate-pulse">

        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto h-4 w-32 rounded bg-slate-800" />

          <div className="mx-auto mt-5 h-12 w-72 rounded bg-slate-800" />

          <div className="mx-auto mt-4 h-5 w-full max-w-2xl rounded bg-slate-800" />
          <div className="mx-auto mt-2 h-5 w-3/4 max-w-xl rounded bg-slate-800" />
        </div>

        {/* Search */}
        <div className="mx-auto mt-10 h-12 max-w-2xl rounded-xl bg-slate-800" />

        {/* Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-52 rounded-2xl border border-slate-800 bg-slate-900/60"
            />
          ))}
        </div>

      </div>
    </main>
  );
}