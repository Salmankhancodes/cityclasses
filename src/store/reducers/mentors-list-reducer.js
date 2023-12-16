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
      return {
        ...state,
        loading: false,
        error: false,
        data: [...action.payload],
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
