import _ from 'lodash'
const initialState = {
  gradeFilter: '',
  subjectNameFilter: '',
}
// Reducer function
const feedsFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_FILTERS':
      return {
        ...action.payload,
      }
    default:
      return state
  }
}
export default feedsFilterReducer
