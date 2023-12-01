import { generateErrorMessage } from '../../components/utils'
import {
  USER_LOGIN_PENDING,
  USER_LOGIN_FULFILLED,
  USER_LOGIN_REJECTED,
  USER_LOGOUT,
} from '../names'

const initialState = {
  loading: false,
  userData: {},
  error: null,
}
// Reducer function
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_PENDING:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case USER_LOGIN_FULFILLED:
      return {
        ...state,
        loading: false,
        userData: {
          ...action.payload,
        },
        error: false,
      }
    case USER_LOGIN_REJECTED:
      return {
        ...state,
        loading: false,
        error: generateErrorMessage(action.payload),
      }
    case USER_LOGOUT:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
export default userReducer
