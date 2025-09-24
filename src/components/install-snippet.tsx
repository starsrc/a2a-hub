"use client";

import {useState} from "react";
import {Clipboard, Check} from "lucide-react";

export function InstallSnippet({command}: { command: string }) {
    const [copied, setCopied] = useState(false);

    async function copy() {
        try {
            await navigator.clipboard.writeText(command);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch {
        }
    }

    return (
        <div className="rounded-md border bg-foreground/5 p-4">
            <p className="mb-2 text-sm font-medium">Install command</p>
            <div className="flex items-center justify-between gap-2">
        <pre className="flex-1 overflow-x-auto rounded bg-foreground/10 p-3 text-sm">
          <code>{command}</code>
        </pre>
                <button
                    onClick={copy}
                    className="shrink-0 inline-flex items-center gap-1 rounded-md bg-foreground px-3 py-1.5 text-sm text-background hover:opacity-90"
                >
                    {copied ? (
                        <>
                            <Check className="h-4 w-4"/> Copied
                        </>
                    ) : (
                        <>
                            <Clipboard className="h-4 w-4"/> Copy
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
