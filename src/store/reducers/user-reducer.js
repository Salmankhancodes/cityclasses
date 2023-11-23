import { USER_LOGIN_FAILED, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../names'

const initialState = {
  loading: false,
  user: {},
  error: null,
}
// Reducer function
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        user: {
          ...action.payload.user,
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
