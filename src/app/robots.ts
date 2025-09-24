export default function robots() {
    // Prefer a single source of truth for the public site URL
    // e.g. set NEXT_PUBLIC_SITE_URL=https://your-domain.tld
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "http://localhost:3000";
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: `${siteUrl.replace(/\/$/, "")}/sitemap.xml`,
        host: siteUrl.replace(/\/$/, ""),
    };
}
