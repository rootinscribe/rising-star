import { combineReducers } from 'redux'
import order from './modules/order'
import session from './modules/session'

const rootReducer = combineReducers({
  order,
  session,
})

export default rootReducer