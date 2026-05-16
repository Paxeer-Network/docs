"use client";

import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Code2,
  Cpu,
  Globe,
  Layers,
  Rocket,
  Search,
  Shield,
  Terminal,
  Zap,
} from "lucide-react";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { AppleBorderGradient } from "@/components/AppleBorderGradient";
import { Skiper22 } from "@/components/MicroInteractions";
import { SquiCircleFilterStatic } from "@/components/SkiperSquiCircleFilterLayout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const spring = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

function HeroSection() {
  const [borderActive, setBorderActive] = useState(false);

  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="pointer-events-none absolute left-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-fd-border/20 to-transparent" />
      <div className="pointer-events-none absolute right-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-fd-border/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-fd-border/40 bg-fd-card/30 px-5 py-2 text-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-fd-muted-foreground">Alexandria Fork</span>
            <span className="h-3 w-px bg-fd-border/50" />
            <span className="font-medium text-fd-foreground">
              Mainnet Live
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 text-center text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-tight"
        >
          <span className="block text-fd-foreground">Build on</span>
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Paxeer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-12 max-w-xl text-center text-lg leading-relaxed text-fd-muted-foreground"
        >
          HyperPaxeer runtime, Argus VM, and network-operated protocols.
          Everything to develop, deploy, and validate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/docs"
              onMouseEnter={() => setBorderActive(true)}
              onMouseLeave={() => setBorderActive(false)}
              className="relative overflow-hidden rounded-2xl"
            >
              <AppleBorderGradient
                preview={borderActive}
                intensity="sm"
                className="rounded-2xl"
              />
              <span className="relative z-10 inline-flex items-center gap-2 rounded-2xl bg-fd-foreground px-8 py-4 text-sm font-semibold text-fd-background transition-all">
                Read the Docs
                <ArrowRight className="size-4" />
              </span>
            </Link>
            <Link
              href="/docs/quickstart"
              className="group inline-flex items-center gap-2 rounded-2xl border border-fd-border/60 bg-fd-card/30 px-8 py-4 text-sm font-semibold text-fd-foreground backdrop-blur-sm transition-all hover:border-fd-border hover:bg-fd-card/60"
            >
              <Terminal className="size-4 opacity-50 transition-opacity group-hover:opacity-100" />
              Quick Start
            </Link>
          </div>

          <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-fd-muted-foreground/50">
            <span className="flex items-center gap-1.5">
              <Code2 className="size-3" /> EVM
            </span>
            <span className="h-3 w-px bg-fd-border/30" />
            <span className="flex items-center gap-1.5">
              <Globe className="size-3" /> IBC
            </span>
            <span className="h-3 w-px bg-fd-border/30" />
            <span className="flex items-center gap-1.5">
              <Layers className="size-3" /> Cosmos
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InteractiveShowcase() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-fd-muted-foreground/60">
            Skiper UI Components
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-fd-foreground md:text-5xl">
            Crafted with care
          </h2>
          <p className="mt-4 max-w-lg text-fd-muted-foreground">
            Every interaction is intentional. Six live demos showcasing
            animation, data-fetching, SVG filters, and micro-interactions.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* 1 - MicroInteractions (ETH Swap) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative row-span-2 overflow-hidden rounded-3xl border border-fd-border/30 bg-[#131313]"
          >
            <CellLabel>Token Swap</CellLabel>
            <div className="flex h-full min-h-[540px] items-center justify-center p-2">
              <Skiper22 />
            </div>
          </motion.div>

          {/* 2 - Apple Border Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative overflow-hidden rounded-3xl border border-fd-border/30"
          >
            <AppleBorderDemo />
          </motion.div>

          {/* 3 - Squircle SVG Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="relative overflow-hidden rounded-3xl border border-fd-border/30 bg-fd-card/20"
          >
            <SquircleDemo />
          </motion.div>

          {/* 4 - Country Select Dialog */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="relative overflow-hidden rounded-3xl border border-fd-border/30 bg-[#131313] lg:col-span-2"
          >
            <CountrySelectDemo />
          </motion.div>

          {/* 5 - Carousel Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative overflow-hidden rounded-3xl border border-fd-border/30 bg-fd-card/10 lg:col-span-2"
          >
            <CarouselDemo />
          </motion.div>

          {/* 6 - Scrollbar Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="relative overflow-hidden rounded-3xl border border-fd-border/30 bg-fd-card/10"
          >
            <ScrollbarDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CellLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-4 top-4 z-20 rounded-full border border-[#303030] bg-[#1a1a1a]/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#737373] backdrop-blur-sm">
      {children}
    </div>
  );
}

function AppleBorderDemo() {
  const [active, setActive] = useState(false);
  return (
    <div className="relative flex h-full min-h-[260px] flex-col items-center justify-center bg-fd-background p-8">
      <AppleBorderGradient preview={active} intensity="xl" />
      <div className="relative z-10 flex flex-col items-center gap-5">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-fd-muted-foreground/50">
          Border Gradient
        </p>
        <motion.button
          onClick={() => setActive((x) => !x)}
          whileTap={{ scale: 0.97 }}
          className="rounded-2xl border border-fd-border/50 bg-fd-card/50 px-6 py-3 text-sm font-medium text-fd-foreground backdrop-blur-sm transition-colors hover:bg-fd-card/80"
        >
          {active ? "Deactivate" : "Activate"} Gradient
        </motion.button>
        <AnimatePresence>
          {active && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-xs text-fd-muted-foreground/60"
            >
              Apple Intelligence-style border
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function SquircleDemo() {
  const [filterOn, setFilterOn] = useState(true);
  return (
    <div className="relative flex h-full min-h-[260px] flex-col items-center justify-center gap-6 p-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0"
        version="1.1"
      >
        <defs>
          <filter id="SquiCircleDemoFilter">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <p className="text-xs font-medium uppercase tracking-[0.15em] text-fd-muted-foreground/50">
        Squircle Filter
      </p>
      <div className="flex items-center gap-6">
        <motion.div
          layout
          transition={spring}
          className="h-20 w-20 bg-gradient-to-br from-blue-500 to-violet-600"
          style={{
            borderRadius: "16px",
            filter: filterOn ? "url(#SquiCircleDemoFilter)" : "none",
          }}
        />
        <motion.div
          layout
          transition={spring}
          className="h-16 w-16 bg-gradient-to-br from-fuchsia-500 to-pink-600"
          style={{
            borderRadius: "16px",
            filter: filterOn ? "url(#SquiCircleDemoFilter)" : "none",
          }}
        />
      </div>
      <button
        onClick={() => setFilterOn((x) => !x)}
        className="rounded-full border border-fd-border/40 bg-fd-card/30 px-4 py-1.5 text-xs font-medium text-fd-muted-foreground transition-colors hover:bg-fd-card/60 hover:text-fd-foreground"
      >
        Filter {filterOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

type Country = { name: string; code: string; flag: string };

function CountrySelectDemo() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetched = useRef(false);

  const doFetch = useCallback(async () => {
    if (fetched.current) return;
    fetched.current = true;
    setLoading(true);
    try {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,cca2,flags",
      );
      const data = await res.json();
      const mapped: Country[] = data
        .map((c: Record<string, any>) => ({
          name: c.name.common,
          code: c.cca2,
          flag: c.flags.svg,
        }))
        .sort((a: Country, b: Country) => a.name.localeCompare(b.name));
      setCountries(mapped);
      const region = (navigator.language || "en-US")
        .split("-")[1]
        ?.toUpperCase();
      if (region) {
        const match = mapped.find((c: Country) => c.code === region);
        if (match) setSelectedCountry(match);
      }
    } catch {
      /* silent */
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  const filtered = useMemo(
    () =>
      search
        ? countries.filter(
            (c) =>
              c.name.toLowerCase().includes(search.toLowerCase()) ||
              c.code.toLowerCase().includes(search.toLowerCase()),
          )
        : countries,
    [countries, search],
  );

  return (
    <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-4 p-8 text-white">
      <CellLabel>Country Select</CellLabel>

      <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#737373]">
        Region Picker
      </p>

      <button
        onClick={() => setOpen((x) => !x)}
        className="flex items-center gap-2 rounded-full bg-[#2F2F2F] px-4 py-2 transition-colors hover:bg-[#3A3A3A]"
      >
        {selectedCountry ? (
          <>
            <div className="size-6 overflow-hidden rounded-full">
              <img
                src={selectedCountry.flag}
                alt={selectedCountry.name}
                className="size-full object-cover"
              />
            </div>
            <span className="text-sm">{selectedCountry.name}</span>
          </>
        ) : (
          <span className="text-sm text-[#737373]">Select region</span>
        )}
        <ChevronDown className="size-4 text-[#737373]" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 220 }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            className="w-full max-w-xs overflow-hidden rounded-2xl border border-[#303030] bg-[#1a1a1a]"
          >
            <div className="flex items-center gap-2 border-b border-[#303030] px-3 py-2">
              <Search className="size-4 text-[#737373]" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
            <div className="h-[176px] overflow-y-auto">
              {loading ? (
                <p className="p-4 text-center text-xs text-[#737373]">
                  Loading...
                </p>
              ) : (
                filtered.slice(0, 40).map((c) => (
                  <button
                    key={c.code}
                    onClick={() => {
                      setSelectedCountry(c);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center gap-3 px-4 py-2 text-left transition-colors hover:bg-[#252525]",
                      selectedCountry?.code === c.code && "bg-[#252525]",
                    )}
                  >
                    <div className="size-5 overflow-hidden rounded-full">
                      <img
                        src={c.flag}
                        alt=""
                        className="size-full object-cover"
                      />
                    </div>
                    <span className="text-sm">{c.name}</span>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const carouselSlides = [
  { label: "Smart Contracts", color: "from-blue-600 to-blue-800" },
  { label: "Argus VM", color: "from-violet-600 to-violet-800" },
  { label: "IBC Channels", color: "from-fuchsia-600 to-fuchsia-800" },
  { label: "Staking", color: "from-emerald-600 to-emerald-800" },
  { label: "Governance", color: "from-orange-600 to-orange-800" },
  { label: "Gas Model", color: "from-pink-600 to-pink-800" },
];

function CarouselNavButtons() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();
  return (
    <>
      <button
        className={cn(
          "absolute -left-2 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-fd-border/30 bg-fd-card/60 text-fd-foreground backdrop-blur-sm transition-opacity",
          !canScrollPrev && "pointer-events-none opacity-0",
        )}
        onClick={scrollPrev}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        className={cn(
          "absolute -right-2 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-fd-border/30 bg-fd-card/60 text-fd-foreground backdrop-blur-sm transition-opacity",
          !canScrollNext && "pointer-events-none opacity-0",
        )}
        onClick={scrollNext}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </>
  );
}

function CarouselDemo() {
  return (
    <div className="flex h-full min-h-[260px] flex-col justify-center p-8">
      <CellLabel>Carousel</CellLabel>
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.15em] text-fd-muted-foreground/50">
        Custom Navigation
      </p>
      <Carousel className="w-full">
        <CarouselContent className="-ml-3">
          {carouselSlides.map((slide) => (
            <CarouselItem
              key={slide.label}
              className="basis-1/2 pl-3 md:basis-1/3"
            >
              <div
                className={cn(
                  "flex h-24 items-center justify-center rounded-2xl bg-gradient-to-br p-4",
                  slide.color,
                )}
              >
                <span className="text-sm font-semibold text-white/90">
                  {slide.label}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavButtons />
      </Carousel>
    </div>
  );
}

function ScrollbarDemo() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sections = [
    "Overview",
    "Architecture",
    "Consensus",
    "Runtime",
    "Deploy",
    "Validate",
  ];

  return (
    <div className="flex h-full min-h-[260px] flex-col justify-between p-8">
      <CellLabel>Scrollbar</CellLabel>
      <div>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-fd-muted-foreground/50">
          Scroll Navigation
        </p>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-fd-foreground">
              {sections[activeIdx]}
            </h3>
            <p className="mt-1 text-sm text-fd-muted-foreground/60">
              Section {activeIdx + 1} of {sections.length}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-6">
        <div className="flex items-center gap-1.5">
          {sections.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="group relative flex h-8 flex-1 cursor-pointer items-center justify-center"
            >
              <motion.div
                className="h-1 w-full rounded-full"
                animate={{
                  backgroundColor:
                    i === activeIdx ? "#FF4B4B" : "rgba(255,255,255,0.08)",
                  scaleY: i === activeIdx ? 2 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
            </button>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-widest text-fd-muted-foreground/30">
          <span>Start</span>
          <span>End</span>
        </div>
      </div>
    </div>
  );
}

const docSections = [
  {
    icon: Rocket,
    title: "Quick Start",
    desc: "Environment setup, first contract deployment",
    href: "/docs/quickstart",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    title: "Smart Contracts",
    desc: "Solidity, EVM extensions, precompiles, IBC",
    href: "/docs/develop/smart-contracts",
    accent: "from-violet-500 to-purple-500",
  },
  {
    icon: Cpu,
    title: "Argus VM",
    desc: "Next-gen execution environment",
    href: "/docs/argus-vm",
    accent: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Validate",
    desc: "Run nodes, stake, secure the network",
    href: "/docs/validate",
    accent: "from-emerald-500 to-green-500",
  },
  {
    icon: Layers,
    title: "Protocol",
    desc: "Modules, CLI, IBC channels, gas",
    href: "/docs/protocol",
    accent: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Dev Tools",
    desc: "SDKs, explorers, oracles, integrations",
    href: "/docs/develop/tools",
    accent: "from-amber-500 to-yellow-500",
  },
];

function DocsNavSection() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-fd-muted-foreground/60">
            Documentation
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-fd-foreground md:text-5xl">
            Explore by topic
          </h2>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {docSections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={section.href}
                className="group relative flex items-start gap-4 rounded-2xl border border-fd-border/30 bg-fd-card/10 p-5 transition-all duration-300 hover:border-fd-border/60 hover:bg-fd-card/30"
              >
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br opacity-80",
                    section.accent,
                  )}
                >
                  <section.icon className="size-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 text-sm font-semibold text-fd-foreground">
                    {section.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-fd-muted-foreground/70">
                    {section.desc}
                  </p>
                </div>
                <ArrowRight className="mt-1 size-4 shrink-0 text-fd-muted-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:text-fd-foreground/60" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ecosystemItems = [
  {
    title: "Sidiora DEX",
    desc: "Decentralized exchange",
    href: "/docs/sidiora-dex",
  },
  {
    title: "PaxSpot",
    desc: "Spot trading & precompiles",
    href: "/docs/paxspot",
  },
  {
    title: "ChainFlow",
    desc: "Cross-chain data protocol",
    href: "/docs/chainflow",
  },
  { title: "CTM", desc: "Continuous Token Model", href: "/docs/ctm" },
];

const quickLinks = [
  { icon: BookOpen, title: "API Reference", href: "/docs/api-reference" },
  { icon: Globe, title: "Networks", href: "/docs/develop/api/networks" },
  { icon: Terminal, title: "CLI Reference", href: "/docs/protocol/cli" },
];

function EcosystemAndLinks() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-20 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-fd-muted-foreground/60">
              Ecosystem
            </p>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-fd-foreground md:text-3xl">
              Protocols on Paxeer
            </h2>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-2">
            {ecosystemItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="group flex items-center justify-between rounded-2xl border border-fd-border/20 bg-fd-card/10 p-5 transition-all hover:border-fd-border/50 hover:bg-fd-card/25"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-fd-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-fd-muted-foreground/60">
                      {item.desc}
                    </p>
                  </div>
                  <ArrowRight className="size-4 text-fd-muted-foreground/20 transition-all group-hover:translate-x-0.5 group-hover:text-fd-foreground/50" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-fd-muted-foreground/60">
              Quick Access
            </p>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-fd-foreground md:text-3xl">
              Jump to
            </h2>
          </motion.div>
          <div className="flex flex-col gap-3">
            {quickLinks.map((link, i) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="group flex items-center gap-4 rounded-2xl border border-fd-border/20 bg-fd-card/10 p-5 transition-all hover:border-fd-border/50 hover:bg-fd-card/25"
                >
                  <link.icon className="size-5 text-fd-muted-foreground/40 transition-colors group-hover:text-fd-foreground/70" />
                  <span className="text-sm font-medium text-fd-foreground">
                    {link.title}
                  </span>
                  <ArrowRight className="ml-auto size-4 text-fd-muted-foreground/20 transition-all group-hover:translate-x-0.5 group-hover:text-fd-foreground/50" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const [borderActive, setBorderActive] = useState(false);
  return (
    <section className="relative px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-fd-border/30 bg-fd-card/10 p-12 text-center md:p-16"
        onMouseEnter={() => setBorderActive(true)}
        onMouseLeave={() => setBorderActive(false)}
      >
        <AppleBorderGradient
          preview={borderActive}
          intensity="2xl"
          className="rounded-3xl"
        />
        <div className="relative z-10">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-fd-foreground md:text-4xl">
            Start building
          </h2>
          <p className="mb-8 text-fd-muted-foreground">
            Join the ecosystem shaping decentralized infrastructure.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://build.hyperpaxeer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-fd-foreground px-8 py-3.5 text-sm font-semibold text-fd-background transition-opacity hover:opacity-90"
            >
              Developer Portal
              <ArrowRight className="size-4" />
            </a>
            <a
              href="https://paxscan.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-fd-border/50 bg-fd-card/30 px-8 py-3.5 text-sm font-semibold text-fd-foreground backdrop-blur-sm transition-all hover:bg-fd-card/60"
            >
              Block Explorer
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-fd-border/20 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600" />
          <span className="text-sm font-semibold text-fd-foreground">
            Paxeer Network
          </span>
          <span className="text-xs text-fd-muted-foreground/40">
            &mdash; Documentation
          </span>
        </div>
        <div className="flex gap-8 text-xs text-fd-muted-foreground/50">
          {[
            { label: "GitHub", href: "https://github.com/paxeer-network" },
            { label: "Whitepaper", href: "http://whitepaper.paxeer.app/" },
            { label: "Explorer", href: "https://paxscan.io/" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fd-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <MotionConfig transition={spring}>
      <main className="flex flex-1 flex-col">
        <SquiCircleFilterStatic />
        <HeroSection />
        <InteractiveShowcase />
        <DocsNavSection />
        <EcosystemAndLinks />
        <CTASection />
        <Footer />
      </main>
    </MotionConfig>
  );
}
