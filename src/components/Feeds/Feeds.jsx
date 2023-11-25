import React from 'react'
import './Feeds.css'
import MentorsList from '../MentorsList/MentorsList'

const Feeds = () => {
  return (
    <div className='feeds-container'>
      <div className='feeds-heading'>
        <p className='feeds-location'>
          <span>Mentors in </span>Bareilly, India
        </p>
        <select className='feeds-sort-filter' name='' id=''>
          <option value='morePopular'>High Popularity</option>
          <option value='lowPopular'>Low Popularity</option>
          <option value='lowFees'>Low Fees</option>
          <option value='highFees'>High Fees</option>
        </select>
      </div>
      <MentorsList />
    </div>
  )
}

export default Feeds
