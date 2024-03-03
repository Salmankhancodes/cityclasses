import React, { useEffect, useState } from 'react'
import './MentorDetails.css'
import { useParams } from 'react-router-dom'
import { getMentorDetails } from '../../store/actions/details-page-action'
import { connect } from 'react-redux'
import Accordion from '../common-components/accordion/Accordion'
import _ from 'lodash'

const MentorDetails = (props) => {
  const { id, grade: gradeParam, subjectName: subjectNameParam } = useParams()
  const [accordionState, setToggleAccordion] = useState(true)
  const { getMentorDetailsDispatch, loading, error, data } = props
  const {
    name,
    subjectName,
    fees,
    summary,
    phone,
    email,
    coachingAddress,
    coachingName,
    modeOfTeaching,
    YoE,
    residentialAddress,
    grade,
  } = data
  useEffect(() => {
    getMentorDetailsDispatch({ id, gradeParam, subjectNameParam })
  }, [])
  const updateSummaryAccordion = (state) => {
    setToggleAccordion(!state)
  }
  return (
    <div className='mentor-details-container'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='details-content'>
          <div className='video-info-section'>
            <div className='video-box'>
              <iframe
                src='https://drive.google.com/file/d/1x7VVuF8zmFcfxITbkSLvEdq1vG5miKnQ/preview'
                // title='YouTube video player'
                // frameBorder='0'
                className='demo-video'
                // allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                // allowFullScreen
              ></iframe>
            </div>
            <div className='mentor-details_info'>
              <div className='row-and-rating'>
                <h2>{name}</h2>
                <h3>₹{fees}</h3>
              </div>
              <div className='subject-and-fees'>
                <h4>{_.capitalize(subjectName)}</h4>
                <h4>Class {grade}</h4>
              </div>
            </div>
          </div>
          <div className='mentor-summary'>
            <Accordion
              accordionDescription={summary}
              headerTitle={'About'}
              accordionState={accordionState}
              updateAccordionState={(state) => updateSummaryAccordion(state)}
            />
          </div>
          <div className='additional-info-table'>
            <table className='header-details-table'>
              <tr>
                <th>Phone</th>
                <td>{phone}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{email}</td>
              </tr>
              <tr>
                <th>Mode of teaching</th>
                <td>{modeOfTeaching}</td>
              </tr>
              <tr>
                <th>Year of Experience</th>
                <td>{YoE}</td>
              </tr>
              <tr>
                <th>Coaching Center</th>
                <td>{coachingName}</td>
              </tr>
              <tr>
                <th>Coaching Address</th>
                <td>{coachingAddress}</td>
              </tr>
              <tr>
                <th>Resedential Address</th>
                <td>{residentialAddress}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
      {/*
      <div className='table-wrapper'>
        <table className='lg-grid-details-table header-details-table'>
          <tr>
            <th>Year of Experience</th>
            <td>{classesDetails?.YoE}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{personalDetails?.phone}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{personalDetails?.email}</td>
          </tr>
          <tr>
            <th>Coaching Center Name</th>
            <td>{classesDetails?.coachingName}</td>
          </tr>
          <tr>
            <th>Coaching Address</th>
            <td>{classesDetails?.coachingAddress}</td>
          </tr>
        </table>
      </div> */}
    </div>
  )
}

export default connect(
  ({ detailsPage }) => ({
    loading: detailsPage.loading,
    error: detailsPage.error,
    data: detailsPage.data,
  }),
  (dispatch) => ({
    getMentorDetailsDispatch: (opts) => dispatch(getMentorDetails(opts)),
  })
)(MentorDetails)
