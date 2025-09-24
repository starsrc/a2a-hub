"use client";

import {useEffect, useMemo, useState} from "react";
import Link from "next/link";
import {X} from "lucide-react";
import {servers} from "@/data/servers";
import {ServerCard} from "@/components/server-card";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const categories = ["All", ...Array.from(new Set(servers.map((s) => s.category)))];

export function HomeClient() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("All");
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    function selectCategory(c: string) {
        setCategory(c);
        const url = c === "All" ? pathname : `${pathname}?category=${encodeURIComponent(c)}`;
        router.push(url);
    }

    // Sync category state with ?category= from URL so links from cards work
    useEffect(() => {
        const urlCategory = searchParams.get("category") ?? "All";
        if (urlCategory !== category) setCategory(urlCategory);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const tagCounts = useMemo(() => {
        const m = new Map<string, number>();
        for (const s of servers) {
            for (const t of s.tags) {
                m.set(t, (m.get(t) ?? 0) + 1);
            }
        }
        return m;
    }, []);

    const topTags = useMemo(() => {
        const entries = Array.from(tagCounts.entries());
        entries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        return entries.slice(0, 8).map(([tag]) => tag);
    }, [tagCounts]);

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
        <section className="space-y-8">
            <div className="mx-auto max-w-3xl space-y-3 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    <span className="rounded bg-foreground/10 px-2 py-1">A2A</span> HUB
                </h1>
                <p className="text-foreground/70">
                    Discover Agent2Agent Protocol servers. Search, filter, and copy install commands.
                </p>
                <div className="relative">
                    <input
                        suppressHydrationWarning
                        spellCheck={false}
                        placeholder="Search servers..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full rounded-md border px-3 py-2 outline-none ring-0 focus:border-foreground/30"
                    />
                    {query && (
                        <button
                            onClick={() => setQuery("")}
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded px-2 text-xs text-foreground/60 hover:bg-foreground/5"
                        >
                            Clear
                        </button>
                    )}
                </div>
                <div
                    className="text-xs text-foreground/60">{filtered.length} result{filtered.length === 1 ? "" : "s"}</div>
            </div>

            <div className="flex w-full flex-wrap items-center justify-center gap-2">
                {categories.map((c) => (
                    <button
                        key={c}
                        onClick={() => selectCategory(c)}
                        className={`rounded-full border px-3 py-1.5 text-sm ${
                            category === c ? "bg-foreground text-background" : "hover:bg-foreground/5"
                        }`}
                    >
                        {c}
                    </button>
                ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
                {topTags.map((tag) => {
                    const active = selectedTags.includes(tag);
                    return (
                        <button
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            className={`rounded px-2 py-1 text-xs ${
                                active ? "bg-foreground text-background" : "bg-foreground/5 hover:bg-foreground/10"
                            }`}
                        >
                            <span>{tag}</span>
                            <span className="ml-1 text-foreground/60">({tagCounts.get(tag)})</span>
                        </button>
                    );
                })}
                {selectedTags.length > 0 ? (
                    <button
                        onClick={() => setSelectedTags([])}
                        className="inline-flex h-6 w-6 items-center justify-center rounded text-foreground/60 hover:bg-foreground/10"
                        aria-label="Clear tags"
                        title="Clear tags"
                    >
                        <X className="h-3.5 w-3.5"/>
                    </button>
                ) : null}
                <Link href="/tags"
                      className="ml-2 shrink-0 text-xs text-foreground/60 underline underline-offset-4 hover:text-foreground">
                    查看更多
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((s) => (
                    <ServerCard key={s.slug} server={s}/>
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
