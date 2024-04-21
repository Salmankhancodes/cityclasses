import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { signOut } from 'firebase/auth'
import { auth, db } from '../../firebase-setup/firebase'
import { Link } from 'react-router-dom'
import { dummyData } from '../initial-states'
import { doc, setDoc } from 'firebase/firestore'
import _ from 'lodash'
import { connect } from 'react-redux'
import { searchMentorByFilter } from '../../store/actions/mentors-list-action'

const Navbar = ({ userExist }) => {
  const [loginState, setLoginState] = useState(false)
  const [showNavMenu, setShowNavMenu] = useState(false)
  useEffect(() => {
    if (userExist) {
      setLoginState(true)
    } else {
      setLoginState(false)
    }
  }, [userExist])
  const handleSignOut = () => {
    signOut(auth)
  }
  const addDummyData = () => {
    dummyData.forEach(async (Userdata, idx) => {
      try {
        const collectionRef = doc(db, 'mentors', `${idx}`)
        await setDoc(collectionRef, Userdata)
        console.log('data saved')
      } catch (error) {
        console.log(error)
      }
    })
  }
  return (
    <nav className='nav-container'>
      <div className='logo-section'>
        <Link to={'/'}>
          <img
            src='src\\assets\\NEW-city-classes-logo.png'
            alt=''
            srcSet=''
            className='cc-logo'
          />
        </Link>
        <span className='nav-toggle-btn'>
          {!showNavMenu ? (
            <span
              className='material-symbols-outlined'
              onClick={() => setShowNavMenu(!showNavMenu)}
            >
              menu
            </span>
          ) : (
            <span
              className='material-symbols-outlined'
              onClick={() => setShowNavMenu(!showNavMenu)}
            >
              close
            </span>
          )}
        </span>
      </div>
      {/* <button onClick={() => addDummyData()}>Add dummy data</button> */}
      <ul className={`nav-menu ${showNavMenu ? '' : 'hide-menu'}`}>
        {!loginState ? (
          <>
            <Link to='/signup' className='nav-link'>
              <li>Signup</li>
            </Link>
            <Link className='nav-link' to='/login'>
              <li>Login</li>
            </Link>
          </>
        ) : (
          <>
            <Link to='/mentor-form' className='nav-link'>
              <li>Mentor Profile</li>
            </Link>
            <li onClick={handleSignOut}>Logout</li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default connect(
  () => ({}),
  (dispatch) => ({
    searchMentorByFilterDispatch: (opts) =>
      dispatch(searchMentorByFilter(opts)),
  })
)(Navbar)
