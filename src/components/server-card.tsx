"use client";

import Link from "next/link";
import {useState} from "react";
import {ExternalLink, Rocket, Check} from "lucide-react";
import type {Server} from "@/data/servers";

export function ServerCard({server}: { server: Server }) {
    const [copied, setCopied] = useState(false);
    const install = server.install ?? (server.npm ? "npx " + server.npm : undefined);

    // Limit visible tags on cards to improve layout; show all tags on detail page
    const MAX_VISIBLE_TAGS = 3;
    const visibleTags = server.tags.slice(0, MAX_VISIBLE_TAGS);
    const hasMore = server.tags.length > MAX_VISIBLE_TAGS;
    const remaining = Math.max(0, server.tags.length - MAX_VISIBLE_TAGS);

    async function copyInstall() {
        if (!install) return;
        try {
            await navigator.clipboard.writeText(install);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch {
        }
    }

    return (
        <div
            className="rounded-lg border p-4 shadow-sm transition duration-200 ease-in-out hover:shadow-md hover:brightness-95 transform-gpu hover:-translate-y-0.5">
            <div className="flex items-start justify-between gap-2">
                <Link href={`/servers/${server.slug}`} className="font-semibold hover:underline underline-offset-4">
                    {server.name}
                </Link>
                <div className="flex items-center gap-2">
                    {server.website ? (
                        <a
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-foreground/5"
                            href={server.website}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Website"
                        >
                            <ExternalLink className="h-4 w-4"/>
                        </a>
                    ) : null}
                </div>
            </div>
            <div className="mt-2 text-sm text-foreground/70">{server.description}</div>
            <div className="mt-3 flex flex-wrap gap-1">
                {visibleTags.map((t) => (
                    <Link
                        key={t}
                        href={`/tags/${encodeURIComponent(t)}`}
                        className="rounded bg-foreground/5 px-2 py-0.5 text-xs hover:bg-foreground/10"
                    >
                        {t}
                    </Link>
                ))}
                {hasMore ? (
                    <span
                        className="rounded bg-foreground/5 px-2 py-0.5 text-xs"
                        title={`${remaining} more`}
                        aria-label={`${remaining} more tags`}
                    >
                        ...
                    </span>
                ) : null}
            </div>
            <div className="mt-4 flex items-center justify-between">
                <Link
                    href={`/?category=${encodeURIComponent(server.category)}`}
                    className="text-xs text-foreground/60 hover:underline underline-offset-4"
                    title={`View ${server.category} servers`}
                >
                    {server.category}
                </Link>
                <div className="flex items-center gap-2">
                    {install ? (
                        <button
                            className="inline-flex items-center gap-1 rounded-md bg-foreground px-3 py-1.5 text-sm text-background hover:opacity-90"
                            onClick={copyInstall}
                        >
                            {copied ? (
                                <>
                                    <Check className="h-4 w-4"/> Copied
                                </>
                            ) : (
                                <>
                                    <Rocket className="h-4 w-4"/> Deploy
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
