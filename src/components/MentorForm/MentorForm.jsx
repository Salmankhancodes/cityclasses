import React, { useEffect, useState } from 'react'
import './MentorForm.css'
import SubjectFields from './SubjectFields'
import { mentorFormFields } from '../initial-states'
import { connect } from 'react-redux'
import {
  mentorFormReset,
  saveMentorForm,
  viewMentorForm,
} from '../../store/actions/mentor-form-action'
import { auth } from '../../firebase-setup/firebase'

const MentorForm = (props) => {
  const {
    saveMentorFormDispatch,
    loading,
    error,
    message,
    getMentorFormDispatch,
    data,
    resetFormDispatch,
  } = props
  const [formData, setFormData] = useState(mentorFormFields)
  const [image, setImage] = useState(null)
  useEffect(() => {
    getMentorFormDispatch()
  }, [])
  useEffect(() => {
    setFormData(data)
  }, [data])
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
    personalDetails: {
      name,
      email,
      dob,
      phone,
      residentialAddress,
      summary,
      coachingName,
      modeOfTeaching,
      coachingAddress,
      YoE,
    },
    classesDetails,
  } = formData
  const handleFormReset = () => {
    const confirmOption = confirm('Do you really want to reset form ?')
    if (confirmOption) {
      resetFormDispatch()
    }
  }

  const handleFormSubmit = () => {
    saveMentorFormDispatch(formData, image)
  }
  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }
  return (
    <div className='mentor-form-container'>
      <div className='mentor-form-main'>
        <span className={`signup-message ${error ? 'error' : 'success'}`}>
          {message}
        </span>
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
                value={auth?.currentUser?.email}
                required
                type='email'
                className='form-input'
                name='email'
                onChange={(e) => handleChange(e, 'personalDetails', 'email')}
                readOnly
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
            <div className='field-box'>
              <label className='form-label' htmlFor='profilePhoto'>
                Profile Photo{' '}
              </label>
              <input
                required
                type='file'
                accept='image/*'
                className='form-input'
                name='profilePhoto'
                onChange={handleImageUpload}
              />
            </div>
            <div className='field-box '>
              <label htmlFor='summary' className='form-label'>
                Summary
              </label>
              <textarea
                className='form-input form-summary'
                name='summary'
                value={summary}
                type='text'
                onChange={(e) => handleChange(e, 'personalDetails', 'summary')}
              ></textarea>
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
                type='text'
                className='form-input'
                name='classesName'
                value={coachingName}
                onChange={(e) =>
                  handleChange(e, 'personalDetails', 'coachingName')
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
                  handleChange(e, 'personalDetails', 'modeOfTeaching')
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
                onChange={(e) => handleChange(e, 'personalDetails', 'YoE')}
              />
            </div>{' '}
            <div className='field-box'>
              <label className='form-label' htmlFor='coachingAddress'>
                Coaching Address{' '}
              </label>
              <input
                type='text'
                className='form-input'
                name='coachingAddress'
                value={coachingAddress}
                onChange={(e) =>
                  handleChange(e, 'personalDetails', 'coachingAddress')
                }
              />
            </div>
          </div>
        </div>
        {classesDetails?.map((eachClass, idx) => {
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
        <button disabled={loading} onClick={handleFormSubmit}>
          {!loading ? 'Save Changes' : 'Saving...'}
        </button>
        <button onClick={handleFormReset}>Reset form</button>
      </div>
    </div>
  )
}

export default connect(
  ({ mentorSaveForm }) => ({
    mentorSaveForm,
    loading: mentorSaveForm?.loading,
    error: mentorSaveForm?.error,
    message: mentorSaveForm?.message,
    data: mentorSaveForm.data,
  }),
  (dispatch) => ({
    saveMentorFormDispatch: (opts, img) => dispatch(saveMentorForm(opts, img)),
    getMentorFormDispatch: () => dispatch(viewMentorForm()),
    resetFormDispatch: () => dispatch(mentorFormReset()),
  })
)(MentorForm)
