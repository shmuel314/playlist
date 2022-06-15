import React, { useContext, useState } from 'react'
import ListOfPlaylist from '../Context'
import DropDown from './DropDown'

function ContPlaylist() {
const[isTrue,setIsTrue]=useState()
  function SelectPlaylist(){
    setIsTrue(!isTrue)
  }
  // const play= (e)=>{
  //   setplaylist([e.target.id])
  //   console.log(playlist);
  // const fetch = require('node-fetch');

// const url = 'https://simple-youtube-search.p.rapidapi.com/search?query=never%2Bgonna%2Bgive%2Byou%2Bup&safesearch=false';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '76e437837fmshb59163869a9285dp153ab6jsn75e4aec3938f',
//     'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
//   }
// };

// fetch(url, options)
// 	.then(res => res.json())
// 	.then(json => console.log(json))
// 	.catch(err => console.error('error:' + err));
  
  const {catchSong,setSelectSong} = useContext(ListOfPlaylist)
  return (
    <div className='conpPlaylist'>
    
{catchSong.map((p)=>{
  return(
    <>
   
    <div id={p.id} onClick={(e)=>{setSelectSong(p.url)}} className='playlist'>{p.title}
    <button onClick={SelectPlaylist}>Add To Playlist</button>
    {isTrue?<DropDown/>:<></>}
    </div>
  </>
)}
    )}
    </div>
  )
}

//   <div className="songL">
//     {playlist[0].map((v) => (
//      <div> <div className="song" id={v.id} > 
//       <img className="imgSong" id={v.id} src={v.thumbnail.url} alt="040"/>
//     <div className="songName"> <b > {v.title}</b> </div>
//     </div>
//     {/* <button className="like" id={[v.id, v.thumbnail.url, v.title]} onClick={play}> {input}</button> */}
//     </div> 
      
//     ))}
//   </div>
// );
// }

export default ContPlaylist