import React, { useEffect, useState } from 'react'
import './MentorDetails.css'
import { useParams } from 'react-router-dom'
import { getMentorDetails } from '../../store/actions/details-page-action'
import { connect } from 'react-redux'
import Accordion from '../common-components/accordion/Accordion'

const MentorDetails = (props) => {
  const { id } = useParams()
  const [accordionState, setToggleAccordion] = useState(true)
  const { getMentorDetailsDispatch, loading, error, data } = props
  const { classesDetails, personalDetails } = data
  console.log(data)
  useEffect(() => {
    getMentorDetailsDispatch(id)
  }, [])

  const updateSummaryAccordion = (state) => {
    setToggleAccordion(!state)
  }
  return (
    <div className='mentor-details-container'>
      <div className='details-content'>
        <div className='video-info-section'>
          <div className='video-box'>
            <iframe
              src='https://www.youtube.com/embed/OLVUrgQ_BbA?si=PCk_OtC9X9VkenrO'
              title='YouTube video player'
              frameBorder='0'
              className='demo-video'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
          <div className='mentor-details_info'>
            <div className='row-and-rating'>
              <h2>{personalDetails?.name}</h2>
              <h3>4⭐</h3>
            </div>
            <div className='subject-and-fees'>
              <h4>Economics</h4>
              <h4>₹1200</h4>
            </div>
          </div>
        </div>
        <div className='mentor-summary'>
          <Accordion
            accordionDescription={personalDetails?.summary}
            headerTitle={'About'}
            accordionState={accordionState}
            updateAccordionState={(state) => updateSummaryAccordion(state)}
          />
        </div>
        <div className='additional-info-table'>
          <table className='header-details-table'>
            <tr>
              <th>Phone</th>
              <td>{personalDetails?.phone}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{personalDetails?.email}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{classesDetails?.coachingAddress}</td>
            </tr>
            <tr>
              <th>Mode of teaching</th>
              <td>{classesDetails?.modeOfTeaching}</td>
            </tr>
            <tr>
              <th>Year of Experience</th>
              <td>{classesDetails?.YoE}</td>
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
        </div>
      </div>
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
