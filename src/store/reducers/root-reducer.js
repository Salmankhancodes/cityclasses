import { combineReducers } from 'redux'
import userLoginReducer from './user-login-reducer'
import signUpReducer from './user-signup-reducer'

const rootReducer = combineReducers({
  user: userLoginReducer,
  signUpReducer,
})
export default rootReducer
