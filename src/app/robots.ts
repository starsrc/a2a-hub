export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: "https://a2a-protocol.ai/sitemap.xml",
        host: "https://a2a-protocol.ai",
    };
}
