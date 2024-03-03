import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-setup/firebase'
import {
  GET_MENTORS_LIST_FULFILLED,
  GET_MENTORS_LIST_PENDING,
  GET_MENTORS_LIST_REJECTED,
} from '../names'
import { MENTORS } from '../../constants'

export const getAllMentorsData = () => {
  return async (dispatch) => {
    dispatch({ type: GET_MENTORS_LIST_PENDING })
    const collectionRef = collection(db, MENTORS)
    try {
      const querySnapshot = await getDocs(collectionRef)
      const payload = querySnapshot.docs.map((mentorData) => ({
        id: mentorData.id,
        ...mentorData.data(),
      }))
      dispatch({ type: GET_MENTORS_LIST_FULFILLED, payload })
    } catch (error) {
      dispatch({ type: GET_MENTORS_LIST_REJECTED, payload: error.code })
    }
  }
}

export const searchMentorByFilter = (payload) => ({
  type: 'UPDATE_SEARCH_FILTERS',
  payload,
})
