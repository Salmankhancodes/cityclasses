import React, { useState } from 'react'
import './Navbar.css'
import { signOut } from 'firebase/auth'
import { auth, db } from '../../firebase-setup/firebase'
import { Link } from 'react-router-dom'
import { dummyData } from '../initial-states'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import _ from 'lodash'

const Navbar = () => {
  const [searchData, setSearchData] = useState('')
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
  const queryResults = async () => {
    const res = []
    const keyWords = searchData.trim().split(' ')
    console.log(keyWords)
    const collectionRef = collection(db, 'mentors')
    try {
      const alldata = await getDocs(collectionRef)
      alldata.forEach((dat) => {
        const pDet = dat?.data().personalDetails
        const cDet = dat?.data().classesDetails.allClassesInfo
        if (_.includes(keyWords, pDet.name)) {
          res.push(dat.data())
        }
        cDet.forEach((cls) => {
          if (
            _.includes(keyWords, cls.subjectName) ||
            _.includes(keyWords, cls.class)
          ) {
            res.push(dat.data())
          }
        })
      })
    } catch (error) {
      console.log(error)
    }
    console.log(_.uniq(res))
  }
  const isLoggedIn = auth?.currentUser?.uid
  return (
    <nav className='nav-container'>
      <div className='logo-section'>
        <img
          src='src\\assets\\NEW-city-classes-logo.png'
          alt=''
          srcSet=''
          className='cc-logo'
        />
        <div className='search-bar'>
          <input
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            type='text'
            placeholder='Search by name, subjects...'
          />
          <span
            onClick={queryResults}
            className='material-symbols-outlined search-icon'
          >
            search
          </span>
        </div>
      </div>
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

export default Navbar
