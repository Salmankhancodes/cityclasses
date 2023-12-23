import React, { useEffect } from 'react'
import './MentorDetails.css'
import { useParams } from 'react-router-dom'
import { getMentorDetails } from '../../store/actions/details-page-action'
import { connect } from 'react-redux'

const MentorDetails = (props) => {
  const { id } = useParams()
  const { getMentorDetailsDispatch, loading, error, data } = props
  const { classesDetails, personalDetails } = data
  console.log(data)
  useEffect(() => {
    getMentorDetailsDispatch(id)
  }, [])
  return (
    <div className='mentor-details-container'>
      <div className='mentor-details-lg-grid'>
        <iframe
          className='mentor-details__video'
          src='https://www.youtube.com/embed/OLVUrgQ_BbA?si=PCk_OtC9X9VkenrO'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
        <div className='mentor-details-right-card'>
          <div className='mentor-card__details'>
            <div className='mentor-card__row1'>
              <span>{personalDetails?.name}</span>
              <span className='mentor-card__rating'>4.3⭐</span>
            </div>
            <div className='mentor-card__row2'>
              <span>Economics</span>
              <span>₹1200</span>
            </div>
          </div>
          <table className='header-details-table'>
            <tr>
              <th>Location</th>
              <td>{classesDetails?.coachingAddress}</td>
            </tr>
            <tr>
              <th>Mode of teaching</th>
              <td>{classesDetails?.modeOfTeaching}</td>
            </tr>
          </table>
        </div>
      </div>
      <div className='mentor-details-summary'>
        <div className='mentor-details-summary__heading'>
          <img
            className='mentor-details-summary__image'
            src={personalDetails?.imageUrl}
            alt='mentorPicture'
          />
          <p>About</p>
        </div>
        <p className='mentor-details-summary__description'>
          {personalDetails?.summary}
        </p>
      </div>
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
      </div>
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
