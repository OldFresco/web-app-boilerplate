import 'babel-polyfill'
import '../styles/entry.css'

import React, { Component, PropTypes } from 'react'

import DevTools from './shared/DevTools'
import LandingPage from './portal/LandingPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NotFound from './shared/NotFound'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { Router } from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

export default class Root extends Component {
  render () {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: '#2BC677',
        primary2Color: '#2BC677'
      }
    })

    const {store, history} = this.props

    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Router history={history}>
              <Route component={LandingPage}>
                <Route path='/' component={LandingPage} />
                <Route path='*' component={NotFound} />
              </Route>
            </Router>
            {!<DevTools />}
          </div>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
