import React from 'react'
import './SubjectField.css'

const SubjectFields = ({
  addMoreClass,
  removeClass,
  index,
  data,
  lastSubject,
}) => {
  return (
    <div className='mentor-form__section subject-details'>
      <div className='group-fields'>
        <div className='field-box'>
          <label className='form-label' htmlFor='subjectName'>
            Subject:{' '}
          </label>
          <input
            required
            type='text'
            className='form-input'
            name='subjectName'
          />
        </div>
        <div className='field-box'>
          <label className='form-label' htmlFor='standard'>
            Class:{' '}
          </label>
          <input required type='text' className='form-input' name='standard' />
        </div>{' '}
        <div className='field-box'>
          <label className='form-label' htmlFor='subjecttFees'>
            Fees (per month):{' '}
          </label>
          <input
            required
            type='number'
            className='form-input'
            name='subjecttFees'
          />
        </div>
        {lastSubject ? (
          <span
            title='Add more subject'
            onClick={addMoreClass}
            className='material-symbols-outlined add-subject-btn'
          >
            add_circle
          </span>
        ) : (
          <span
            title='Remove subject'
            onClick={() => removeClass(index)}
            className='material-symbols-outlined delete-subject'
          >
            delete
          </span>
        )}
      </div>
    </div>
  )
}

export default SubjectFields
