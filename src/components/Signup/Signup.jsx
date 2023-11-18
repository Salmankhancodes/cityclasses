import React from 'react'
import '../signup/signup.css'

const Signup = () => {
  return (
    <div className='signup-container'>
      <div className='signup-box'>
        <div className='signup-header'>
          <h2 className='signup-heading'>Sign Up</h2>
          <span className='signup-error-message'>
            Network Issue. Please check your internet connection and try again.
          </span>
        </div>
        <div className='signup-fields-container'>
          <div className='signup-label-input'>
            <label className='signup-label-field' htmlFor='name'>
              Username:{' '}
            </label>
            <input
              required
              type='email'
              className='signup-input-field'
              name='name'
            />
          </div>
          <div className='signup-label-input'>
            <label className='signup-label-field' htmlFor='name'>
              Email:{' '}
            </label>
            <input
              required
              type='email'
              className='signup-input-field'
              name='name'
            />
          </div>
          <div className='signup-label-input'>
            <label className='signup-label-field' htmlFor='name'>
              Password:{' '}
            </label>
            <input
              required
              type='password'
              className='signup-input-field'
              name='name'
            />
          </div>
          <div className='signup-button-box'>
            <button className='signup-button'>Sign Up</button>
            <p>
              Already have an account? <span>Login</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
