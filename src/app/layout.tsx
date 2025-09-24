import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

const baseUrl = new URL("https://a2a-hub.example.com");
const siteName = "A2A HUB";
const description =
  "Discover and explore Agent2Agent Protocol (A2A) servers. Browse categories, filter by tags, and deploy with ease.";

export const metadata: Metadata = {
  metadataBase: baseUrl,
  applicationName: siteName,
  title: {
    default: siteName,
    template: "%s — A2A HUB",
  },
  description,
  keywords: [
    "A2A HUB",
    "A2A",
    "Agent2Agent Protocol",
    "A2A servers",
    "AI tools",
    "developer tools",
    "Agent2Agent"
  ],
  authors: [{ name: "A2A HUB" }],
  creator: "A2A HUB",
  publisher: "A2A HUB",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName,
    title: siteName,
    description,
    images: [{ url: "/og", width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: ["/og"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  category: "technology",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: baseUrl.toString(),
    description,
    inLanguage: "en",
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Script id="theme-init" strategy="beforeInteractive">{`
          try {
            var stored = localStorage.getItem('theme');
            var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            var nextTheme = stored || (prefersDark ? 'dark' : 'light');
            var cl = document.documentElement.classList;
            if (nextTheme === 'dark') cl.add('dark'); else cl.remove('dark');
          } catch (e) {}
        `}</Script>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="mx-auto w-full max-w-[1400px] flex-1 px-4 py-8">{children}</main>
          <footer className="border-t py-8 text-center text-sm text-foreground/60">
            © {new Date().getFullYear()} A2A HUB • Built with Next.js and Tailwind CSS.
          </footer>
        </div>
      </body>
    </html>
  );
}
