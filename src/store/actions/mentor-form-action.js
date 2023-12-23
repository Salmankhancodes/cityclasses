import { doc, getDoc, setDoc } from 'firebase/firestore'
import { getDataFromStore } from '../../components/utils'
import { MENTORS } from '../../constants'
import { auth, db, imageDb } from '../../firebase-setup/firebase'
import {
  MENTOR_FORM_SAVE_FULFILLED,
  MENTOR_FORM_SAVE_PENDING,
  MENTOR_FORM_SAVE_REJECTED,
  MENTOR_FORM_VIEW_FULFILLED,
  MENTOR_FORM_RESET,
} from '../names'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

export const saveMentorForm = (data, image) => {
  return async (dispatch) => {
    dispatch({ type: MENTOR_FORM_SAVE_PENDING })
    try {
      const currentUser = getDataFromStore('user').userData
      const userDocRef = doc(db, MENTORS, currentUser.uid)
      const imgRef = ref(imageDb, `profileimage/${currentUser.uid}`)
      await uploadBytes(imgRef, image)
      const imageUrl = await getDownloadURL(imgRef)
      const payload = {
        ...data,
        personalDetails: {
          ...data.personalDetails,
          imageUrl,
        },
      }
      await setDoc(
        userDocRef,
        {
          ...payload,
        },
        { merge: true }
      )
      dispatch({ type: MENTOR_FORM_SAVE_FULFILLED, payload })
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
      const payload = {
        ...data.data(),
        personalDetails: {
          ...data.data().personalDetails,
          email: auth.currentUser.email,
        },
      }
      dispatch({ type: MENTOR_FORM_VIEW_FULFILLED, payload: payload })
    } catch (error) {
      dispatch({ type: MENTOR_FORM_SAVE_REJECTED, payload: error.code })
    }
  }
}
