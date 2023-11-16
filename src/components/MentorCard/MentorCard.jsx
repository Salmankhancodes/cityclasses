import React from 'react'
import './MentorCard.css'
const MentorCard = () => {
  return (
    <div className='mentor-card'>
      <img
        className='mentor-card-img'
        src='src\assets\mentorimage.jpg'
        alt=''
      />
      <div className='mentor-card__details'>
        <div className='mentor-card__row1'>
          <span>Economics</span>
          <span>₹1200</span>
        </div>
        <div className='mentor-card__row2'>
          <span>Vishal Singh</span>
          <span className='mentor-card__rating'>4.3⭐</span>
        </div>
      </div>
      <div className='mentor-card__button'>View profile </div>
    </div>
  )
}

export default MentorCard
