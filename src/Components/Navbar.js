import React from 'react'
import './App.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <input type="search" placeholder='Search....'/>
      <p>Relevance <i className="fa-solid fa-angle-down"></i></p>
      <p>All brands <i className="fa-solid fa-angle-down"></i></p>
    </div>
  )
}

export default Navbar
