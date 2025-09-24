import { HomeClient } from "@/components/home-client";
import { Suspense } from "react";

export default function Home() {
    return (
        <div className="py-8">
            <Suspense fallback={<div className="text-sm text-foreground/60">Loading…</div>}>
                <HomeClient />
            </Suspense>
        </div>
    );
}
