import React from 'react'
import './SubjectField.css'

const SubjectFields = ({
  data,
  idx,
  addClass,
  removeClass,
  handleClassDataChange,
}) => {
  return (
    <div className='mentor-form__section subject-details'>
      <div className='group-fields'>
        <div className='field-box'>
          <label className='form-label' htmlFor={`subjectName${idx}`}>
            Subject:{' '}
          </label>
          <input
            required
            type='text'
            className='form-input'
            name={`subjectName${idx}`}
            value={data.subjectName}
            onChange={(e) => handleClassDataChange(e, 'subjectName', idx)}
          />
        </div>
        <div className='field-box'>
          <label className='form-label' htmlFor={`standard${idx}`}>
            Class:{' '}
          </label>
          <input
            required
            type='text'
            className='form-input'
            name={`standard${idx}`}
            value={data.class}
            onChange={(e) => handleClassDataChange(e, 'class', idx)}
          />
        </div>{' '}
        <div className='field-box'>
          <label className='form-label' htmlFor={`subjectFees${idx}`}>
            Fees (per month):{' '}
          </label>
          <input
            required
            type='number'
            className='form-input'
            name={`subjectFees${idx}`}
            value={data.fees}
            onChange={(e) => handleClassDataChange(e, 'fees', idx)}
          />
        </div>
        <div className='field-box'>
          <label className='form-label' htmlFor={`demoLink${idx}`}>
            Demo video link:{' '}
          </label>
          <input
            required
            type='text'
            className='form-input'
            name={`demoLink${idx}`}
            value={data.demoLink}
            onChange={(e) => handleClassDataChange(e, 'demoLink', idx)}
          />
        </div>
        {idx == 0 ? (
          <span
            title='Add more subject'
            className='material-symbols-outlined add-subject-btn'
            onClick={() => addClass(idx)}
          >
            add_circle
          </span>
        ) : (
          <span
            title='Remove subject'
            onClick={() => removeClass(idx)}
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
