import Link from "next/link";
import {servers} from "@/data/servers";

export default function TagsIndexPage() {
    const counts = new Map<string, number>();
    for (const s of servers) {
        for (const t of s.tags) {
            counts.set(t, (counts.get(t) ?? 0) + 1);
        }
    }
    const allTags = Array.from(counts.keys()).sort((a, b) => a.localeCompare(b));

    return (
        <section className="space-y-6 py-8">
            <div className="mx-auto max-w-3xl space-y-2 text-center">
                <h1 className="text-3xl font-bold">全部标签</h1>
                <p className="text-sm text-foreground/60">选择一个标签以浏览相关的服务器</p>
            </div>

            <div className="mx-auto max-w-4xl">
                <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                        <Link
                            key={tag}
                            href={`/tags/${encodeURIComponent(tag)}`}
                            className="rounded bg-foreground/5 px-3 py-1 text-sm hover:bg-foreground/10"
                        >
                            <span className="font-medium">{tag}</span>
                            <span className="ml-2 text-foreground/60">({counts.get(tag)})</span>
                        </Link>
                    ))}
                    {allTags.length === 0 ? (
                        <div className="text-sm text-foreground/60">暂无标签</div>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
