import { USER_LOGIN_FAILED, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../names'

export const userLoginSuccess = (payload) => ({
  type: USER_LOGIN_SUCCESS,
  payload,
})

export const userLoginFailed = (payload) => ({
  type: USER_LOGIN_FAILED,
  payload,
})

export const userLogout = () => ({
  type: USER_LOGOUT,
})
