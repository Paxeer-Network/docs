import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img
          src="/images/sid-fun-icon2.png"
          alt="Paxeer Network"
          width={28}
          height={28}
          className="hidden dark:block"
        />
        <img
          src="/images/sid-fun-icon(1).png"
          alt="Paxeer Network"
          width={28}
          height={28}
          className="dark:hidden"
        />
        <span className="font-semibold">HyperPax Docs</span>
      </>
    ),
  },
  links: [
    {
      text: 'Developer Portal',
      url: 'https://build.hyperpaxeer.com/',
    },
    {
      text: 'Block Explorer',
      url: 'https://paxscan.io/',
    },
    {
      text: 'Whitepaper',
      url: 'http://whitepaper.paxeer.app/',
    },
  ],
  githubUrl: 'https://github.com/paxeer-network',
};
