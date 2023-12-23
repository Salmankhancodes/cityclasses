import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-setup/firebase'
import {
  GET_MENTOR_DETAILS_FULFILLED,
  GET_MENTOR_DETAILS_PENDING,
  GET_MENTOR_DETAILS_REJECTED,
} from '../names'
import { MENTORS } from '../../constants'

export const getMentorDetails = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_MENTOR_DETAILS_PENDING })
    const mentorDocRef = doc(db, MENTORS, id)
    try {
      const payload = await getDoc(mentorDocRef)
      const data = payload.data()
      dispatch({ type: GET_MENTOR_DETAILS_FULFILLED, payload: data })
    } catch (error) {
      dispatch({ type: GET_MENTOR_DETAILS_REJECTED, payload: error.code })
    }
  }
}
