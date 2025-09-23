"use client";

import Link from "next/link";
import { Github, Menu } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto w-full max-w-[1400px] px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="rounded bg-[color:var(--foreground)]/10 px-2 py-0.5 text-sm text-foreground">A2A</span>
              <span>HUB</span>
            </Link>
            <nav className="hidden md:flex items-center">
              <Link href="/" className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground">Discover</Link>
              <Link href="/about" className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground">About</Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <a
              className="inline-flex h-8 items-center gap-2 rounded-md px-3 text-sm text-foreground/80 hover:text-foreground"
              href="https://github.com/your-org/a2a-hub"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              className="inline-flex h-8 items-center rounded-md bg-foreground px-3 text-sm text-background hover:opacity-90"
              href="https://github.com/your-org/a2a-hub/issues/new?title=New%20MCP%20Server&labels=server"
              target="_blank"
              rel="noreferrer"
            >
              Submit
            </a>
            <div className="md:hidden">
              <button
                aria-label="Open menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-foreground/5"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
