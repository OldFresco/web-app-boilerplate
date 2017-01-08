import 'babel-polyfill'

import React from 'react'
import Root from './components/Root'
import { browserHistory } from 'react-router'
import configureStore from './store/configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { render } from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'

// mateiral ui required
injectTapEventPlugin()

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={history} />, document.getElementById('root'))
