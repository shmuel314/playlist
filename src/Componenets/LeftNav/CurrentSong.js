import React, { useContext } from 'react'
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import ListOfPlaylist from '../Context'

// const plyrProps = [{
//   id:1,
//   type:"video",
//   sources: [
//     {
//       src: "https://www.youtube.com/watch?v=wOV6YBnjRNE",
//       provider: "youtube"
//     }
//   ]
// },
// {
//   type:"video",
//   sources: [
//     {
//       src: "https://www.youtube.com/watch?v=fzTwJYvalaA",
//       provider: "youtube"
//     }
//   ]
// },]


function CurrentSong() {
  const { playlist, id } = useContext(ListOfPlaylist)
  console.log(id);
  if(id){

    const plyrProps = [{
      id:1,
      type:"video",
      sources: [
        {
          src:`${playlist[0].songs[id].link}` ,
          provider: "youtube"
        }
      ]
    },
    {
      
      type:"video",
      sources: [
        {
          src: `${playlist[0].songs[1].link}` ,
          provider: "youtube"
        }
      ]
    },]
    
    
    console.log(playlist[0].songs[0].link);
    return <Plyr source= {plyrProps[0]}  />
  }
}
export default CurrentSong
