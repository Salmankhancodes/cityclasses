import React, { useState } from 'react'
import './MentorForm.css'
import SubjectFields from './SubjectFields'

const MentorForm = () => {
  const [allClassesDetails, setAllClassesDetails] = useState([
    {
      subjectName: '',
      standard: '',
      fees: '',
    },
  ])
  const addMoreClass = () => {
    setAllClassesDetails([
      ...allClassesDetails,
      {
        subjectName: '',
        standard: '',
        fees: '',
      },
    ])
  }

  const removeClass = (idx) => {
    const filteredClasses = allClassesDetails.filter((item, id) => id !== idx)
    setAllClassesDetails([...filteredClasses])
  }
  return (
    <div className='mentor-form-container'>
      <div className='mentor-form-main'>
        <div className='mentor-form__section personal-details'>
          <p className='section-heading'>Personal Details</p>
          <div className='group-fields'>
            <div className='field-box'>
              <label className='form-label' htmlFor='name'>
                Name:{' '}
              </label>
              <input required type='text' className='form-input' name='name' />
            </div>
            <div className='field-box'>
              <label className='form-label' htmlFor='email'>
                Email:{' '}
              </label>
              <input
                required
                type='email'
                className='form-input'
                name='email'
              />
            </div>{' '}
            <div className='field-box'>
              <label className='form-label' htmlFor='dob'>
                Date of Birth:{' '}
              </label>
              <input required type='date' className='form-input' name='dob' />
            </div>{' '}
            <div className='field-box'>
              <label className='form-label' htmlFor='phone'>
                Phone No.{' '}
              </label>
              <input
                required
                type='number'
                className='form-input'
                name='Phone'
              />
            </div>
            <div className='field-box'>
              <label className='form-label' htmlFor='homeAddress'>
                Residencial Address:{' '}
              </label>
              <input
                required
                type='text'
                className='form-input'
                name='homeAddress'
              />
            </div>
          </div>
        </div>
        <div className='mentor-form__section personal-details'>
          <p className='section-heading'>Classes Details</p>
          <div className='group-fields'>
            <div className='field-box'>
              <label className='form-label' htmlFor='classesName'>
                Classes Name:{' '}
              </label>
              <input
                placeholder='Name of your coaching institute'
                required
                type='text'
                className='form-input'
                name='classesName'
              />
            </div>
            <div className='field-box'>
              <label className='form-label' htmlFor='modeOfTeaching'>
                Mode of Teaching{' '}
              </label>
              <input
                placeholder='eg. home tutor, table batch coaching institute etc.'
                required
                type='text'
                className='form-input'
                name='modeOfTeaching'
              />
            </div>{' '}
            <div className='field-box'>
              <label className='form-label' htmlFor='yearOfExperience'>
                Total experience (in Yrs){' '}
              </label>
              <input
                placeholder='teaching experience'
                required
                type='number'
                className='form-input'
                name='yearOfExperience'
              />
            </div>{' '}
            <div className='field-box'>
              <label className='form-label' htmlFor='coachingAddress'>
                Coaching Address{' '}
              </label>
              <input
                required
                type='text'
                className='form-input'
                name='coachingAddress'
              />
            </div>
          </div>
        </div>
        {allClassesDetails.map((item, idx) => {
          return (
            <SubjectFields
              key={idx}
              addMoreClass={addMoreClass}
              removeClass={removeClass}
              index={idx}
              data={item}
              lastSubject={allClassesDetails.length === idx + 1}
            />
          )
        })}
      </div>
      <div className='mentor-form-button-box'>
        <button>Save Changes</button>
        <button>Reset form</button>
      </div>
    </div>
  )
}

export default MentorForm
