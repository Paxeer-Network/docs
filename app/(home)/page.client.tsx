'use client';

import {
  type ComponentProps,
  Fragment,
  type HTMLAttributes,
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

const GrainGradient = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.GrainGradient),
  {
    ssr: false,
  },
);

const Dithering = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.Dithering),
  {
    ssr: false,
  },
);

export function Hero() {
  const { resolvedTheme } = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useIsVisible(ref);
  const [showShaders, setShowShaders] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowShaders(true);
    }, 400);
  }, []);

  return (
    <>
      {showShaders && (
        <GrainGradient
          className="absolute inset-0 animate-fd-fade-in duration-800"
          colors={
            resolvedTheme === 'dark'
              ? ['#39BE1C', '#9c2f05', '#7A2A0000']
              : ['#fcfc51', '#ffa057', '#7A2A0020']
          }
          colorBack="#00000000"
          softness={1}
          intensity={0.9}
          noise={0.5}
          speed={visible ? 1 : 0}
          shape="corners"
          minPixelRatio={1}
          maxPixelCount={1920 * 1080}
        />
      )}
      {showShaders && (
        <Dithering
          width={720}
          height={720}
          colorBack="#00000000"
          colorFront={resolvedTheme === 'dark' ? '#DF3F00' : '#fa8023'}
          shape="sphere"
          type="4x4"
          scale={0.5}
          size={3}
          speed={0}
          frame={5000 * 120}
          className="absolute animate-fd-fade-in duration-400 max-lg:bottom-[-50%] max-lg:left-[-200px] lg:top-[-5%] lg:right-0"
          minPixelRatio={1}
        />
      )}
      <div
        ref={ref}
        className="absolute top-[460px] left-[20%] max-w-[1200px] rounded-xl border-2 lg:top-[400px] h-[300px] w-[800px] bg-gradient-to-br from-fd-primary/10 to-fd-primary/5"
      />
    </>
  );
}

export function CreateAppAnimation(props: ComponentProps<'div'>) {
  const installCmd = 'paxeerd init my-dapp';
  const tickTime = 100;
  const timeCommandEnter = installCmd.length;
  const timeCommandRun = timeCommandEnter + 3;
  const timeCommandEnd = timeCommandRun + 3;
  const timeWindowOpen = timeCommandEnd + 1;
  const timeEnd = timeWindowOpen + 1;

  const [tick, setTick] = useState(timeEnd);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => (prev >= timeEnd ? prev : prev + 1));
    }, tickTime);

    return () => {
      clearInterval(timer);
    };
  }, [timeEnd]);

  const lines: React.ReactElement[] = [];

  lines.push(
    <span key="command_type">
      {installCmd.substring(0, tick)}
      {tick < timeCommandEnter && (
        <div className="inline-block h-3 w-1 animate-pulse bg-fd-foreground" />
      )}
    </span>,
  );

  if (tick >= timeCommandEnter) {
    lines.push(<span key="space"> </span>);
  }

  if (tick > timeCommandRun)
    lines.push(
      <Fragment key="command_response">
        {tick > timeCommandRun + 1 && (
          <>
            <span className="font-medium">◇ Project name</span>
            <span>│ my-dapp</span>
          </>
        )}
        {tick > timeCommandRun + 2 && (
          <>
            <span>│</span>
            <span className="font-medium">◆ Choose a template</span>
          </>
        )}
        {tick > timeCommandRun + 3 && (
          <>
            <span>│ ● EVM Smart Contract</span>
            <span>│ ○ Cosmos Module</span>
            <span>│ ○ IBC Application</span>
            <span>│ ○ Full Stack dApp</span>
          </>
        )}
      </Fragment>,
    );

  return (
    <div
      {...props}
      onMouseEnter={() => {
        if (tick >= timeEnd) {
          setTick(0);
        }
      }}
    >
      {tick > timeWindowOpen && (
        <LaunchAppWindow className="absolute bottom-5 right-4 z-10 animate-in fade-in slide-in-from-top-10" />
      )}
      <pre className="font-mono text-sm min-h-[240px]">
        <code className="grid">{lines}</code>
      </pre>
    </div>
  );
}

function LaunchAppWindow(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn('overflow-hidden rounded-md border bg-fd-popover shadow-lg', props.className)}
    >
      <p className="text-xs text-fd-muted-foreground text-center px-4 py-2 border-b">
        localhost:8545
      </p>
      <p className="text-sm px-4 py-2">Node started successfully!</p>
    </div>
  );
}

