import React from 'react'
import './Header.css'
import Search from './Search'
import User from './User'

function Header() {
  return (
    <div className='header'>
        YourTube
        <button className='btnMinus'>-</button>
        <button className='btnPlus'>+</button>
        <button className='btnPlay' >⏯</button>
        
    <User/>
    <Search/>
    </div>
  )
}

export default Header