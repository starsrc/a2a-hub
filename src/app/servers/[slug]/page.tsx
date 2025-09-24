import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servers } from "@/data/servers";
import { DeployButton } from "@/components/deploy-button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servers.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = servers.find((x) => x.slug === slug);
  if (!s) return { title: "Server not found — A2A HUB" };
  return { title: s.name + " — A2A HUB", description: s.description };
}

export default async function ServerPage({ params }: Props) {
  const { slug } = await params;
  const s = servers.find((x) => x.slug === slug);
  if (!s) return notFound();
  const install = s.install ?? (s.npm ? "npx " + s.npm : undefined);
  return (
    <div className="mx-auto max-w-3xl space-y-6 py-8">
      <div>
        <Link href="/" className="text-sm text-foreground/70 underline">
          ← Back to all servers
        </Link>
      </div>
      <h1 className="text-3xl font-bold">{s.name}</h1>
      <p className="text-foreground/70">{s.description}</p>
      <div className="flex flex-wrap gap-2">
        {s.tags.map((t) => (
          <span key={t} className="rounded bg-foreground/5 px-2 py-0.5 text-xs">
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {install ? <DeployButton command={install} /> : null}
        {s.website ? (
          <a className="rounded-md bg-foreground px-3 py-1.5 text-sm text-background hover:opacity-90" href={s.website} target="_blank" rel="noreferrer">Website</a>
        ) : null}
        {s.repo ? (
          <a className="rounded-md border px-3 py-1.5 text-sm hover:bg-foreground/5" href={s.repo} target="_blank" rel="noreferrer">GitHub</a>
        ) : null}
      </div>
      <div className="rounded-md border p-4 text-sm text-foreground/80">
        <p>
            Deployment instructions: Please deploy according to the project documentation. For detailed steps, see
          {s.website ? (
            <> {""}<a className="underline" href={s.website} target="_blank" rel="noreferrer">Website</a></>
          ) : null}
          {s.website && s.repo ? " 或 " : ""}
          {s.repo ? (
            <a className="underline" href={s.repo} target="_blank" rel="noreferrer">Repo</a>
          ) : null}
          。
        </p>
      </div>
    </div>
  );
}
