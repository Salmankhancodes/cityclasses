import React from 'react'
import './MentorDetails.css'

const MentorDetails = () => {
  return (
    <div className='mentor-details-container'>
      <div className='mentor-details-lg-grid'>
        <iframe
          className='mentor-details__video'
          src='https://www.youtube.com/embed/OLVUrgQ_BbA?si=PCk_OtC9X9VkenrO'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></iframe>
        <div className='mentor-details-right-card'>
          <div className='mentor-card__details'>
            <div className='mentor-card__row1'>
              <span>Vishal Singh</span>
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
              <td>
                111 C/O Pustak sansar raza chowk sailani road old city bareilly
              </td>
            </tr>
            <tr>
              <th>Mode of teaching</th>
              <td>Table batch</td>
            </tr>
          </table>
        </div>
      </div>
      <div className='mentor-details-summary'>
        <p className='mentor-details-summary__heading'>About</p>
        <p className='mentor-details-summary__description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores
          delectus qui nulla. Inventore culpa magnam officia saepe unde ex
          doloribus suscipit totam recusandae ullam deleniti, eveniet
          consequatur molestiae, aut voluptas quo molestias blanditiis
          repellendus pariatur. Illum inventore totam nam repudiandae doloremque
          facilis dolore vero sint, accusamus mollitia eaque ad?
        </p>
      </div>
      <div className='table-wrapper'>
        <table className='lg-grid-details-table header-details-table'>
          <tr>
            <th>Location</th>
            <td>
              111 C/O Pustak sansar raza chowk sailani road old city bareilly
            </td>
          </tr>
          <tr>
            <th>Mode of teaching</th>
            <td>Table batch</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>
              111 C/O Pustak sansar raza chowk sailani road old city bareilly
            </td>
          </tr>
          <tr>
            <th>Mode of teaching</th>
            <td>Table batch</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>
              111 C/O Pustak sansar raza chowk sailani road old city bareilly
            </td>
          </tr>
          <tr>
            <th>Mode of teaching</th>
            <td>Table batch</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MentorDetails
