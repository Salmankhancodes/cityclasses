import React, { useEffect, useState } from 'react'
import './MentorsList.css'
import MentorCard from '../MentorCard/MentorCard'
import { connect } from 'react-redux'
import { getAllMentorsData } from '../../store/actions/mentors-list-action'
import _ from 'lodash'

const MentorsList = (props) => {
  const { getAllMentorsDataDispatch, data, feedsFilter, loading, error } = props
  useEffect(() => {
    getAllMentorsDataDispatch()
  }, [])
  const filteredData = () => {
    const { subjectNameFilter, gradeFilter } = feedsFilter
    let filterData = _.cloneDeep(data)
    if (subjectNameFilter !== 'not-selected' && subjectNameFilter !== '') {
      filterData = data.filter(
        (eachObj) => eachObj.subjectName === subjectNameFilter
      )
    }
    if (gradeFilter !== 'not-selected' && gradeFilter !== '') {
      filterData = filterData.filter(
        (eachObj) => eachObj.grade === _.toNumber(gradeFilter)
      )
    }
    return filterData
  }
  return (
    <div className='mentors-list-container'>
      {loading ? (
        <>Loading... </>
      ) : (
        <>
          {filteredData().map((mentor, key) => {
            return <MentorCard data={mentor} key={mentor.id} />
          })}
        </>
      )}
    </div>
  )
}

export default connect(
  ({ mentorsList, feedsFilter }) => ({
    data: mentorsList.data,
    loading: mentorsList.loading,
    error: mentorsList.error,
    feedsFilter,
  }),
  (dispatch) => ({
    getAllMentorsDataDispatch: () => dispatch(getAllMentorsData()),
  })
)(MentorsList)
