import React, { useState, useContext } from 'react'
import { useAmp } from 'next/amp'
import { withRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/tag'

import DataContext from '~/lib/data-context'
import Head from '~/components/layout/head'
import Heading from '~/components/text/linked-heading'
import Content from '~/components/layout/content'
import ContentFooter from '~/components/layout/content-footer'
import components from '~/lib/mdx-components'
import { H1, H2, H3, H4 } from '~/components/text'
import HR from '~/components/text/hr'
import data from '~/lib/data/docs'
import { FooterFeedback } from '~/components/feedback-input'
import Footer from '~/components/footer'
import Sidebar from '~/components/layout/sidebar'
import DocsNavbarDesktop from '~/components/layout/navbar/desktop'
import Main from '~/components/layout/main'
import { PRODUCT_NAME, ORG_NAME } from '~/lib/constants'

const DocH1 = ({ children }) => (
  <>
    <Heading noAnchor lean offsetTop={175}>
      <H1>{children}</H1>
    </Heading>
    <style jsx>{`
      :global(h1) {
        margin: 0;
      }
    `}</style>
  </>
)

const DocH2 = ({ children }) => (
  <>
    <Heading lean offsetTop={175}>
      <H2>{children}</H2>
    </Heading>
    <style jsx>{`
      :global(h2) {
        margin: 40px 0 0 0;
      }
    `}</style>
  </>
)

const DocH3 = ({ children }) => (
  <>
    <Heading lean offsetTop={175}>
      <H3>{children}</H3>
    </Heading>
    <style jsx>{`
      :global(h3) {
        margin: 40px 0 0 0;
      }
    `}</style>
  </>
)

const DocH4 = ({ children }) => (
  <>
    <Heading lean offsetTop={175}>
      <H4>{children}</H4>
    </Heading>
    <style jsx>{`
      :global(h4) {
        margin: 40px 0 0 0;
      }
    `}</style>
  </>
)

const NonAmpOnly = ({ children }) => (useAmp() ? null : children)

const defaultDescription = `The knowledge base and documentation for how to use ${PRODUCT_NAME} and how it works.`

function Doc({
  router,
  meta = {
    title: `${PRODUCT_NAME} Documentation`,
    description: defaultDescription,
  },
  children,
}) {
  const [navigationActive, setNavigationActive] = useState(false)
  const dataContext = useContext(DataContext)

  dataContext.setData(data)

  const handleIndexClick = () => {
    if (navigationActive) {
      setNavigationActive(false)
    }
  }

  return (
    <MDXProvider
      components={{
        ...components,
        h2: DocH2,
        h3: DocH3,
        h4: DocH4,
      }}
    >
      <>
        <Head
          titlePrefix=""
          titleSuffix={` - ${ORG_NAME} Documentation`}
          title={`${meta.title}`}
          description={meta.description}
          image={meta.image}
          lastEdited={meta.lastEdited}
        ></Head>

        <Main>
          <NonAmpOnly>
            <Sidebar active={navigationActive}>
              <DocsNavbarDesktop
                handleIndexClick={handleIndexClick}
                data={data}
                url={router}
              />
            </Sidebar>
          </NonAmpOnly>

          <Content>
            <div className="heading content-heading">
              <DocH1>{meta.title}</DocH1>
            </div>

            <div className="content">{children}</div>

            <NonAmpOnly>
              <>
                <HR />
                <FooterFeedback />
              </>
            </NonAmpOnly>

            <ContentFooter
              lastEdited={meta.lastEdited}
              editUrl={meta.editUrl}
            />
          </Content>
        </Main>
        <Footer />

        <style jsx>{`
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .category-wrapper {
            padding: 40px 0;
          }

          .category-wrapper:not(:last-child) {
            border-bottom: 1px solid #eaeaea;
          }

          .platform-select-title {
            font-size: var(--font-size-primary);
            line-height: var(--line-height-primary);
            font-weight: 400;
            margin-bottom: 16px;
            margin-top: 32px;
          }
        `}</style>
      </>
    </MDXProvider>
  )
}

export default withRouter(Doc)
