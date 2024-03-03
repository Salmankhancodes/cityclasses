import {
  GET_MENTORS_LIST_FULFILLED,
  GET_MENTORS_LIST_PENDING,
  GET_MENTORS_LIST_REJECTED,
} from '../names'
import _ from 'lodash'

const initialState = {
  loading: false,
  error: null,
  data: [],
}
// Reducer function
const mentorsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENTORS_LIST_PENDING:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case GET_MENTORS_LIST_FULFILLED:
      const allMentorsData = action.payload
      let flattenData = []
      allMentorsData.forEach((eachMentorData) => {
        const AllclassesData = eachMentorData.classesDetails
        AllclassesData.forEach((eachClass) => {
          let data = {
            ...eachMentorData.personalDetails,
            ...eachClass,
            id: eachMentorData.id,
          }
          flattenData.push(data)
        })
      })
      return {
        ...state,
        loading: false,
        error: false,
        data: flattenData,
      }
    case GET_MENTORS_LIST_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export default mentorsListReducer
