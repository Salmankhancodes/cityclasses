import React from 'react'
import './MentorCard.css'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { DEFAULT_MENTOR_AVATAR_URL } from '../../constants'
const MentorCard = (props) => {
  const { data } = props
  const { name, id, fees, subjectName, grade, imageUrl } = data
  return (
    <div className='mentor-card'>
      <img
        className='mentor-card-img'
        src={
          imageUrl ?? DEFAULT_MENTOR_AVATAR_URL
          // 'src\\assets\\city-classes-logo.png' ||
          // 'srcassetsmentorimage.jpg'
        }
        alt=''
      />
      <div className='mentor-card__details'>
        <div className='mentor-card__row1'>
          <span>{_.capitalize(subjectName)}</span>
          <span className='mentor-card__rating'>Class {grade}</span>
        </div>
        <div className='mentor-card__row2'>
          <span>{name}</span>
          <span>₹{fees}</span>
        </div>
      </div>

      <Link
        to={`/details/${id}/${grade}/${subjectName}`}
        className='linkProfileBtn'
      >
        <div className='mentor-card__button'>View profile</div>
      </Link>
    </div>
  )
}

export default MentorCard
