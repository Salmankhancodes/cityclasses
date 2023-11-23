import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../signup/signup.css'
import { auth, db } from '../../firebase-setup/firebase'
import {
  doc,
  addDoc,
  collection,
  updateDoc,
  deleteDoc,
  getDoc,
  setDoc,
} from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { STUDENT, TEACHER, USERS } from '../../constants'

const Signup = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [selectedRoleOption, setSelectedRoleOption] = useState(STUDENT)
  const [msg, setMsg] = useState('')
  const handleSignup = async () => {
    try {
      setLoading(true)
      setError('')
      setMsg('')
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const userDocRef = doc(db, USERS, user.uid)
      await setDoc(
        userDocRef,
        {
          userName,
          email,
          role: selectedRoleOption,
        },
        { merge: true }
      )
      setUserName('')
      setPassword('')
      setEmail('')
      setSelectedRoleOption(STUDENT)
      setLoading(false)
      setMsg('✔ Account created successfully.')
    } catch (err) {
      setMsg('')
      setError(err.code)
      setLoading(false)
    }
  }

  return (
    <div className='signup-container'>
      <div className='signup-box'>
        <div className='signup-header'>
          <h2 className='signup-heading'>Create Account</h2>
          <span className={`signup-message ${error ? 'error' : 'success'}`}>
            {error || msg}
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
              value='teacher'
              checked={selectedRoleOption === TEACHER}
              className='signup-input-field-radio'
              name='user-role'
              onChange={(e) => setSelectedRoleOption(e.target.value)}
            />
            Teacher
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

export default Signup
