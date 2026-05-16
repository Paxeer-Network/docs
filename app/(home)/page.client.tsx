"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppleBorderGradient } from "@/components/AppleBorderGradient";
import { Skiper22 } from "@/components/MicroInteractions";
import { SquiCircleFilterStatic } from "@/components/SkiperSquiCircleFilterLayout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";

export function HeroBackground() {
  return (
    <>
      <SquiCircleFilterStatic />
      <div
        className="absolute inset-0 -z-1 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="absolute left-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-fd-border/20 to-transparent" />
      <div className="absolute right-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-fd-border/20 to-transparent" />
    </>
  );
}

function CellLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-4 top-4 z-20 rounded-full border border-fd-border bg-fd-card/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-fd-muted-foreground backdrop-blur-sm">
      {children}
    </div>
  );
}

export function ComponentShowcase() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* 1 - MicroInteractions (ETH Swap) */}
      <div className="relative row-span-2 overflow-hidden rounded-2xl border bg-fd-card shadow-lg">
        <CellLabel>Token Swap</CellLabel>
        <div className="flex h-full min-h-[540px] items-center justify-center p-2">
          <Skiper22 />
        </div>
      </div>

      {/* 2 - Apple Border Gradient */}
      <div className="relative overflow-hidden rounded-2xl border bg-fd-card shadow-lg">
        <AppleBorderDemo />
      </div>

      {/* 3 - Squircle SVG Filter */}
      <div className="relative overflow-hidden rounded-2xl border bg-fd-card shadow-lg">
        <SquircleDemo />
      </div>

      {/* 4 - Country Select Dialog */}
      <div className="relative overflow-hidden rounded-2xl border bg-fd-card shadow-lg lg:col-span-2">
        <CountrySelectDemo />
      </div>

      {/* 5 - Carousel Navigation */}
      <div className="relative overflow-hidden rounded-2xl border bg-fd-card shadow-lg lg:col-span-2">
        <CarouselDemo />
      </div>

      {/* 6 - Scrollbar Navigation */}
      <div className="relative overflow-hidden rounded-2xl border bg-fd-card shadow-lg">
        <ScrollbarDemo />
      </div>
    </div>
  );
}

function AppleBorderDemo() {
  const [active, setActive] = useState(false);
  return (
    <div className="relative flex h-full min-h-[260px] flex-col items-center justify-center p-8">
      <AppleBorderGradient preview={active} intensity="xl" />
      <CellLabel>Border Gradient</CellLabel>
      <div className="relative z-10 flex flex-col items-center gap-5">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-fd-muted-foreground/50">
          Apple Intelligence Style
        </p>
        <button
          onClick={() => setActive((x) => !x)}
          className="rounded-full border bg-fd-secondary px-6 py-2.5 text-sm font-medium text-fd-secondary-foreground transition-colors hover:bg-fd-accent"
        >
          {active ? "Deactivate" : "Activate"} Gradient
        </button>
        <AnimatePresence>
          {active && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-xs text-fd-muted-foreground"
            >
              Animated border gradient active
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
      <CellLabel>Squircle Filter</CellLabel>
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0" version="1.1">
        <defs>
          <filter id="SquiCircleDemoFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
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
        SVG Gooey Effect
      </p>
      <div className="flex items-center gap-6">
        <div
          className="h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 transition-all"
          style={{ filter: filterOn ? "url(#SquiCircleDemoFilter)" : "none" }}
        />
        <div
          className="h-16 w-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-600 transition-all"
          style={{ filter: filterOn ? "url(#SquiCircleDemoFilter)" : "none" }}
        />
      </div>
      <button
        onClick={() => setFilterOn((x) => !x)}
        className="rounded-full border bg-fd-secondary px-4 py-1.5 text-xs font-medium text-fd-secondary-foreground transition-colors hover:bg-fd-accent"
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
    <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-4 p-8">
      <CellLabel>Country Select</CellLabel>
      <p className="text-xs font-medium uppercase tracking-[0.15em] text-fd-muted-foreground/50">
        Region Picker
      </p>
      <button
        onClick={() => setOpen((x) => !x)}
        className="flex items-center gap-2 rounded-full border bg-fd-secondary px-4 py-2 transition-colors hover:bg-fd-accent"
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
          <span className="text-sm text-fd-muted-foreground">
            Select region
          </span>
        )}
        <ChevronDown className="size-4 text-fd-muted-foreground" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 220 }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            className="w-full max-w-xs overflow-hidden rounded-xl border bg-fd-popover shadow-lg"
          >
            <div className="flex items-center gap-2 border-b px-3 py-2">
              <Search className="size-4 text-fd-muted-foreground" />
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
                <p className="p-4 text-center text-xs text-fd-muted-foreground">
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
                      "flex w-full items-center gap-3 px-4 py-2 text-left transition-colors hover:bg-fd-accent",
                      selectedCountry?.code === c.code && "bg-fd-accent",
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
          "absolute -left-2 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border bg-fd-card text-fd-foreground shadow-md transition-opacity",
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
          "absolute -right-2 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border bg-fd-card text-fd-foreground shadow-md transition-opacity",
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
                  "flex h-24 items-center justify-center rounded-xl bg-gradient-to-br p-4",
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
            <h3 className="text-xl font-semibold">{sections[activeIdx]}</h3>
            <p className="mt-1 text-sm text-fd-muted-foreground">
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
              <div
                className={cn(
                  "h-1 w-full rounded-full transition-all",
                  i === activeIdx
                    ? "scale-y-200 bg-fd-primary"
                    : "bg-fd-border",
                )}
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
