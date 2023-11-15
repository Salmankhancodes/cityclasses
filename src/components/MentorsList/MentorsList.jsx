import React from 'react'
import './MentorsList.css'
import MentorCard from '../MentorCard/MentorCard'

const MentorsList = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className='mentors-list-container'>
      {arr.map((ele, key) => {
        return <MentorCard key={key} />
      })}
    </div>
  )
}

export default MentorsList
