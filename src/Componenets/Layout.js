import React,{useContext, useState} from 'react'
import ListOfPlaylist from "./Context";

import Header from './Header/Header'
import RightNav from './RightNav/RightNav'
import LeftNav from './LeftNav/LeftNav'
import Main from './Main/Main'

function Layout() {
const[id,setId]=useState()
const playlist  =[
  {
  name:"Shabat",
  img:"https://www.tzomet-kfs.co.il/wp-content/uploads/2021/10/171965977d51929896b45cce67325049.jpg",
  id: 1,
  songs:[{name:"צמאה מקור חיים",link:"https://www.youtube.com/watch?v=wOV6YBnjRNE"}
  ,{name:"עקיבא ניגון ברדיצ'ב",link:"https://www.youtube.com/watch?v=fzTwJYvalaA"}
  ,{name:"מזמור שיר ניגון הבעל שם טוב",link:"https://www.youtube.com/watch?v=ibCsl53Gc7s"}
  ,{name:"ארבע בבות",link:"https://www.youtube.com/watch?v=HDrvxGTtcjE"}]
  },
  { 
  name:"Runing",
  img:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/Runner-training-on-running-track-1296x728-header-1296x728.jpg?w=1155&h=1528",
  id: 2,
  songs:[{name:"a",link:"zxc"},{name:"b",link:"zxc"},{name:"c",link:"zxc"},{name:"d",link:"zxc"}]
},
  { 
    name:"Chill",
    img:"https://dbdzm869oupei.cloudfront.net/img/sticker/preview/40155.png",
    id: 3,
    songs:[{name:"a",link:"bnm"},{name:"b",link:"bnm"},{name:"c",link:"bnm"},{name:"d",link:"bnm"}]
  }
]
console.log(id);
  return (
    <div className='layout'>Layout
     <ListOfPlaylist.Provider value={ {playlist,id,setId} }>
        <Header/>
        <Main/>
        <LeftNav/>
        <RightNav/>
        </ListOfPlaylist.Provider>
    </div>
  )
}

export default Layout