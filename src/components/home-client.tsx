"use client";

import { useMemo, useState } from "react";
import { servers } from "@/data/servers";
import { ServerCard } from "@/components/server-card";

const categories = ["All", ...Array.from(new Set(servers.map((s) => s.category)))];

export function HomeClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(
    () => Array.from(new Set(servers.flatMap((s) => s.tags))).sort(),
    []
  );

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return servers.filter((s) => {
      const inCat = category === "All" || s.category === category;
      const inQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q));
      const hasTags = selectedTags.length === 0 || selectedTags.every((t) => s.tags.includes(t));
      return inCat && inQuery && hasTags;
    });
  }, [query, category, selectedTags]);

  function toggleTag(tag: string) {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  }

  return (
    <section className="space-y-6">
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">A2A HUB</h1>
        <p className="text-foreground/70">
          Discover Model Context Protocol servers. Search, filter, and copy install commands.
        </p>
        <div className="relative">
          <input
            placeholder="Search servers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-md border px-3 py-2 outline-none ring-0 focus:border-foreground/30"
          />
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full border px-3 py-1.5 text-sm ${
              category === c ? "bg-foreground text-background" : "hover:bg-foreground/5"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {allTags.map((tag) => {
          const active = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`rounded px-2 py-1 text-xs ${
                active ? "bg-foreground text-background" : "bg-foreground/5 hover:bg-foreground/10"
              }`}
            >
              {tag}
            </button>
          );
        })}
        {selectedTags.length > 0 ? (
          <button onClick={() => setSelectedTags([])} className="text-xs text-foreground/60 underline">
            Clear tags
          </button>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <ServerCard key={s.slug} server={s} />
        ))}
        {filtered.length === 0 ? (
          <div className="col-span-full rounded border p-6 text-center text-sm text-foreground/60">
            No results. Try a different search or category.
          </div>
        ) : null}
      </div>
    </section>
  );
}
