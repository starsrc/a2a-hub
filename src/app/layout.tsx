import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A2A HUB — MCP Servers Directory",
  description:
    "Discover and explore Model Context Protocol (MCP) servers. Browse categories, filter by tags, and copy install commands.",
  metadataBase: new URL("https://a2a-hub.example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="mx-auto w-full max-w-[1400px] flex-1 px-4 py-8">{children}</main>
          <footer className="border-t py-8 text-center text-sm text-foreground/60">
            Built for A2A HUB with Next.js and Tailwind CSS.
          </footer>
        </div>
      </body>
    </html>
  );
}
