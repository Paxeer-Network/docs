import type { ReactNode } from 'react';
import { Callout } from 'fumadocs-ui/components/callout';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Step, Steps } from 'fumadocs-ui/components/steps';

function Note({ children }: { children: ReactNode }) {
  return <Callout type="info">{children}</Callout>;
}

function Info({ children }: { children: ReactNode }) {
  return <Callout type="info">{children}</Callout>;
}

function Tip({ children }: { children: ReactNode }) {
  return <Callout type="info" title="Tip">{children}</Callout>;
}

function Warning({ children }: { children: ReactNode }) {
  return <Callout type="warn">{children}</Callout>;
}

function Danger({ children }: { children: ReactNode }) {
  return <Callout type="error">{children}</Callout>;
}

function CardGroup({
  children,
}: {
  cols?: number;
  children: ReactNode;
}) {
  return <Cards>{children}</Cards>;
}

function MintCard({
  title,
  href,
  children,
}: {
  title: string;
  icon?: string;
  href?: string;
  children?: ReactNode;
}) {
  return (
    <Card title={title} href={href}>
      {children}
    </Card>
  );
}

function AccordionGroup({ children }: { children: ReactNode }) {
  return (
    <div className="divide-y divide-fd-border overflow-hidden rounded-lg border bg-fd-card my-4">
      {children}
    </div>
  );
}

function MintAccordion({
  title,
  children,
}: {
  title: string;
  icon?: string;
  children?: ReactNode;
}) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer items-center gap-2 px-3 py-2.5 font-medium text-fd-card-foreground hover:bg-fd-accent">
        <svg className="size-4 shrink-0 text-fd-muted-foreground transition-transform duration-200 group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        {title}
      </summary>
      <div className="px-4 pb-2 text-[0.9375rem]">{children}</div>
    </details>
  );
}

function MintTabs({ children }: { children: ReactNode }) {
  return <Tabs>{children}</Tabs>;
}

function MintTab({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return <Tab value={title}>{children}</Tab>;
}

function MintSteps({ children }: { children: ReactNode }) {
  return <Steps>{children}</Steps>;
}

function MintStep({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <Step>
      <h4>{title}</h4>
      {children}
    </Step>
  );
}

function CodeGroup({ children }: { children: ReactNode }) {
  return <Tabs>{children}</Tabs>;
}

function Frame({ children }: { children: ReactNode }) {
  return <div className="my-4">{children}</div>;
}

function Snippet({ file }: { file: string }) {
  return <div className="text-fd-muted-foreground text-sm">Snippet: {file}</div>;
}

function ResponseField({
  name,
  type,
  children,
}: {
  name: string;
  type?: string;
  required?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="border-fd-border border-b py-3">
      <div className="flex items-center gap-2">
        <code className="font-semibold">{name}</code>
        {type && <span className="text-fd-muted-foreground text-xs">{type}</span>}
      </div>
      {children && <div className="text-fd-muted-foreground mt-1 text-sm">{children}</div>}
    </div>
  );
}

function ParamField({
  path,
  query,
  body,
  header,
  type,
  required,
  children,
}: {
  path?: string;
  query?: string;
  body?: string;
  header?: string;
  type?: string;
  required?: boolean;
  default?: string;
  children?: ReactNode;
}) {
  const name = path || query || body || header || '';
  return (
    <div className="border-fd-border border-b py-3">
      <div className="flex items-center gap-2">
        <code className="font-semibold">{name}</code>
        {type && <span className="text-fd-muted-foreground text-xs">{type}</span>}
        {required && <span className="text-xs text-red-500">required</span>}
      </div>
      {children && <div className="text-fd-muted-foreground mt-1 text-sm">{children}</div>}
    </div>
  );
}

function Expandable({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <details className="my-4">
      <summary className="cursor-pointer font-medium">{title || 'Details'}</summary>
      <div className="mt-2 pl-4">{children}</div>
    </details>
  );
}

function ResponseExample({ children }: { children: ReactNode }) {
  return <div className="my-4">{children}</div>;
}

function RequestExample({ children }: { children: ReactNode }) {
  return <div className="my-4">{children}</div>;
}

export const mdxComponents = {
  Note,
  Info,
  Tip,
  Warning,
  Danger,
  Card: MintCard,
  CardGroup,
  Tabs: MintTabs,
  Tab: MintTab,
  Steps: MintSteps,
  Step: MintStep,
  Accordion: MintAccordion,
  AccordionGroup,
  CodeGroup,
  Frame,
  Snippet,
  ResponseField,
  ParamField,
  Expandable,
  ResponseExample,
  RequestExample,
};
