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
  const {selectSong} = useContext(ListOfPlaylist)
 
    const plyrProps = [
    {
      type:"video",
      sources: [
        {
          src: `${selectSong}` ,
          provider: "youtube"
        }
      ]
    },]
    return <Plyr source= {plyrProps[0]}  />
  }
// }
export default CurrentSong
