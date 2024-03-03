import React from 'react'
import './Feeds.css'
import MentorsList from '../MentorsList/MentorsList'
import FeedsFilter from './FeedsFilter'

const Feeds = () => {
  return (
    <div className='feeds-container'>
      <FeedsFilter />
      <div className='feeds-heading'>
        <p className='feeds-location'>
          <span>Mentors in </span>Bareilly, India
        </p>
      </div>
      <MentorsList />
    </div>
  )
}

export default Feeds
