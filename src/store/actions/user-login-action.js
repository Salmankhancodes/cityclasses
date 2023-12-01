import { signInWithEmailAndPassword } from 'firebase/auth'
import {
  USER_LOGIN_PENDING,
  USER_LOGIN_FULFILLED,
  USER_LOGIN_REJECTED,
  USER_LOGOUT,
} from '../names'
import { auth } from '../../firebase-setup/firebase'

export const userLogin = (data) => {
  return async (dispatch) => {
    dispatch({ type: USER_LOGIN_PENDING })
    try {
      const loginData = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      dispatch({ type: USER_LOGIN_FULFILLED, payload: loginData })
    } catch (error) {
      dispatch({ type: USER_LOGIN_REJECTED, payload: error.code })
    }
  }
}
export const userLogout = () => ({
  type: USER_LOGOUT,
})
