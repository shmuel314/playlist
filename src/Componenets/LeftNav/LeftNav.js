import React from 'react'
import Artist from './Artist'
import CurrentSong from './CurrentSong'
import './LeftNav.css'

function LeftNav() {
  return (
    <div className='leftnav'>Artist 
    <Artist/>
    <CurrentSong/>
    </div>
  )
}

export default LeftNav