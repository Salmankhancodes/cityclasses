import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
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
      <div className='filter-container'></div>
    </nav>
  )
}

export default Navbar
