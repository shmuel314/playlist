import React, { useContext } from 'react'
import ListOfPlaylist from '../Context'


function ContSong() {
  const { playlist, id } = useContext(ListOfPlaylist)
  console.log(playlist);
  console.log(typeof (id));
  const newPlaylist = playlist.filter(p => {
    console.log({ 1: p.id, 2: Number(id) })
    return (
      p.id === Number(id))

  })
  console.log(newPlaylist);
  console.log(newPlaylist[0]);
  // const arrayPlaylist = ["a","b","c","d","e","f","g","h","i","a","b","c","d","e","f","g","h","i"];

  return (
  
     newPlaylist[0]?
        <div>ContSong
      {
    newPlaylist[0].songs.map(p => {
      return (
        <>
          {console.log(p)};
          <div>{p.name}</div>
          <div>{p.link}</div>

        </>
      )
    }
    )
  }
    </div > : <></>

  )

}

export default ContSong