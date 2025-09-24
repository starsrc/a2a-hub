export type Category = "Official" | "Research And Data" | "Cloud Platforms" | "Browser automation" | "File Systems" | "Calendar Management" | "Os Automation" | "Communication" | "Productivity" | "Development" | "Database" | "Other";

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
        slug: "Aira",
        name: "Aira",
        description: "A2A Network, Host, Register, Discover Agents in the Network, Share, Use tools.",
        category: "Development",
        tags: ["a2a", "python", "sse", "mcp", "oauth"],
        repo: "https://github.com/IhateCreatingUserNames2/Aira",
        website: "https://github.com/IhateCreatingUserNames2/Aira",
        npm: "@example/mcp-filesystem",
        install: "npx @example/mcp-filesystem",
    },
    {
        slug: "elkar",
        name: "elkar-a2a",
        description: "Elkar - Task management for AI Agents, ready for Agent2Agent (A2A) protocol.",
        category: "Productivity",
        tags: ["a2a", "task management", "agent", "python"],
        repo: "https://github.com/elkar-ai/elkar-a2a",
        website: "https://elkar.co/",
        npm: "@example/mcp-github",
        install: "npx @example/mcp-github",
    },
    {
        slug: "AgentCrew",
        name: "AgentCrew",
        description: "Chat application with multi-agents system supports multi-models and MCP",
        category: "Productivity",
        tags: ["agent", "multi-agent-systems", "a2a", "mcp", "client", "python", "GUI"],
        repo: "https://github.com/saigontechnology/AgentCrew",
        website: "https://agentcrew.dev/",
        npm: "@example/mcp-notion",
        install: "npx @example/mcp-notion",
    },
    {
        slug: "n8n-nodes-agent2agent",
        name: "n8n-nodes-agent2agent",
        description: "Adds nodes to n8n for interacting with AI agents using Google's New Agent2Agent (A2A) protocol. Send tasks, manage interactions, and process results from A2A-compatible agents within your workflows",
        category: "Productivity",
        tags: ["agent", "n8n", "a2a", "TypeScript"],
        repo: "https://github.com/pjawz/n8n-nodes-agent2agent",
        website: "https://github.com/pjawz/n8n-nodes-agent2agent",
        npm: "@example/mcp-postgres",
        install: "npx @example/mcp-postgres",
    },
    {
        slug: "google-calendar-agent",
        name: "google-calendar-agent",
        description: "A2A agent server enabling Google Calendar scheduling, retrieval, and automation.",
        category: "Calendar Management",
        tags: ["google", "calendar", "a2a", "golang", "agent"],
        repo: "https://github.com/inference-gateway/google-calendar-agent",
        website: "registry.inference-gateway.com/",
        npm: "@example/mcp-slack",
        install: "npx @example/mcp-slack",
    },
    {
        slug: "A2AApp",
        name: "A2AApp",
        description: "This is a library for implementing an Agent2Agent (A2A) server using Google Apps Script. This enables AI agent communication and secure service access for AI-powered workflows.",
        category: "Productivity",
        tags: ["google workspace", "google", "JavaScript", "agent", "google apps script", "decentralized", "a2a"],
        repo: "https://github.com/tanaikech/A2AApp",
        website: "https://medium.com/google-cloud/enabling-collaborative-agent-systems-through-google-apps-script-based-agent2agent-a2a-network-19e3d0472eaa",
        npm: "@example/mcp-web-scraper",
        install: "npx @example/mcp-web-scraper",
    }
];
