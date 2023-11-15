import React from 'react'
import './MentorCard.css'
const MentorCard = () => {
  return (
    <div className='mentor-card'>
      <img
        className='mentor-card-img'
        src='src\assets\Ron-Jeffries-Quotes-5-1024x555.jpg'
        alt=''
      />
      <div className='mentor-card__row1'>
        <span>Economics</span>
        <span>1200/Month</span>
      </div>
      <div className='mentor-card__row2'>
        <span>Vishal Singh</span>
      </div>
      <button className='mentor-card__button'>View profile </button>
    </div>
  )
}

export default MentorCard
