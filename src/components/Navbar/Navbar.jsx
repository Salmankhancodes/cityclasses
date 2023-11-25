import React from 'react'
import './Navbar.css'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase-setup/firebase'

const Navbar = () => {
  const handleSignOut = () => {
    signOut(auth)
  }
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
          <input type='text' placeholder='Search by name, subjects...' />
          <span className='material-symbols-outlined search-icon'>search</span>
        </div>
      </div>
      <span className='material-symbols-outlined filter-icon'>tune</span>
      <button onClick={handleSignOut}>logout</button>
      <div className='filter-container'></div>
    </nav>
  )
}

export default Navbar
