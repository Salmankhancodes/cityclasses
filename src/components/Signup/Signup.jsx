import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../signup/signup.css'
import { MENTOR, STUDENT } from '../../constants'
import { userSignup } from '../../store/actions/user-sign-up-action'
import { connect } from 'react-redux'

const Signup = (props) => {
  const { loading, error, userSignUpDispatch, message } = props
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedRoleOption, setSelectedRoleOption] = useState(STUDENT)
  const handleSignup = async () => {
    userSignUpDispatch({ userName, email, password, selectedRoleOption })
  }

  return (
    <div className='signup-container'>
      <div className='signup-box'>
        <div className='signup-header'>
          <h2 className='signup-heading'>Create Account</h2>
          <span className={`signup-message ${error ? 'error' : 'success'}`}>
            {message}
          </span>
        </div>
        <div className='signup-fields-container'>
          <div className='signup-label-input'>
            <label className='signup-label-field' htmlFor='username'>
              Username:{' '}
            </label>
            <input
              required
              type='text'
              className='signup-input-field'
              name='username'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className='signup-label-input'>
            <label className='signup-label-field' htmlFor='email'>
              Email:{' '}
            </label>
            <input
              required
              type='email'
              className='signup-input-field'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='signup-label-input'>
            <label className='signup-label-field' htmlFor='password'>
              Password:{' '}
            </label>
            <input
              required
              type='password'
              className='signup-input-field'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='signup-label-input signup-radio-box'>
            <label className='signup-label-field' htmlFor='user-role'>
              Role{' '}
            </label>
            <input
              required
              type='Radio'
              value='student'
              checked={selectedRoleOption === STUDENT}
              className='signup-input-field-radio'
              name='user-role'
              onChange={(e) => setSelectedRoleOption(e.target.value)}
            />
            Student
            <input
              required
              type='Radio'
              value='mentor'
              checked={selectedRoleOption === MENTOR}
              className='signup-input-field-radio'
              name='user-role'
              onChange={(e) => setSelectedRoleOption(e.target.value)}
            />
            Mentor
          </div>
          <div className='signup-button-box'>
            <button
              disabled={loading}
              className={`signup-button ${loading ? 'loading' : ''}`}
              onClick={handleSignup}
            >
              {loading ? 'Signing...' : 'Sign Up'}
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

export default connect(
  ({ signUpReducer }) => ({
    loading: signUpReducer.loading,
    error: signUpReducer.error,
    message: signUpReducer.signUpMessage,
  }),
  (dispatch) => ({
    userSignUpDispatch: (opts) => dispatch(userSignup(opts)),
  })
)(Signup)
