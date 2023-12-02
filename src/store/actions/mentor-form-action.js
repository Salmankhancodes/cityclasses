import { doc, getDoc, setDoc } from 'firebase/firestore'
import { getDataFromStore } from '../../components/utils'
import { MENTORS } from '../../constants'
import { db } from '../../firebase-setup/firebase'
import {
  MENTOR_FORM_SAVE_FULFILLED,
  MENTOR_FORM_SAVE_PENDING,
  MENTOR_FORM_SAVE_REJECTED,
  MENTOR_FORM_VIEW_FULFILLED,
  MENTOR_FORM_RESET,
} from '../names'

export const saveMentorForm = (data) => {
  return async (dispatch) => {
    dispatch({ type: MENTOR_FORM_SAVE_PENDING })
    try {
      const currentUser = getDataFromStore('user').userData
      const userDocRef = doc(db, MENTORS, currentUser.uid)
      await setDoc(
        userDocRef,
        {
          ...data,
        },
        { merge: true }
      )
      dispatch({ type: MENTOR_FORM_SAVE_FULFILLED, payload: data })
    } catch (error) {
      dispatch({ type: MENTOR_FORM_SAVE_REJECTED, payload: error.code })
    }
  }
}
export const mentorFormReset = () => ({
  type: MENTOR_FORM_RESET,
})

export const viewMentorForm = () => {
  return async (dispatch) => {
    dispatch({ type: MENTOR_FORM_SAVE_PENDING })
    try {
      const currentUser = getDataFromStore('user').userData
      const userDocRef = doc(db, MENTORS, currentUser.uid)
      const data = await getDoc(userDocRef)
      dispatch({ type: MENTOR_FORM_VIEW_FULFILLED, payload: data.data() })
    } catch (error) {
      dispatch({ type: MENTOR_FORM_SAVE_REJECTED, payload: error.code })
    }
  }
}
