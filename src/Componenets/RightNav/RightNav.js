import React from 'react'
import ContPlaylist from './ContPlaylist'
import Playlist from './Playlist'
import './RightNav.css'

function RightNav() {
  return (
    <div className='rightnav'>Playlist
    <ContPlaylist/>
    <Playlist/>
    </div>
  )
}

export default RightNav