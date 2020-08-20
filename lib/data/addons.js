const { parse } = require('url')

const data = [
  {
    id: 'gettingStarted',
    name: 'Getting Started',
    posts: [
      {
        id: 'introduction',
        name: 'Introduction',
        href: '/addons#introduction',
      },
    ],
  },

  {
    id: 'apiBasics',
    name: 'API Basics',
    posts: [
      {
        id: 'serverSpecs',
        name: 'Server Specs',
        href: '/api#api-basics/server-specs',
      },
      {
        id: 'contentType',
        name: 'Content Type',
        href: '/api#api-basics/content-type/content-type',
      },
      {
        id: 'authentication',
        name: 'Authentication',
        href: '/api#api-basics/authentication',
      },
      {
        id: 'errors',
        name: 'Errors',
        href: '/api#api-basics/errors',
      },
      {
        id: 'rateLimits',
        name: 'Rate Limits',
        href: '/api#api-basics/rate-limits',
      },
      {
        id: 'versioning',
        name: 'Versioning',
        href: '/api#api-basics/versioning',
      },
      {
        id: 'types',
        name: 'Types',
        href: '/api#api-basics/types',
      },
    ],
  },
]

export default data.map(({ posts, ...rest }) => {
  return {
    ...rest,
    posts: posts.map((p) => {
      const { hash } = parse(p.href)
      return { ...p, hash }
    }),
  }
})
