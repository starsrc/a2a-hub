import Link from "next/link";

export default function NotFound() {
    return (
        <div className="mx-auto max-w-2xl py-16 text-center">
            <h1 className="text-3xl font-bold">Page not found</h1>
            <p className="mt-2 text-foreground/70">The page you&apos;re looking for doesn&apos;t exist or was moved.</p>
            <Link href="/" className="mt-6 inline-flex rounded-md border px-4 py-2 text-sm hover:bg-foreground/5">Go
                back home</Link>
        </div>
    );
}
