import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { getDarkMode, setDarkModeFlag } from './dark-mode'

export const DarkBgContext = React.createContext()
export const useDarkMode = () => useContext(DarkBgContext)

const WithDarkMode = (Component, forceTheme) => {
  return class DarkMode extends React.Component {
    static getInitialProps = Component.getInitialProps

    static childContextTypes = {
      darkBg: PropTypes.bool,
    }

    // dark mode was enabled in localStorage
    state = {
      darkBg: getDarkMode(),
    }

    getChildContext() {
      return {
        darkBg: this.state.darkBg,
      }
    }

    componentDidMount() {
      window.addEventListener('storage', this.onStorage)
      window.addEventListener('dark-mode', this.onStorage)
    }
    componentWillUnmount() {
      window.removeEventListener('storage', this.onStorage)
      window.removeEventListener('dark-mode', this.onStorage)
    }
    onStorage = (event) => {
      if (event.key !== 'zeit-dark-mode') return
      const value = event.newValue
      if (value !== this.state.darkBg) {
        this.setState({ darkBg: !!value })
        setDarkModeFlag(!!value)
      }
    }

    render() {
      const value = forceTheme === undefined ? this.state.darkBg : forceTheme

      return (
        <DarkBgContext.Provider value={value}>
          <Component {...this.props} />
        </DarkBgContext.Provider>
      )
    }
  }
}

export default WithDarkMode
