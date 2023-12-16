import { combineReducers } from 'redux'
import userLoginReducer from './user-login-reducer'
import signUpReducer from './user-signup-reducer'
import mentorFormSaveReducer from './mentor-form-reducer'
import mentorsListReducer from './mentors-list-reducer'

const rootReducer = combineReducers({
  user: userLoginReducer,
  signUpForm: signUpReducer,
  mentorSaveForm: mentorFormSaveReducer,
  mentorsList: mentorsListReducer,
})
export default rootReducer
