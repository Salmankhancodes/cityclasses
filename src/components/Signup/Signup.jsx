import React from 'react'
import { Link } from 'react-router-dom'
import '../signup/signup.css'
import { auth } from '../../firebase-setup/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {s
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
          <div className='signup-label-input signup-radio-box'>
            <label className='signup-label-field' htmlFor='name'>
              Role{' '}
            </label>
            <input
              required
              type='Radio'
              className='signup-input-field-radio'
              name='name'
            />
            Student
            <input
              required
              type='Radio'
              className='signup-input-field-radio'
              name='name'
            />
            Teacher
          </div>
          <div className='signup-button-box'>
            <button onClick={handleSignup} className='signup-button'>
              Sign Up
            </button>
            <p>
              Already have an account?{' '}
              <span>
                <Link className='login-signup-link' to='/login'>
                  Login
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
