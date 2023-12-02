import { combineReducers } from 'redux'
import userLoginReducer from './user-login-reducer'
import signUpReducer from './user-signup-reducer'
import mentorFormSaveReducer from './mentor-form-reducer'

const rootReducer = combineReducers({
  user: userLoginReducer,
  signUpForm: signUpReducer,
  mentorSaveForm: mentorFormSaveReducer,
})
export default rootReducer
