import { use } from "react";
import Link from "next/link";
import { servers } from "@/data/servers";
import { ServerCard } from "@/components/server-card";

export default function TagDetailPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: raw } = use(params);
  const tag = decodeURIComponent(raw ?? "");
  const matches = servers.filter((s) => s.tags.includes(tag));

  return (
    <section className="space-y-6 py-8">
      <div className="mx-auto max-w-4xl space-y-2">
        <div className="text-sm text-foreground/60">
          <Link href="/tags" className="underline underline-offset-4 hover:text-foreground">
            全部标签
          </Link>
          <span className="mx-2">/</span>
          <span>{tag}</span>
        </div>
        <h1 className="text-3xl font-bold">{tag} · {matches.length}</h1>
      </div>

      <div className="mx-auto max-w-6xl">
        {matches.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {matches.map((s) => (
              <ServerCard key={s.slug} server={s} />
            ))}
          </div>
        ) : (
          <div className="rounded border p-6 text-center text-sm text-foreground/60">
            No servers found for this tag.
          </div>
        )}
      </div>
    </section>
  );
}

export function generateStaticParams() {
  const tags = new Set<string>();
  for (const s of servers) for (const t of s.tags) tags.add(t);
  return Array.from(tags).map((t) => ({ tag: encodeURIComponent(t) }));
}
