import {
  MENTOR_FORM_SAVE_FULFILLED,
  MENTOR_FORM_SAVE_PENDING,
  MENTOR_FORM_SAVE_REJECTED,
  MENTOR_FORM_VIEW_FULFILLED,
  MENTOR_FORM_RESET,
} from '../names'
import _ from 'lodash'
import { mentorFormFields } from '../../components/initial-states'

const initialState = {
  loading: false,
  message: '',
  error: null,
  data: {
    ...mentorFormFields,
  },
}
// Reducer function
const mentorFormSaveReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENTOR_FORM_SAVE_PENDING:
      return {
        ...state,
        loading: true,
        error: false,
        message: '',
      }
    case MENTOR_FORM_SAVE_FULFILLED:
      return {
        ...state,
        message: '✔ Details updated successfully.',
        loading: false,
        error: false,
        data: {
          ...action.payload,
        },
      }
    case MENTOR_FORM_VIEW_FULFILLED: {
      const formData = action.payload ? action.payload : mentorFormFields
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          ...formData,
        },
      }
    }
    case MENTOR_FORM_SAVE_REJECTED:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: true,
      }
    case MENTOR_FORM_RESET:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
export default mentorFormSaveReducer
