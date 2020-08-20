import ApiDocs from '~/components/references-mdx/api/index.mdx'
import ReferenceLayout from '~/components/layout/reference'
import { PRODUCT_NAME } from '~/lib/constants'

const Index = () => (
  <ReferenceLayout
    Data={<ApiDocs />}
    versioned
    description={`A comprehensive guide to using the ${PRODUCT_NAME} API and gaining control over the ${PRODUCT_NAME} platform.`}
    title={`${PRODUCT_NAME} API Documentation`}
  />
)

export default Index
