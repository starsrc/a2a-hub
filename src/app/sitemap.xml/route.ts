import {servers} from "@/data/servers";

export async function GET(req: Request) {
    const {origin} = new URL(req.url);
    const urls: string[] = ["/", "/about", ...servers.map((s) => `/servers/${s.slug}`)].map(
        (p) => new URL(p, origin).toString(),
    );

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
        .map(
            (u) => `  <url>
    <loc>${u}</loc>
    <changefreq>weekly</changefreq>
    <priority>${u.endsWith("/") ? "1.0" : u.includes("/servers/") ? "0.7" : "0.6"}</priority>
  </url>`,
        )
        .join("\n")}
</urlset>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "no-cache, no-store",
        },
    });
}
