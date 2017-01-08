import { applyMiddleware, createStore } from 'redux'

import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, apiMiddleware)
  )
}