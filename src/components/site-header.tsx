"use client";

import Link from "next/link";
import { Github, Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const stored = typeof window !== "undefined" ? (localStorage.getItem("theme") as "light" | "dark" | null) : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = stored ?? (prefersDark ? "dark" : "light");
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", next);
    }
    document.documentElement.classList.toggle("dark", next === "dark");
  }

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border hover:bg-foreground/5"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

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
              <Link href="/" className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground aria-[current=page]:text-foreground" aria-current="page">Discover</Link>
              <Link href="/about" className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground">About</Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
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
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-foreground/5"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      {open ? (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-72 bg-background border-r p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Menu</div>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="inline-flex h-8 w-8 items-center justify-center rounded-md border hover:bg-foreground/5">
                <X className="h-4 w-4" />
              </button>
            </div>
            <Link href="/" onClick={() => setOpen(false)} className="rounded px-2 py-2 text-sm hover:bg-foreground/5">Discover</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="rounded px-2 py-2 text-sm hover:bg-foreground/5">About</Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
