import { applyMiddleware, compose, createStore } from 'redux'

import DevTools from '../components/shared/DevTools.jsx'
import { apiMiddleware } from 'redux-api-middleware';
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, apiMiddleware, createLogger()),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}