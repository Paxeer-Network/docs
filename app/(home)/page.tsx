import { cn } from '@/lib/utils';
import Link from 'next/link';
import { cva } from 'class-variance-authority';
import {
  BatteryChargingIcon,
  FileIcon,
  FileTextIcon,
  Heart,
  SearchIcon,
  TerminalIcon,
  TimerIcon,
} from 'lucide-react';
import { Marquee } from '@/app/(home)/marquee';
import {
  Hero,
  AgnosticBackground,
  CreateAppAnimation,
  PreviewImages,
  Writing,
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
        primary: 'bg-brand text-brand-foreground hover:bg-brand-200',
        secondary: 'border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

const cardVariants = cva('rounded-2xl text-sm p-6 bg-origin-border shadow-lg', {
  variants: {
    variant: {
      secondary: 'bg-brand-secondary text-brand-secondary-foreground',
      default: 'border bg-fd-card',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export default function Page() {
  return (
    <main className="text-landing-foreground pt-4 pb-6 dark:text-landing-foreground-dark md:pb-12">
      <div className="relative flex min-h-[600px] h-[70vh] max-h-[900px] border rounded-2xl overflow-hidden mx-auto w-full max-w-[1400px] bg-origin-border">
        <Hero />
        <div className="flex flex-col z-2 px-4 size-full md:p-12 max-md:items-center max-md:text-center">
          <p className="mt-12 text-xs text-brand font-medium rounded-full p-2 border border-brand/50 w-fit">
            the blockchain platform you need.
          </p>
          <h1 className="text-4xl my-8 leading-tighter font-medium xl:text-5xl xl:mb-12">
            Build excellent
            <br className="md:hidden" /> dApps,
            <br />
            your <span className="text-brand">way</span>.
          </h1>
          <div className="flex flex-row items-center justify-center gap-4 flex-wrap w-fit">
            <Link href="/docs" className={cn(buttonVariants(), 'max-sm:text-sm')}>
              Getting Started
            </Link>
            <a
              href="https://build.hyperpaxeer.com/"
              target="_blank"
              rel="noreferrer noopener"
              className={cn(buttonVariants({ variant: 'secondary' }), 'max-sm:text-sm')}
            >
              Developer Portal
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 mt-12 px-6 mx-auto w-full max-w-[1400px] md:px-12 lg:grid-cols-2 lg:mt-20">
        <p className="text-2xl tracking-tight leading-snug font-light col-span-full md:text-3xl xl:text-4xl">
          Paxeer is a <span className="text-brand font-medium">Cosmos SDK</span> blockchain
          with <span className="text-brand font-medium">EVM compatibility</span>, beautifully
          engineered by <span className="text-brand font-medium">Sidiora Technologies</span>. Bringing powerful
          features for your dApp workflows, with high customizability to fit your preferences, works
          seamlessly with any EVM tooling, IBC &#x2014; anything.
        </p>
        <div className="relative p-4 rounded-2xl col-span-full z-2 overflow-hidden md:p-8 bg-gradient-to-br from-brand/5 to-brand/10 border">
          <div className="mx-auto w-full max-w-[800px] p-2 bg-fd-card text-fd-card-foreground border rounded-2xl shadow-lg">
            <div className="flex flex-row gap-2">
              <h2 className="text-brand content-center font-mono font-bold uppercase border-2 border-brand/50 px-2 rounded-xl">
                Try it out
              </h2>
              <div className="bg-fd-secondary flex-1 rounded-lg px-3 py-2 font-mono text-sm">
                paxeerd init my-dapp
              </div>
            </div>

            <div className="relative bg-fd-secondary rounded-xl mt-2 border shadow-md">
              <div className="flex flex-row items-center gap-2 border-b p-2 text-fd-muted-foreground">
                <TerminalIcon className="size-4" />
                <span className="text-xs font-medium">Terminal</span>
                <div className="ms-auto me-2 size-2 rounded-full bg-red-400" />
              </div>

              <CreateAppAnimation className="p-2 text-fd-secondary-foreground/80" />
            </div>
          </div>
        </div>
        <Feedback />
        <Aesthetics />

        <AnybodyCanWrite />

        <ForEngineers />
        <Search />
        <OpenSource />
      </div>
    </main>
  );
}

function Aesthetics() {
  return (
    <>
      <div
        className={cn(
          cardVariants({
            variant: 'secondary',
            className: 'flex items-center justify-center p-0',
          }),
        )}
      >
        <PreviewImages />
      </div>
      <div className={cn(cardVariants(), 'flex flex-col')}>
        <h3 className={cn(headingVariants({ variant: 'h3', className: 'mb-6' }))}>
          Minimal aesthetics, Maximum power.
        </h3>
        <p className="mb-4">
          Paxeer offers well-designed documentation, with deep customization for your dApps.
        </p>
        <p className="mb-4">Ready to start? Initialize your project with the Paxeer CLI.</p>
        <div className="bg-fd-secondary rounded-lg px-3 py-2 font-mono text-sm">
          paxeerd init my-dapp --template evm
        </div>
      </div>
    </>
  );
}

function AnybodyCanWrite() {
  return (
    <Writing
      tabs={{
        evm: (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-fd-secondary rounded-xl border p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PaxToken is ERC20 {
    constructor() ERC20("PaxToken", "PAX") {
        _mint(msg.sender, 1000000 * 10 ** 18);
    }

    function mint(address to, uint256 amount)
        public
    {
        _mint(to, amount);
    }
}`}</pre>
            </div>
            <div className="max-lg:row-start-1">
              <h3 className={cn(headingVariants({ variant: 'h3', className: 'my-4' }))}>
                Deploy Solidity contracts.
              </h3>
              <p>
                Full EVM compatibility &#x2014; use your existing Solidity contracts, Hardhat, Foundry, and more.
              </p>
              <ul className="text-xs list-disc list-inside mt-8">
                <li>Solidity smart contracts</li>
                <li>EVM precompiles and extensions</li>
                <li>Hardhat and Foundry support</li>
                <li>ERC-20, ERC-721, ERC-1155</li>
                <li>Cross-chain via IBC</li>
                <li>Argus VM integration</li>
                <li>Gas optimization tools</li>
              </ul>
            </div>
          </div>
        ),
        cosmos: (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-fd-secondary rounded-xl border p-4 font-mono text-sm overflow-x-auto">
              <pre>{`package keeper

import (
    sdk "github.com/cosmos/cosmos-sdk/types"
    "github.com/paxeer/paxeer/x/mymodule/types"
)

func (k Keeper) CreateRecord(
    ctx sdk.Context,
    msg *types.MsgCreateRecord,
) (*types.MsgCreateRecordResponse, error) {
    record := types.Record{
        Creator: msg.Creator,
        Title:   msg.Title,
        Data:    msg.Data,
    }
    k.SetRecord(ctx, record)
    return &types.MsgCreateRecordResponse{}, nil
}`}</pre>
            </div>
            <div className="max-lg:row-start-1">
              <h3 className={cn(headingVariants({ variant: 'h3', className: 'my-4' }))}>
                Build Cosmos modules.
              </h3>
              <p>Cosmos SDK modules for custom chain logic, governance, and staking.</p>
              <ul className="text-xs list-disc list-inside mt-8">
                <li>Custom Cosmos SDK modules</li>
                <li>Protobuf message definitions</li>
                <li>Keeper pattern architecture</li>
                <li>Governance proposals</li>
                <li>Staking and delegation</li>
                <li>IBC channel management</li>
                <li>Extend via custom ante handlers</li>
              </ul>
            </div>
          </div>
        ),
        ibc: (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-fd-secondary rounded-xl border p-4 font-mono text-sm overflow-x-auto">
              <pre>{`import { SigningStargateClient } from
  "@cosmjs/stargate";

const client = await
  SigningStargateClient.connectWithSigner(
    "https://rpc.paxeer.network",
    signer,
  );

const result = await client.sendIbcTokens(
  senderAddress,
  recipientAddress,
  { denom: "upax", amount: "1000000" },
  "transfer",
  "channel-0",
  undefined,
  Math.floor(Date.now() / 1000) + 600,
  "auto",
);

console.log("IBC transfer:", result.transactionHash);`}</pre>
            </div>

            <div className="max-lg:row-start-1">
              <h3 className={cn(headingVariants({ variant: 'h3', className: 'my-4' }))}>
                Bridge across chains.
              </h3>
              <p>
                IBC cross-chain messaging to connect Paxeer with the broader Cosmos ecosystem
                and beyond.
              </p>
              <ul className="text-xs list-disc list-inside mt-8">
                <li>IBC token transfers</li>
                <li>Cross-chain contract calls</li>
                <li>Relayer configuration</li>
                <li>Channel management</li>
                <li>Multi-hop routing</li>
                <li>Interchain accounts</li>
              </ul>
            </div>
          </div>
        ),
      }}
    />
  );
}

const feedback = [
  {
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=alice',
    user: 'Alice Chen',
    role: 'Smart Contract Developer',
    message: `Paxeer's EVM compatibility is seamless. I deployed my existing Solidity contracts without changing a single line of code.\n\nThe IBC integration is a game-changer for cross-chain dApps.`,
  },
  {
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=bob',
    user: 'Bob Martinez',
    role: 'Cosmos Module Developer',
    message: `Building custom modules on Paxeer is incredibly straightforward. The documentation covers everything from keeper patterns to governance.`,
  },
  {
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=carol',
    user: 'Carol Williams',
    role: 'Validator Operator',
    message: 'Running a validator on Paxeer has been rock solid. The setup docs are clear and the staking mechanics are well-designed.',
  },
  {
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=dave',
    user: 'Dave Kim',
    role: 'Full Stack Developer',
    message: `The developer tooling is excellent \u2014 from the CLI to the block explorer, everything just works.`,
  },
];

function Feedback() {
  return (
    <>
      <div className={cn(cardVariants())}>
        <h3 className={cn(headingVariants({ variant: 'h3', className: 'mb-6' }))}>
          A platform developers love.
        </h3>
        <p className="mb-6">
          Trusted by developers and validators building the next generation of decentralized
          applications on Paxeer Network.
        </p>
        <Link href="/docs" className={cn(buttonVariants())}>
          Explore Docs
        </Link>
      </div>
      <div
        className={cn(
          cardVariants({
            variant: 'secondary',
            className: 'relative p-0',
          }),
        )}
      >
        <div className="absolute inset-0 z-2 inset-shadow-[0_10px_60px] inset-shadow-brand-secondary rounded-2xl" />
        <Marquee className="p-8">
          {feedback.map((item) => (
            <div
              key={item.user}
              className="flex flex-col rounded-xl border bg-fd-card text-landing-foreground p-4 shadow-lg w-[320px]"
            >
              <p className="text-sm whitespace-pre-wrap">{item.message}</p>

              <div className="mt-auto flex flex-row items-center gap-2 pt-4">
                <img
                  src={item.avatar}
                  alt="avatar"
                  width="32"
                  height="32"
                  className="size-8 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">{item.user}</p>
                  <p className="text-xs text-fd-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}

function ForEngineers() {
  return (
    <>
      <h2
        className={cn(
          headingVariants({
            variant: 'h2',
            className: 'text-brand text-center mb-4 col-span-full',
          }),
        )}
      >
        Built For Developers.
      </h2>

      <div className={cn(cardVariants(), 'relative flex flex-col overflow-hidden z-2')}>
        <h3
          className={cn(
            headingVariants({
              variant: 'h3',
              className: 'mb-6',
            }),
          )}
        >
          Multi-Chain Native
        </h3>
        <p className="mb-20">
          EVM smart contracts, Cosmos SDK modules, and IBC cross-chain messaging &#x2014; all on one
          unified platform.
        </p>
        <div className="flex flex-row gap-2 mt-auto bg-brand text-brand-foreground rounded-xl p-2 w-fit">
          <svg
            fill="currentColor"
            role="img"
            viewBox="0 0 24 24"
            className="size-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Ethereum</title>
            <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
          </svg>
          <svg
            fill="currentColor"
            role="img"
            viewBox="0 0 24 24"
            className="size-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Cosmos</title>
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4a9.6 9.6 0 110 19.2 9.6 9.6 0 010-19.2zm0 3.6a6 6 0 100 12 6 6 0 000-12zm0 2.4a3.6 3.6 0 110 7.2 3.6 3.6 0 010-7.2z" />
          </svg>
        </div>
        <AgnosticBackground />
      </div>

      <div className={cn(cardVariants(), 'flex flex-col')}>
        <div className="flex flex-row items-center gap-2 mb-6">
          <TimerIcon className="size-5 text-brand" />
          <h3 className={cn(headingVariants({ variant: 'h3' }))}>Fast Finality</h3>
        </div>
        <p>
          Tendermint BFT consensus with fast block times. Transactions are finalized in seconds, not
          minutes.
        </p>
      </div>
      <div className={cn(cardVariants(), 'flex flex-col')}>
        <div className="flex flex-row items-center gap-2 mb-6">
          <BatteryChargingIcon className="size-5 text-brand" />
          <h3 className={cn(headingVariants({ variant: 'h3' }))}>Energy Efficient</h3>
        </div>
        <p>
          Proof-of-Stake consensus uses a fraction of the energy of proof-of-work chains. Validate
          without mining hardware.
        </p>
      </div>

      <div className={cn(cardVariants(), 'flex flex-col')}>
        <div className="flex flex-row items-center gap-2 mb-6">
          <FileIcon className="size-5 text-brand" />
          <h3 className={cn(headingVariants({ variant: 'h3' }))}>Rich Documentation</h3>
        </div>
        <p>
          Comprehensive docs covering smart contracts, validator setup, IBC channels, governance, and
          protocol modules.
        </p>
      </div>
      <div className={cn(cardVariants(), 'flex flex-col')}>
        <div className="flex flex-row items-center gap-2 mb-6">
          <FileTextIcon className="size-5 text-brand" />
          <h3 className={cn(headingVariants({ variant: 'h3' }))}>Developer Guides</h3>
        </div>
        <p>
          Step-by-step guides for deploying contracts, running validators, configuring relayers, and
          building full-stack dApps.
        </p>
      </div>
    </>
  );
}

function Search() {
  return (
    <div
      className={cn(
        cardVariants({
          className: 'col-span-full flex flex-col items-center text-center py-12',
        }),
      )}
    >
      <SearchIcon className="size-8 mb-4 text-brand" />
      <h2 className={cn(headingVariants({ variant: 'h2', className: 'mb-4' }))}>
        Search Everything.
      </h2>
      <p className="max-w-xl mb-6">
        Full-text search across all documentation. Find smart contract references, CLI commands,
        module specifications, and API endpoints instantly.
      </p>
      <Link href="/docs" className={cn(buttonVariants())}>
        Browse Documentation
      </Link>
    </div>
  );
}

function OpenSource() {
  return (
    <div
      className={cn(
        cardVariants({
          variant: 'secondary',
          className: 'col-span-full flex flex-col items-center text-center py-12 relative overflow-hidden z-2',
        }),
      )}
    >
      <Heart className="size-8 mb-4" />
      <h2 className={cn(headingVariants({ variant: 'h2', className: 'mb-4' }))}>
        Open Source &amp; Community Driven.
      </h2>
      <p className="max-w-xl mb-8">
        Paxeer is built in the open. Contribute to the protocol, improve the docs, or build on
        the ecosystem. Join the community shaping the future of decentralized infrastructure.
      </p>
      <div className="flex flex-row gap-4 flex-wrap justify-center">
        <a
          href="https://github.com/Paxeer-Network"
          target="_blank"
          rel="noreferrer noopener"
          className={cn(buttonVariants())}
        >
          GitHub
        </a>
        <a
          href="http://whitepaper.paxeer.app/"
          target="_blank"
          rel="noreferrer noopener"
          className={cn(buttonVariants({ variant: 'secondary' }))}
        >
          Whitepaper
        </a>
        <a
          href="https://paxscan.io/"
          target="_blank"
          rel="noreferrer noopener"
          className={cn(buttonVariants({ variant: 'secondary' }))}
        >
          Block Explorer
        </a>
      </div>
      <AgnosticBackground />
    </div>
  );
}
