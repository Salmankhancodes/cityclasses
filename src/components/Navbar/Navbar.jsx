import React, { useState } from 'react'
import './Navbar.css'
import { signOut } from 'firebase/auth'
import { auth, db } from '../../firebase-setup/firebase'
import { Link } from 'react-router-dom'
import { dummyData } from '../initial-states'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import _ from 'lodash'
import { connect } from 'react-redux'
import { searchMentorByFilter } from '../../store/actions/mentors-list-action'

const Navbar = (props) => {
  const { searchMentorByFilterDispatch } = props
  const [searchQuery, setSearchQuery] = useState('')
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
  const handleSearch = () => {
    searchMentorByFilterDispatch(searchQuery)
  }

  const isLoggedIn = auth?.currentUser?.uid
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
        {/* <div className='search-bar'>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type='text'
            placeholder='Search by mentor name'
          />
          <span
            onClick={handleSearch}
            className='material-symbols-outlined search-icon'
          >
            search
          </span>
        </div> */}
      </div>
      {/* <button onClick={() => addDummyData()}>Add dummy data</button> */}
      <ul className='nav-menu'>
        {!isLoggedIn ? (
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
