import { cn } from '@/lib/utils';
import Link from 'next/link';
import { cva } from 'class-variance-authority';
import {
  ArrowRight,
  BookOpen,
  Code2,
  Cpu,
  Globe,
  Layers,
  Rocket,
  Shield,
  Terminal,
  Zap,
} from 'lucide-react';
import {
  HeroBackground,
  ComponentShowcase,
} from '@/app/(home)/page.client';

const headingVariants = cva('font-medium tracking-tight', {
  variants: {
    variant: {
      h2: 'text-3xl lg:text-4xl',
      h3: 'text-xl lg:text-2xl',
    },
  },
});

const buttonVariants = cva(
  'inline-flex justify-center px-5 py-3 rounded-full font-medium tracking-tight transition-colors',
  {
    variants: {
      variant: {
        primary:
          'bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/90',
        secondary:
          'border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

const cardVariants = cva('rounded-2xl text-sm p-6 shadow-lg', {
  variants: {
    variant: {
      default: 'border bg-fd-card',
      muted: 'border bg-fd-secondary',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export default function Page() {
  return (
    <main className="pt-4 pb-6 md:pb-12">
      {/* Hero */}
      <div className="relative flex min-h-[600px] h-[70vh] max-h-[900px] border rounded-2xl overflow-hidden mx-auto w-full max-w-[1400px] bg-origin-border">
        <HeroBackground />
        <div className="flex flex-col z-2 px-4 size-full md:p-12 max-md:items-center max-md:text-center">
          <p className="mt-12 text-xs text-fd-primary font-medium rounded-full p-2 border border-fd-primary/50 w-fit">
            Alexandria Fork &mdash; Mainnet Live
          </p>
          <h1 className="text-4xl my-8 leading-tight font-medium xl:text-5xl xl:mb-12">
            Build excellent dApps,
            <br />
            your <span className="text-fd-primary">way</span>.
          </h1>
          <div className="flex flex-row items-center justify-center gap-4 flex-wrap w-fit">
            <Link
              href="/docs"
              className={cn(buttonVariants(), 'max-sm:text-sm')}
            >
              Getting Started
            </Link>
            <Link
              href="/docs/quickstart"
              className={cn(
                buttonVariants({ variant: 'secondary' }),
                'max-sm:text-sm',
              )}
            >
              Quick Start
            </Link>
          </div>
        </div>
      </div>

      {/* Grid content */}
      <div className="grid grid-cols-1 gap-10 mt-12 px-6 mx-auto w-full max-w-[1400px] md:px-12 lg:grid-cols-2 lg:mt-20">
        {/* Intro text */}
        <p className="text-2xl tracking-tight leading-snug font-light col-span-full md:text-3xl xl:text-4xl">
          Paxeer is a <span className="text-fd-primary font-medium">Cosmos SDK</span> blockchain with{' '}
          <span className="text-fd-primary font-medium">EVM compatibility</span> and{' '}
          <span className="text-fd-primary font-medium">IBC</span> cross-chain messaging. HyperPaxeer
          runtime, Argus VM, and network-operated protocols &mdash; everything you need to develop,
          deploy, and validate.
        </p>

        {/* Component showcase — full width */}
        <div className="col-span-full">
          <ComponentShowcase />
        </div>

        {/* Features */}
        <Features />

        {/* Ecosystem */}
        <Ecosystem />

        {/* Quick links + CTA */}
        <QuickLinks />
        <CallToAction />
      </div>
    </main>
  );
}

const features = [
  {
    icon: Rocket,
    title: 'Quick Start',
    description: 'Set up your environment, connect to the network, and deploy your first contract.',
    href: '/docs/quickstart',
  },
  {
    icon: Code2,
    title: 'Smart Contracts',
    description: 'Build Solidity contracts with EVM extensions, precompiles, and IBC capabilities.',
    href: '/docs/develop/smart-contracts',
  },
  {
    icon: Cpu,
    title: 'Argus VM',
    description: 'Next-generation execution environment for the Paxeer Network.',
    href: '/docs/argus-vm',
  },
  {
    icon: Shield,
    title: 'Validate',
    description: 'Run a validator node, stake tokens, and participate in network security.',
    href: '/docs/validate',
  },
  {
    icon: Layers,
    title: 'Protocol',
    description: 'Modules, CLI, IBC channels, gas mechanics, and key management.',
    href: '/docs/protocol',
  },
  {
    icon: Zap,
    title: 'Developer Tools',
    description: 'SDKs, client integrations, block explorers, and oracles.',
    href: '/docs/develop/tools',
  },
];

function Features() {
  return (
    <>
      <h2
        className={cn(
          headingVariants({
            variant: 'h2',
            className: 'text-fd-primary text-center mb-4 col-span-full',
          }),
        )}
      >
        Explore the Docs
      </h2>
      {features.map((feature) => (
        <Link
          key={feature.title}
          href={feature.href}
          className={cn(
            cardVariants(),
            'flex flex-col group transition-colors hover:bg-fd-accent',
          )}
        >
          <div className="flex items-center gap-3 mb-4">
            <feature.icon className="size-5 text-fd-primary" />
            <h3 className={cn(headingVariants({ variant: 'h3' }))}>
              {feature.title}
            </h3>
          </div>
          <p className="text-fd-muted-foreground">{feature.description}</p>
          <div className="mt-auto pt-4 flex items-center gap-1 text-sm font-medium text-fd-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
            Learn more
            <ArrowRight className="size-3.5" />
          </div>
        </Link>
      ))}
    </>
  );
}

const ecosystemLinks = [
  {
    title: 'Sidiora DEX',
    description: 'Decentralized exchange built on Paxeer',
    href: '/docs/sidiora-dex',
  },
  {
    title: 'PaxSpot',
    description: 'Spot trading and precompiles',
    href: '/docs/paxspot',
  },
  {
    title: 'ChainFlow',
    description: 'Cross-chain data flow protocol',
    href: '/docs/chainflow',
  },
  {
    title: 'CTM',
    description: 'Continuous Token Model economics',
    href: '/docs/ctm',
  },
];

function Ecosystem() {
  return (
    <div className={cn(cardVariants(), 'flex flex-col col-span-full')}>
      <h2 className={cn(headingVariants({ variant: 'h2', className: 'mb-6' }))}>
        Ecosystem
      </h2>
      <p className="mb-8 text-fd-muted-foreground">
        Protocols and applications building on the Paxeer Network.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ecosystemLinks.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group flex flex-col rounded-xl border bg-fd-secondary/50 p-4 transition-colors hover:bg-fd-accent"
          >
            <h3 className="font-medium mb-1">{item.title}</h3>
            <p className="text-xs text-fd-muted-foreground">
              {item.description}
            </p>
            <div className="mt-3 flex items-center gap-1 text-xs font-medium text-fd-muted-foreground transition-colors group-hover:text-fd-foreground">
              View docs
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const quickLinkItems = [
  { icon: BookOpen, title: 'API Reference', href: '/docs/api-reference' },
  { icon: Globe, title: 'Networks', href: '/docs/develop/api/networks' },
  { icon: Terminal, title: 'CLI Commands', href: '/docs/protocol/cli' },
];

function QuickLinks() {
  return (
    <div className={cn(cardVariants(), 'flex flex-col')}>
      <h3 className={cn(headingVariants({ variant: 'h3', className: 'mb-6' }))}>
        Quick Links
      </h3>
      <ul className="flex flex-col gap-4">
        {quickLinkItems.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className="group flex items-center gap-3 rounded-xl border bg-fd-secondary/50 p-4 transition-colors hover:bg-fd-accent"
            >
              <link.icon className="size-5 text-fd-muted-foreground transition-colors group-hover:text-fd-foreground" />
              <span className="font-medium">{link.title}</span>
              <ArrowRight className="ml-auto size-4 text-fd-muted-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:text-fd-foreground/50" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CallToAction() {
  return (
    <div className={cn(cardVariants({ variant: 'muted' }), 'flex flex-col')}>
      <h3 className={cn(headingVariants({ variant: 'h3', className: 'mb-6' }))}>
        Start Building on Paxeer
      </h3>
      <p className="mb-8 text-fd-muted-foreground">
        Join the growing ecosystem of developers building the future of decentralized infrastructure.
      </p>
      <div className="flex flex-row flex-wrap gap-2 mt-auto">
        <a
          href="https://build.hyperpaxeer.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants())}
        >
          Developer Portal
        </a>
        <a
          href="https://paxscan.io/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'secondary' }))}
        >
          Block Explorer
        </a>
      </div>
    </div>
  );
}
