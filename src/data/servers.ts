export type Category = "DevTools" | "AI" | "Data" | "Productivity" | "Other";

export type Server = {
  slug: string;
  name: string;
  description: string;
  category: Category;
  tags: string[];
  repo?: string;
  website?: string;
  npm?: string;
  install?: string;
};

export const servers: Server[] = [
  {
    slug: "filesystem",
    name: "Filesystem Server",
    description: "Browse and read files on the local filesystem through MCP.",
    category: "DevTools",
    tags: ["filesystem", "local", "developer"],
    repo: "https://github.com/example/mcp-filesystem",
    website: "https://example.com/mcp-filesystem",
    npm: "@example/mcp-filesystem",
    install: "npx @example/mcp-filesystem",
  },
  {
    slug: "github",
    name: "GitHub Server",
    description: "Interact with GitHub issues and pull requests via MCP.",
    category: "DevTools",
    tags: ["github", "api", "issues"],
    repo: "https://github.com/example/mcp-github",
    website: "https://example.com/mcp-github",
    npm: "@example/mcp-github",
    install: "npx @example/mcp-github",
  },
  {
    slug: "notion",
    name: "Notion Server",
    description: "Read and update Notion pages and databases.",
    category: "Productivity",
    tags: ["notion", "notes", "workspace"],
    repo: "https://github.com/example/mcp-notion",
    website: "https://example.com/mcp-notion",
    npm: "@example/mcp-notion",
    install: "npx @example/mcp-notion",
  },
  {
    slug: "openai-tools",
    name: "OpenAI Tools Server",
    description: "Expose custom tools powered by OpenAI to the MCP runtime.",
    category: "AI",
    tags: ["openai", "tools", "ai"],
    repo: "https://github.com/example/mcp-openai-tools",
    website: "https://example.com/mcp-openai-tools",
    npm: "@example/mcp-openai-tools",
    install: "npx @example/mcp-openai-tools",
  },
  {
    slug: "postgres",
    name: "Postgres Server",
    description: "Query Postgres databases and generate SQL with safety guards.",
    category: "Data",
    tags: ["postgres", "sql", "database"],
    repo: "https://github.com/example/mcp-postgres",
    website: "https://example.com/mcp-postgres",
    npm: "@example/mcp-postgres",
    install: "npx @example/mcp-postgres",
  },
  {
    slug: "slack",
    name: "Slack Server",
    description: "Send and receive messages in Slack channels via MCP.",
    category: "Productivity",
    tags: ["slack", "chat", "communication"],
    repo: "https://github.com/example/mcp-slack",
    website: "https://example.com/mcp-slack",
    npm: "@example/mcp-slack",
    install: "npx @example/mcp-slack",
  },
  {
    slug: "web-scraper",
    name: "Web Scraper Server",
    description: "Fetch and parse web pages for structured data.",
    category: "Other",
    tags: ["crawler", "scraper", "web"],
    repo: "https://github.com/example/mcp-web-scraper",
    website: "https://example.com/mcp-web-scraper",
    npm: "@example/mcp-web-scraper",
    install: "npx @example/mcp-web-scraper",
  },
  {
    slug: "calendar",
    name: "Calendar Server",
    description: "Create and update calendar events across providers.",
    category: "Productivity",
    tags: ["calendar", "scheduling", "productivity"],
    repo: "https://github.com/example/mcp-calendar",
    website: "https://example.com/mcp-calendar",
    npm: "@example/mcp-calendar",
    install: "npx @example/mcp-calendar",
  },
];
