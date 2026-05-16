import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold md:text-5xl">
          Paxeer Network
        </h1>
        <p className="text-fd-muted-foreground text-lg md:text-xl">
          Developer documentation for Paxeer Network — Alexandria Fork,
          HyperPaxeer runtime, Argus VM, and network-operated protocols
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/docs"
            className="inline-flex items-center rounded-lg bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
          >
            Get Started
          </Link>
          <Link
            href="/docs/quickstart"
            className="inline-flex items-center rounded-lg border border-fd-border px-6 py-3 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-accent"
          >
            Quick Start
          </Link>
        </div>
      </div>
    </main>
  );
}
