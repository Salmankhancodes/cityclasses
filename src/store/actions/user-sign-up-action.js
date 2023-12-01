import {
  USER_SIGNUP_PENDING,
  USER_SIGNUP_FULFILLED,
  USER_SIGNUP_REJECTED,
} from '../names'
import { auth, db } from '../../firebase-setup/firebase'
import { USERS } from '../../constants'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export const userSignup = (data) => {
  return async (dispatch) => {
    dispatch({ type: USER_SIGNUP_PENDING })
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
        data.selectedRoleOption
      )
      const userDocRef = doc(db, USERS, user.uid)
      await setDoc(
        userDocRef,
        {
          userName: data.userName,
          email: data.email,
          role: data.selectedRoleOption,
        },
        { merge: true }
      )

      dispatch({ type: USER_SIGNUP_FULFILLED, payload: user })
    } catch (error) {
      dispatch({ type: USER_SIGNUP_REJECTED, payload: error.code })
    }
  }
}
