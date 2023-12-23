import React, { useEffect } from 'react'
import './MentorsList.css'
import MentorCard from '../MentorCard/MentorCard'
import { connect } from 'react-redux'
import { getAllMentorsData } from '../../store/actions/mentors-list-action'

const MentorsList = (props) => {
  const { getAllMentorsDataDispatch, data, loading, error } = props
  useEffect(() => {
    getAllMentorsDataDispatch()
  }, [])
  return (
    <div className='mentors-list-container'>
      {data.map((mentor, key) => {
        return <MentorCard data={mentor} key={mentor.id} />
      })}
    </div>
  )
}

export default connect(
  ({ mentorsList }) => ({
    data: mentorsList.data,
    loading: mentorsList.loading,
    error: mentorsList.error,
  }),
  (dispatch) => ({
    getAllMentorsDataDispatch: () => dispatch(getAllMentorsData()),
  })
)(MentorsList)
