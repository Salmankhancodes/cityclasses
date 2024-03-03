import React from 'react'
import './FeedsFilter.css'
import { connect } from 'react-redux'
import { searchMentorByFilter } from '../../store/actions/mentors-list-action'

const FeedsFilter = (props) => {
  const { searchMentorByFilterDispatch, feedsFilter } = props

  const handleFilterChange = (value, dropDown) => {
    const updatedFilter = {
      ...feedsFilter,
      [dropDown]: value,
    }
    searchMentorByFilterDispatch(updatedFilter)
  }

  return (
    <div className='feeds-filter-container'>
      <div className='field-box'>
        <select
          required
          name={`subjectName`}
          onChange={(e) =>
            handleFilterChange(e.target.value, 'subjectNameFilter')
          }
          className='form-input'
          value={feedsFilter.subjectNameFilter}
        >
          <option value='not-selected'>--Select Subject--</option>
          <option value='all-subjects'>All Subjects</option>
          <option value='english'>English</option>
          <option value='hindi'>Hindi</option>
          <option value='mathematics'>Mathematics</option>
          <option value='social-science'>Social Science</option>
          <option value='science'>Science</option>
          <option value='computers'>Computers</option>
          <option value='physics'>Physics</option>
          <option value='chemistry'>Chemistry</option>
          <option value='biology'>Biology</option>
          <option value='biotechnology'>Biotechnology</option>
          <option value='economics'>Economics</option>
          <option value='accountancy'>Accountancy</option>
          <option value='business-studies'>Business Studies</option>
        </select>
      </div>
      <div className='field-box'>
        <select
          required
          className='form-input'
          name={'gradeFilter'}
          value={feedsFilter.gradefilter}
          onChange={(e) => handleFilterChange(e.target.value, 'gradeFilter')}
        >
          <option value='not-selected'>--Select Class--</option>
          <option value='1'>Class 1</option>
          <option value='2'>Class 2</option>
          <option value='3'>Class 3</option>
          <option value='4'>Class 4</option>
          <option value='5'>Class 5</option>
          <option value='6'>Class 6</option>
          <option value='7'>Class 7</option>
          <option value='8'>Class 8</option>
          <option value='9'>Class 9</option>
          <option value='10'>Class 10</option>
          <option value='11'>Class 11</option>
          <option value='12'>Class 12</option>
        </select>
      </div>{' '}
    </div>
  )
}

export default connect(
  ({ feedsFilter }) => ({
    feedsFilter,
  }),
  (dispatch) => ({
    searchMentorByFilterDispatch: (opts) =>
      dispatch(searchMentorByFilter(opts)),
  })
)(FeedsFilter)
