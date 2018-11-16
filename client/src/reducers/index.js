import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import authenticationReducer from './authentication.reducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  auth: authenticationReducer,
})