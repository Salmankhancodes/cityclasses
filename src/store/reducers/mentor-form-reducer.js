import { USER_LOGIN_FAILED, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../names'
import { mentorFormFields } from '../../components/initial-states'
const initialState = {
  loading: false,
  mentorData: {
    ...mentorFormFields,
  },
  error: null,
}
// Reducer function
const mentorFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        userData: {
          ...action.payload,
        },
      }
    case USER_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
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
