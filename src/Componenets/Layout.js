import React,{useContext, useEffect, useState} from 'react'
import ListOfPlaylist from "./Context";
import Header from './Header/Header'
import RightNav from './RightNav/RightNav'
import LeftNav from './LeftNav/LeftNav'
import Main from './Main/Main'

function Layout() {
const[selectSong,setSelectSong]=useState()
const[song,setSong]=useState("שירים דוסים");
const[catchSong,setCatchSong]=useState([])
const[arrayPlaylist,setArrayPlaylist]=useState([])
// let array = [
//   {


// }
// ]
// useEffect(()=>{
// const tryplaylist  =[
//   {
//   name:"Shabat",
//   img:"https://www.tzomet-kfs.co.il/wp-content/uploads/2021/10/171965977d51929896b45cce67325049.jpg",
//   id: 0,
//   songs:[{name:"צמאה מקור חיים",link:"https://www.youtube.com/watch?v=wOV6YBnjRNE",id:0}
//   ,{name:"עקיבא ניגון ברדיצ'ב",link:"https://www.youtube.com/watch?v=fzTwJYvalaA",id:1}
//   ,{name:"מזמור שיר ניגון הבעל שם טוב",link:"https://www.youtube.com/watch?v=ibCsl53Gc7s",id:2}
//   ,{name:"ארבע בבות",link:"https://www.youtube.com/watch?v=HDrvxGTtcjE",id:3}]
//   },
//   { 
//   name:"Runing",
//   img:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/Runner-training-on-running-track-1296x728-header-1296x728.jpg?w=1155&h=1528",
//   id: 1,
//   songs:[{name:"a",link:"zxc"},{name:"b",link:"zxc"},{name:"c",link:"zxc"},{name:"d",link:"zxc"}]
// },
//   { 
//     name:"Chill",
//     img:"https://dbdzm869oupei.cloudfront.net/img/sticker/preview/40155.png",
//     id: 2,
//     songs:[{name:"a",link:"bnm"},{name:"b",link:"bnm"},{name:"c",link:"bnm"},{name:"d",link:"bnm"}]
    
//   }
// ]
// console.log(tryplaylist);
  // setplaylist(tryplaylist)

// },[])

// useEffect(()=>{
//   // const fetch = require('node-fetch');
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
// 	.then(json =>setplaylist(json))
// 	// .then(json =>setplaylist(Object.keys(json).map((key) => json[key])))
// 	// .then(json =>setplaylist(json))
// 	.catch(err => console.error('error:' + err));
// },[])

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1a7296580dmshb90f3746d9a0ffap1af01ejsn1bf488efa3df",
    "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
  },
};
useEffect(() => {
  fetch('https://simple-youtube-search.p.rapidapi.com/search?query='+song, options)
  .then(response => response.json())
  .then(response => setCatchSong(response.results))
  .catch(err => console.error(err));
}, [song]);

if(!catchSong){
  return(
    <>loading...</>
  )
}
  return (
    <div className='layout'>Layout
     <ListOfPlaylist.Provider value={ {catchSong,selectSong,setSelectSong,song,setSong,arrayPlaylist,setArrayPlaylist} }>
        <Header/>
        <Main/>
        <LeftNav/>
        <RightNav/>
        </ListOfPlaylist.Provider>
    </div>
  )
}
export default Layout