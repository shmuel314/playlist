import React, { useContext } from 'react'
import ListOfPlaylist from '../Context'

function ContPlaylist() {
  const {playlist,setId} = useContext(ListOfPlaylist)
//  const arrayPlaylist = ["a","b","c","d","e","f","g","h","i"];
  return (
    <div className='conpPlaylist'>
{playlist.map(p=>{
  return(
    <>
    <div id={p.id} onClick={(e)=>{setId(e.target.id)}} className='playlist'>{p.name}</div>
  {/* <span>{p}</span> */}
  </>
    )}
    )}
    </div>
  )
}

export default ContPlaylist