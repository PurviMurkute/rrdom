import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <Link to='/' className='menu-item'>Home</Link>
        <Link to='/About' className='menu-item'>About</Link>
        <Link to='/Contact' className='menu-item'>Contact</Link>
    </div>
  )
}

export default Navbar