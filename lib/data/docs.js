import { PRODUCT_NAME } from '~/lib/constants'

export default [
  {
    name: 'Introduction',
    href: '/docs/introduction',
    aliases: ['/docs'],
  },
  {
    name: 'Git Integrations',
    href: '/docs/git-integrations',
    posts: [
      {
        name: `${PRODUCT_NAME} for GitHub`,
        href: '/docs/git-integrations/vercel-for-github',
      },
      {
        name: `${PRODUCT_NAME} for GitLab`,
        href: '/docs/git-integrations/vercel-for-gitlab',
      },
      {
        name: `${PRODUCT_NAME} for Bitbucket`,
        href: '/docs/git-integrations/vercel-for-bitbucket',
      },
    ],
  },
  {
    name: 'Build Step',
    href: '/docs/build-step',
  },
  {
    name: 'Custom Domains',
    href: '/docs/custom-domains',
  },
  {
    name: 'Serverless Functions',
    href: '/docs/serverless-functions/introduction',
    posts: [
      {
        name: 'Supported Languages',
        href: '/docs/serverless-functions/supported-languages',
      },
      {
        name: 'Edge Caching',
        href: '/docs/serverless-functions/edge-caching',
      },
    ],
  },
  {
    name: 'Platform',
    href: '/docs/platform/overview',
    posts: [
      {
        name: 'Deployments',
        href: '/docs/platform/deployments',
      },
      {
        name: 'Projects',
        href: '/docs/platform/projects',
      },
      {
        name: 'Users and Teams',
        href: '/docs/platform/users-and-teams',
      },
      {
        name: 'Limits',
        href: '/docs/platform/limits',
      },
      {
        name: 'Fair Use Policy',
        href: '/docs/platform/fair-use-policy',
      },
      {
        name: 'Glossary',
        href: '/docs/platform/glossary',
      },
      {
        name: 'Frequently Asked Questions',
        href: '/docs/platform/frequently-asked-questions',
      },
    ],
  },
  {
    name: 'Edge Network',
    href: '/docs/edge-network/overview',
    posts: [
      {
        name: 'Caching',
        href: '/docs/edge-network/caching',
      },
      {
        name: 'Headers',
        href: '/docs/edge-network/headers',
      },
      {
        name: 'Encryption',
        href: '/docs/edge-network/encryption',
      },
      {
        name: 'Compression',
        href: '/docs/edge-network/compression',
      },
      {
        name: 'Regions',
        href: '/docs/edge-network/regions',
      },
      {
        name: 'Frequently Asked Questions',
        href: '/docs/edge-network/frequently-asked-questions',
      },
    ],
  },
  {
    name: 'More',
    href: '/docs/more/introduction',
    posts: [
      {
        name: 'Deploy Button',
        href: '/docs/more/deploy-button',
      },
      {
        name: 'Deploy Hooks',
        href: '/docs/more/deploy-hooks',
      },
    ],
  },
]
