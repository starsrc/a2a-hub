export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-4 py-8">
      <h1 className="text-3xl font-bold">About A2A HUB</h1>
      <p>
        A2A HUB is a minimal, community-focused directory for Agent2Agent Protocol (A2A) agents.
      </p>
      <p>Built with Next.js App Router, TypeScript, and Tailwind CSS.</p>

      <hr className="my-6 border-foreground/10" />

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Email:{" "}
            <a
              href="mailto:contact@a2a-protocol.ai"
              className="underline hover:opacity-80"
            >
              contact@a2a-protocol.ai
            </a>
          </li>
          <li>
            X:{" "}
            <a
              href="https://x.com/a2a-protocol.ai"
              target="_blank"
              rel="noreferrer"
              className="underline hover:opacity-80"
            >
              a2a-protocol.ai
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
