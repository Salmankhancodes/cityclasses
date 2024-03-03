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
          <select
            required
            name={`subjectName${idx}`}
            onChange={(e) => handleClassDataChange(e, 'subjectName', idx)}
            className='form-input'
            value={data.subjectName}
          >
            <option value='not-selected'>--Select--</option>
            <option value='all-subjects'>All Subjects</option>
            <option value='english'>English</option>
            <option value='hindi'>Hindi</option>
            <option value='mathematics'>Mathematics</option>
            <option value='social-science'>Social Science</option>
            <option value='science'>Science</option>
            <option value='computers'>Computers</option>
            <option value='physics'>Physics</option>
            <option value='chemistry'>Chemistry</option>
            <option value='biology'>Biology</option>
            <option value='biotechnology'>Biotechnology</option>
            <option value='economics'>Economics</option>
            <option value='accountancy'>Accountancy</option>
            <option value='business-studies'>Business Studies</option>
          </select>
        </div>
        <div className='field-box'>
          <label className='form-label' htmlFor={`standard${idx}`}>
            Class:{' '}
          </label>
          <select
            required
            className='form-input'
            name={`standard${idx}`}
            value={data.grade}
            onChange={(e) => handleClassDataChange(e, 'grade', idx)}
          >
            <option value='not-selected'>--Select--</option>
            <option value='1'>Class 1</option>
            <option value='2'>Class 2</option>
            <option value='3'>Class 3</option>
            <option value='4'>Class 4</option>
            <option value='5'>Class 5</option>
            <option value='6'>Class 6</option>
            <option value='7'>Class 7</option>
            <option value='8'>Class 8</option>
            <option value='9'>Class 9</option>
            <option value='10'>Class 10</option>
            <option value='11'>Class 11</option>
            <option value='12'>Class 12</option>
          </select>
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
