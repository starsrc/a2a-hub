export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://a2a-hub.example.com/sitemap.xml",
    host: "https://a2a-hub.example.com",
  };
}
