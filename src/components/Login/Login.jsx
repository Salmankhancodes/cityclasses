import React from 'react'
import { Link } from 'react-router-dom'
import '../Login/Login.css'

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-box'>
        <div className='login-header'>
          <h2 className='login-heading'>Login</h2>
          <span className='login-error-message'>
            Network Issue. Please check your internet connection and try again.
          </span>
        </div>
        <div className='login-fields-container'>
          <div className='login-label-input'>
            <label className='login-label-field' htmlFor='name'>
              Email:{' '}
            </label>
            <input
              required
              type='email'
              className='login-input-field'
              name='name'
            />
          </div>
          <div className='login-label-input'>
            <label className='login-label-field' htmlFor='name'>
              Password:{' '}
            </label>
            <input
              required
              type='password'
              className='login-input-field'
              name='name'
            />
          </div>
          <div className='login-button-box'>
            <button className='login-button'>Login</button>
            <p>
              Don't have an account?{' '}
              <span>
                <Link className='login-signup-link' to='/signup'>
                  Sign up
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
