export default function AboutPage() {
    return (
        <div className="mx-auto max-w-3xl space-y-4 py-8">
            <h1 className="text-3xl font-bold">About A2A HUB</h1>
            <p>
                A2A HUB is a minimal, community-focused directory for Agent2Agent Protocol (A2A) agents.
            </p>

            <h1 className="text-3xl font-bold">What is A2A Protocol?</h1>

            <p>
                The Agent2Agent (A2A) Protocol is an open standard developed by Google and donated to the Linux
                Foundation designed to enable seamless communication and collaboration between AI agents.
            </p>

            <p>
                In a world where agents are built using diverse frameworks and by different vendors, A2A provides a common language, breaking down silos and fostering interoperability.
            </p>

            <hr className="my-6 border-foreground/10"/>

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
