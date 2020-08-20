import React from 'react'
import ErrorPage from 'next/error'

const Error = (Component) => {
  return class WithError extends React.Component {
    static async getInitialProps(ctx) {
      const props =
        (Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : null) || {}

      if (props.statusCode && ctx.res) {
        // eslint-disable-next-line require-atomic-updates
        ctx.res.statusCode = props.statusCode
      }

      return props
    }

    render() {
      if (this.props.statusCode) {
        return <ErrorPage statusCode={this.props.statusCode} />
      }

      return <Component {...this.props} />
    }
  }
}

export default Error
