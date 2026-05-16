"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function GradientOrb({
  className,
  color,
}: {
  className?: string;
  color: string;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
      style={{ background: color }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 py-24">
      <GradientOrb
        className="top-[-20%] left-[-10%] h-[600px] w-[600px]"
        color="radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)"
      />
      <GradientOrb
        className="bottom-[-10%] right-[-5%] h-[500px] w-[500px]"
        color="radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)"
      />
      <GradientOrb
        className="top-[30%] right-[20%] h-[300px] w-[300px]"
        color="radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)"
      />

      <motion.div
        className="relative z-10 max-w-4xl text-center"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div
          variants={fadeUp}
          custom={0}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-fd-border/50 bg-fd-card/50 px-4 py-1.5 text-sm text-fd-muted-foreground backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Network Live &mdash; Alexandria Fork
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          className="mb-6 text-5xl font-bold tracking-tight md:text-7xl"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            HyperPax
          </span>{" "}
          <span className="text-fd-foreground">Docs</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="mx-auto mb-10 max-w-2xl text-lg text-fd-muted-foreground md:text-xl"
        >
          Build on the Paxeer Network — Alexandria Fork, HyperPaxeer runtime,
          Argus VM, and network-operated protocols. Everything you need to
          develop, deploy, and validate.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/docs"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:brightness-110"
          >
            Get Started
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/docs/quickstart"
            className="inline-flex items-center gap-2 rounded-xl border border-fd-border bg-fd-card/50 px-8 py-3.5 text-sm font-semibold text-fd-foreground backdrop-blur-sm transition-all hover:border-fd-border hover:bg-fd-accent"
          >
            <Terminal className="size-4" />
            Quick Start
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={4}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-fd-muted-foreground"
        >
          {[
            { label: "EVM Compatible", icon: Code2 },
            { label: "IBC Enabled", icon: Globe },
            { label: "Cosmos SDK", icon: Layers },
          ].map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-2 opacity-60">
              <Icon className="size-4" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

const features = [
  {
    icon: Rocket,
    title: "Quick Start",
    description:
      "Get up and running with Paxeer Network in minutes. Set up your environment, connect to the network, and deploy your first contract.",
    href: "/docs/quickstart",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Code2,
    title: "Smart Contracts",
    description:
      "Build and deploy Solidity smart contracts with EVM extensions, precompiles, and cross-chain capabilities via IBC.",
    href: "/docs/develop/smart-contracts",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: Cpu,
    title: "Argus VM",
    description:
      "Explore the Argus Virtual Machine — the next-generation execution environment for the Paxeer Network.",
    href: "/docs/argus-vm",
    gradient: "from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-400",
  },
  {
    icon: Shield,
    title: "Validate",
    description:
      "Run a validator node, stake tokens, and participate in securing the Paxeer Network. Complete setup guides included.",
    href: "/docs/validate",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-400",
  },
  {
    icon: Layers,
    title: "Protocol",
    description:
      "Deep dive into Paxeer protocol internals — modules, CLI, IBC channels, gas mechanics, and key management.",
    href: "/docs/protocol",
    gradient: "from-pink-500/10 to-rose-500/10",
    iconColor: "text-pink-400",
  },
  {
    icon: Zap,
    title: "Developer Tools",
    description:
      "SDKs, client integrations, block explorers, oracles, and everything you need for a seamless dev experience.",
    href: "/docs/develop/tools",
    gradient: "from-yellow-500/10 to-amber-500/10",
    iconColor: "text-yellow-400",
  },
];

function FeaturesSection() {
  return (
    <section className="relative px-6 py-24">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} custom={0} className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
            Explore the Docs
          </h2>
          <p className="mx-auto max-w-lg text-fd-muted-foreground">
            Comprehensive documentation for developers, validators, and
            protocol researchers.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div key={feature.title} variants={fadeUp} custom={i + 1}>
              <Link
                href={feature.href}
                className={`group relative flex h-full flex-col rounded-2xl border border-fd-border/50 bg-gradient-to-br ${feature.gradient} p-6 transition-all duration-300 hover:border-fd-border hover:shadow-lg hover:shadow-fd-background/50 hover:-translate-y-0.5`}
              >
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-fd-card/80 ${feature.iconColor}`}
                >
                  <feature.icon className="size-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-fd-foreground">
                  {feature.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-fd-muted-foreground">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-fd-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more
                  <ArrowRight className="size-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

const ecosystemLinks = [
  {
    title: "Sidiora DEX",
    description: "Decentralized exchange built on Paxeer",
    href: "/docs/sidiora-dex",
  },
  {
    title: "PaxSpot",
    description: "Spot trading and precompiles",
    href: "/docs/paxspot",
  },
  {
    title: "ChainFlow",
    description: "Cross-chain data flow protocol",
    href: "/docs/chainflow",
  },
  {
    title: "CTM",
    description: "Continuous Token Model economics",
    href: "/docs/ctm",
  },
];

function EcosystemSection() {
  return (
    <section className="relative px-6 py-24">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} custom={0} className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
            Ecosystem
          </h2>
          <p className="mx-auto max-w-lg text-fd-muted-foreground">
            Protocols and applications built on the Paxeer Network.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystemLinks.map((item, i) => (
            <motion.div key={item.title} variants={fadeUp} custom={i + 1}>
              <Link
                href={item.href}
                className="group flex flex-col rounded-2xl border border-fd-border/50 bg-fd-card/30 p-5 transition-all duration-300 hover:border-fd-border hover:bg-fd-card/60"
              >
                <h3 className="mb-1 font-semibold text-fd-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-fd-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs font-medium text-fd-muted-foreground transition-colors group-hover:text-fd-foreground">
                  View docs
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function QuickLinksSection() {
  const links = [
    {
      icon: BookOpen,
      title: "API Reference",
      description: "JSON-RPC, gRPC, and REST endpoints",
      href: "/docs/api-reference",
    },
    {
      icon: Globe,
      title: "Networks",
      description: "Mainnet and testnet configurations",
      href: "/docs/develop/api/networks",
    },
    {
      icon: Terminal,
      title: "CLI Commands",
      description: "Full paxeerd CLI reference",
      href: "/docs/protocol/cli",
    },
  ];

  return (
    <section className="relative px-6 py-24">
      <motion.div
        className="mx-auto max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} custom={0} className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
            Quick Links
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {links.map((link, i) => (
            <motion.div key={link.title} variants={fadeUp} custom={i + 1}>
              <Link
                href={link.href}
                className="group flex items-start gap-4 rounded-2xl border border-fd-border/50 bg-fd-card/20 p-5 transition-all duration-300 hover:border-fd-border hover:bg-fd-card/50"
              >
                <link.icon className="mt-0.5 size-5 shrink-0 text-fd-muted-foreground transition-colors group-hover:text-fd-foreground" />
                <div>
                  <h3 className="mb-1 font-semibold text-fd-foreground">
                    {link.title}
                  </h3>
                  <p className="text-sm text-fd-muted-foreground">
                    {link.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent" />
      <motion.div
        className="relative z-10 mx-auto max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl"
        >
          Start Building on Paxeer
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          className="mb-8 text-fd-muted-foreground"
        >
          Join the growing ecosystem of developers building the future of
          decentralized infrastructure.
        </motion.p>
        <motion.div
          variants={fadeUp}
          custom={2}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://build.hyperpaxeer.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:brightness-110"
          >
            Developer Portal
            <ArrowRight className="size-4" />
          </a>
          <a
            href="https://paxscan.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-fd-border bg-fd-card/50 px-8 py-3.5 text-sm font-semibold text-fd-foreground backdrop-blur-sm transition-all hover:bg-fd-accent"
          >
            Block Explorer
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-fd-border/50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-fd-foreground">
            Paxeer Network
          </span>
          <span className="text-sm text-fd-muted-foreground">
            &mdash; Documentation
          </span>
        </div>
        <div className="flex gap-6 text-sm text-fd-muted-foreground">
          <a
            href="https://github.com/paxeer-network"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-fd-foreground"
          >
            GitHub
          </a>
          <a
            href="http://whitepaper.paxeer.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-fd-foreground"
          >
            Whitepaper
          </a>
          <a
            href="https://paxscan.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-fd-foreground"
          >
            Explorer
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <FeaturesSection />
      <EcosystemSection />
      <QuickLinksSection />
      <CTASection />
      <Footer />
    </main>
  );
}
