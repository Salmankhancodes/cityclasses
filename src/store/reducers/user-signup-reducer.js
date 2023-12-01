import { generateErrorMessage } from '../../components/utils'
import {
  USER_SIGNUP_PENDING,
  USER_SIGNUP_FULFILLED,
  USER_SIGNUP_REJECTED,
} from '../names'

const initialState = {
  loading: false,
  userData: {},
  error: null,
  signUpMessage: '',
}
// Reducer function
const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_PENDING:
      return {
        ...state,
        loading: true,
        error: false,
        signUpMessage: '',
      }
    case USER_SIGNUP_FULFILLED:
      return {
        ...state,
        loading: false,
        signUpMessage: '✔ Account created successfully.',
        error: false,
      }
    case USER_SIGNUP_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
        signUpMessage: generateErrorMessage(action.payload),
      }
    default:
      return state
  }
}
export default signUpReducer
