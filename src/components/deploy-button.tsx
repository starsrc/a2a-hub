"use client";

import { useState } from "react";
import { Rocket, Check } from "lucide-react";

export function DeployButton({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1 rounded-md bg-foreground px-3 py-1.5 text-sm text-background hover:opacity-90"
      aria-label="Deploy"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" aria-hidden="true" /> Copied
        </>
      ) : (
        <>
          <Rocket className="h-4 w-4" aria-hidden="true" /> Deploy
        </>
      )}
    </button>
  );
}