const previewButtonVariants = cva('w-20 h-8 text-sm font-medium transition-colors rounded-full', {
  variants: {
    active: {
      true: 'text-fd-primary-foreground',
      false: 'text-fd-muted-foreground',
    },
  },
});

export function PreviewImages(props: ComponentProps<'div'>) {
  const [active, setActive] = useState(0);
  const previews = [
    {
      name: 'Docs',
      gradient: 'from-blue-500/20 to-violet-500/20',
    },
    {
      name: 'Explorer',
      gradient: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      name: 'APIs',
      gradient: 'from-orange-500/20 to-red-500/20',
    },
  ];

  return (
    <div {...props} className={cn('relative grid min-h-[300px]', props.className)}>
      <div className="absolute flex flex-row left-1/2 -translate-x-1/2 bottom-4 z-2 p-0.5 rounded-full bg-fd-card border shadow-xl">
        <div
          role="none"
          className="absolute bg-fd-primary rounded-full w-20 h-8 transition-transform z-[-1]"
          style={{
            transform: `translateX(${active * 80}px)`,
          }}
        />
        {previews.map((item, i) => (
          <button
            key={i}
            className={cn(previewButtonVariants({ active: active === i }))}
            onClick={() => setActive(i)}
          >
            {item.name}
          </button>
        ))}
      </div>
      {previews.map((item, i) => (
        <div
          key={i}
          className={cn(
            'col-start-1 row-start-1 flex items-center justify-center rounded-2xl bg-gradient-to-br p-8',
            item.gradient,
            active === i ? 'animate-in fade-in slide-in-from-bottom-12 duration-800' : 'invisible',
          )}
        >
          <div className="text-center">
            <p className="text-2xl font-bold mb-2">{item.name}</p>
            <p className="text-sm text-fd-muted-foreground">Paxeer {item.name} Preview</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const WritingTabs = [
  {
    name: 'EVM',
    value: 'evm',
  },
  {
    name: 'Cosmos',
    value: 'cosmos',
  },
  {
    name: 'IBC',
    value: 'ibc',
  },
] as const;

export function Writing({
  tabs: tabContents,
}: {
  tabs: Record<(typeof WritingTabs)[number]['value'], ReactNode>;
}) {
  const [tab, setTab] = useState<(typeof WritingTabs)[number]['value']>('evm');

  return (
    <div className="col-span-full my-20">
      <h2 className="text-4xl text-brand mb-8 text-center font-medium tracking-tight">
        Build on any stack.
      </h2>
      <p className="text-center mb-8 mx-auto w-full max-w-[800px]">
        Full EVM compatibility with Cosmos SDK foundations and IBC cross-chain messaging.
        Deploy Solidity contracts, build Cosmos modules, or bridge across chains.
      </p>
      <div className="flex justify-center items-center gap-4 text-fd-muted-foreground mb-6">
        {WritingTabs.map((item) => (
          <Fragment key={item.value}>
            <ArrowRight className="size-4 first:hidden" />
            <button
              className={cn(
                'text-lg font-medium transition-colors',
                item.value === tab && 'text-brand',
              )}
              onClick={() => setTab(item.value)}
            >
              {item.name}
            </button>
          </Fragment>
        ))}
      </div>
      {Object.entries(tabContents).map(([key, value]) => (
        <div
          key={key}
          aria-hidden={key !== tab}
          className={cn('animate-fd-fade-in', key !== tab && 'hidden')}
        >
          {value}
        </div>
      ))}
    </div>
  );
}

export function AgnosticBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className="absolute inset-0 -z-1 mask-[linear-gradient(to_top,white_30%,transparent_calc(100%-120px))]"
    >
      <Dithering
        colorBack="#00000000"
        colorFront="#c6bb58"
        shape="warp"
        type="4x4"
        speed={visible ? 0.4 : 0}
        className="size-full"
        minPixelRatio={1}
      />
    </div>
  );
}

let observer: IntersectionObserver;
const observerTargets = new WeakMap<Element, (entry: IntersectionObserverEntry) => void>();

function useIsVisible(ref: RefObject<HTMLElement | null>) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    observer ??= new IntersectionObserver((entries) => {
      for (const entry of entries) {
        observerTargets.get(entry.target)?.(entry);
      }
    });

    const element = ref.current;
    if (!element) return;
    observerTargets.set(element, (entry) => {
      setVisible(entry.isIntersecting);
    });
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observerTargets.delete(element);
    };
  }, [ref]);

  return visible;
}
