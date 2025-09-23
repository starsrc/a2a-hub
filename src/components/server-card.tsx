"use client";

import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Clipboard, Check } from "lucide-react";
import type { Server } from "@/data/servers";

export function ServerCard({ server }: { server: Server }) {
  const [copied, setCopied] = useState(false);
  const install = server.install ?? (server.npm ? "npx " + server.npm : undefined);

  async function copyInstall() {
    if (!install) return;
    try {
      await navigator.clipboard.writeText(install);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div className="font-semibold">{server.name}</div>
        <div className="flex items-center gap-2">
          {server.website ? (
            <a
              className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-foreground/5"
              href={server.website}
              target="_blank"
              rel="noreferrer"
              aria-label="Website"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
      <div className="mt-2 text-sm text-foreground/70">{server.description}</div>
      <div className="mt-3 flex flex-wrap gap-1">
        {server.tags.map((t) => (
          <span key={t} className="rounded bg-foreground/5 px-2 py-0.5 text-xs">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs text-foreground/60">{server.category}</div>
        <div className="flex items-center gap-2">
          {install ? (
            <button
              className="inline-flex items-center gap-1 rounded-md bg-foreground px-3 py-1.5 text-sm text-background hover:opacity-90"
              onClick={copyInstall}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" /> Copied
                </>
              ) : (
                <>
                  <Clipboard className="h-4 w-4" /> Install
                </>
              )}
            </button>
          ) : null}
          {server.repo ? (
            <a
              className="inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-foreground/5"
              href={server.repo}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          ) : null}
          <Link
            className="inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-foreground/5"
            href={`/servers/${server.slug}`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
