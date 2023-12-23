import {
  GET_MENTOR_DETAILS_PENDING,
  GET_MENTOR_DETAILS_FULFILLED,
  GET_MENTOR_DETAILS_REJECTED,
} from '../names'
import _ from 'lodash'

const initialState = {
  loading: false,
  error: null,
  data: {},
}
// Reducer function
const detailsPageReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENTOR_DETAILS_PENDING:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case GET_MENTOR_DETAILS_FULFILLED:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case GET_MENTOR_DETAILS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export default detailsPageReducers
