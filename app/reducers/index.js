import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

// The initial application state
let initialState = {
}

// Takes care of changing the application state
function app (state = initialState , action) {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  routing,
app})

export default rootReducer
