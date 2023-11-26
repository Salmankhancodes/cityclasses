import React, { useState } from 'react'
import './MentorForm.css'
import SubjectFields from './SubjectFields'
import { mentorFormFields } from '../initial-states'

const MentorForm = () => {
  const [formData, setFormData] = useState(mentorFormFields)

  const handleChange = (event, section, field) => {
    const value = event.target.value
    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }))
  }

  const addClass = () => {
    const newFields = {
      ...formData,
      classesDetails: {
        ...formData.classesDetails,
        allClassesInfo: [
          ...formData.classesDetails.allClassesInfo,
          { subjectName: '', class: '', fees: 0 },
        ],
      },
    }
    setFormData({ ...newFields })
  }

  const handleClassDataChange = (e, fieldName, idx) => {
    const value = e.target.value
    const newFormData = { ...formData }
    newFormData.classesDetails.allClassesInfo[idx][fieldName] = value
    setFormData(newFormData)
  }

  const removeClass = (idx) => {
    const newFormData = { ...formData }
    newFormData.classesDetails.allClassesInfo.splice(idx, 1)
    setFormData({
      ...formData,
      classesDetails: {
        ...formData.classesDetails,
        allClassesInfo: newFormData.classesDetails.allClassesInfo,
      },
    })
  }
  const {
    personalDetails: { name, email, dob, phone, residentialAddress },
    classesDetails: {
      coachingName,
      modeOfTeaching,
      coachingAddress,
      YoE,
      allClassesInfo,
    },
  } = formData
  const handleFormReset = () => {
    const confirmOption = confirm('Do you really want to reset form ?')
    if (confirmOption) {
      setFormData(mentorFormFields)
    }
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
              <input
                required
                value={name}
                type='text'
                className='form-input'
                name='name'
                onChange={(e) => handleChange(e, 'personalDetails', 'name')}
              />
            </div>
            <div className='field-box'>
              <label className='form-label' htmlFor='email'>
                Email:{' '}
              </label>
              <input
                value={email}
                required
                type='email'
                className='form-input'
                name='email'
                onChange={(e) => handleChange(e, 'personalDetails', 'email')}
              />
            </div>{' '}
            <div className='field-box'>
              <label className='form-label' htmlFor='dob'>
                Date of Birth:{' '}
              </label>
              <input
                required
                type='date'
                value={dob}
                className='form-input'
                name='dob'
                onChange={(e) => handleChange(e, 'personalDetails', 'dob')}
              />
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
                value={phone}
                onChange={(e) => handleChange(e, 'personalDetails', 'phone')}
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
                value={residentialAddress}
                onChange={(e) =>
                  handleChange(e, 'personalDetails', 'residentialAddress')
                }
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
                value={coachingName}
                onChange={(e) =>
                  handleChange(e, 'classesDetails', 'coachingName')
                }
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
                value={modeOfTeaching}
                onChange={(e) =>
                  handleChange(e, 'classesDetails', 'modeOfTeaching')
                }
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
                value={YoE}
                onChange={(e) => handleChange(e, 'classesDetails', 'YoE')}
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
                value={coachingAddress}
                onChange={(e) =>
                  handleChange(e, 'classesDetails', 'coachingAddress')
                }
              />
            </div>
          </div>
        </div>
        {allClassesInfo?.map((eachClass, idx) => {
          return (
            <SubjectFields
              key={idx}
              idx={idx}
              data={eachClass}
              addClass={addClass}
              removeClass={removeClass}
              handleClassDataChange={handleClassDataChange}
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
