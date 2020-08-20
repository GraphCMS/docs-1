import RuntimeDocs from '~/components/references-mdx/runtimes/index.mdx'
import ReferenceLayout from '~/components/layout/reference'
import { PRODUCT_NAME } from '~/lib/constants'

const Index = () => (
  <ReferenceLayout
    Data={<RuntimeDocs />}
    title={`Official ${PRODUCT_NAME} Runtimes`}
    description={`A complete reference of Runtimes on ${PRODUCT_NAME}; listing official runtimes and their usage.`}
    defaultActiveCategory="official-runtimes"
  />
)

export default Index
