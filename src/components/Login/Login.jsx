import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Login/Login.css'
import { connect } from 'react-redux'
import {
  userLoginFailed,
  userLoginSuccess,
  userLogout,
} from '../../store/actions/user-action'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase-setup/firebase'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setLoading(true)
    setError('')
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setLoading(false)
        console.log(user)
      })
      .catch((err) => {
        setError(err.code)
        setLoading(false)
      })
  }
  return (
    <div className='login-container'>
      <div className='login-box'>
        <div className='login-header'>
          <h2 className='login-heading'>Login</h2>
          <span className='login-error-message'>{error}</span>
        </div>
        <div className='login-fields-container'>
          <div className='login-label-input'>
            <label className='login-label-field' htmlFor='email'>
              Email:{' '}
            </label>
            <input
              required
              type='email'
              className='login-input-field'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='login-label-input'>
            <label className='login-label-field' htmlFor='password'>
              Password:{' '}
            </label>
            <input
              required
              type='password'
              className='login-input-field'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='login-button-box'>
            <button
              disabled={loading}
              className={`login-button ${loading ? 'loading' : ''}`}
              onClick={handleLogin}
            >
              {loading ? 'Logging In' : 'Login'}
            </button>
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

export default connect(
  ({ user }) => ({
    user,
  }),
  (dispatch) => ({
    userLoginSuccessDispatch: (opts) => userLoginSuccess(opts),
    userLoginFailedDispatch: (opts) => userLoginFailed(opts),
    userLogoutDispatch: () => userLogout(),
  })
)(Login)
