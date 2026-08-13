"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSkill = searchParams.get("skill") ?? "";

  const [skill, setSkill] = useState(currentSkill);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedSkill = skill.trim();

    if (!trimmedSkill) {
      router.push("/");
      return;
    }

    router.push(`/?skill=${encodeURIComponent(trimmedSkill)}`);
  }

  function handleClear() {
    setSkill("");
    router.push("/");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex flex-col gap-3 sm:flex-row"
    >
      <div className="relative flex-1">
        <input
          type="text"
          value={skill}
          onChange={(event) => setSkill(event.target.value)}
          placeholder="Search by skill e.g. React, Node.js, GraphQL"
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 pr-20 text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"
        />

        {skill && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-400 hover:text-white"
          >
            Clear
          </button>
        )}
      </div>

      <button
        type="submit"
        className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
      >
        Search
      </button>
    </form>
  );
}