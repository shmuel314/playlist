import React, { useContext, useState } from 'react'
import ListOfPlaylist from '../Context'
import NewPlaylist from './NewPlaylist';


function ContSong() {
  const[showPop,setShowPop]=useState(false)
  const[inpVal,setinpVal]=useState(false)
  const{catchSong,arrayPlaylist,setArrayPlaylist} = useContext(ListOfPlaylist)
// console.log(inpVal);
  function AddPlaylist() {
    // alert("sucsses");
    setShowPop(!showPop)
  }
  
  function AddAndClose(){
    setShowPop(!showPop)
    let addItem = { amount: 0, name:inpVal,songs:{}}

setArrayPlaylist([...arrayPlaylist,addItem])
  }

  function Remove(e){
    setArrayPlaylist(arrayPlaylist.filter((p)=>{
return(

  p.name!==e.target.id
)
    })
  )}
  console.log(arrayPlaylist);
  console.log(catchSong);
  // const newPlaylist = Object.values(playlist).filter(p => {
    // console.log({ 1: p.id, 2: Number(idPlaylist) })
    //   return (
      //     p.id === Number(idPlaylist))
      
      // })
      // console.log(newPlaylist);
      // console.log(newPlaylist[0]);
      // const arrayPlaylist = ["a","b","c","d","e","f","g","h","i","a","b","c","d","e","f","g","h","i"];
      
      return (
        // arrayPlaylist ?
        <div className='contSong'>
          {
            arrayPlaylist?
            arrayPlaylist.map(p=>{
              return(
                <div className='addPlaylist'>{p.name}
                <button id={p.name} onClick={(e)=>{Remove(e)}}>הסר פלייליסט</button>
                </div>
              )
            })
            :<></>
          }
        <div className='addPlaylist' onClick={AddPlaylist}>+<br/>Add playlist</div>
        {/* {
          playlist.map(p => {
            return (
              
              <div id={p.id}onClick={(e)=>{setIdPlaylist(p.url)}} className='song'>
              <div><img src={p.channel.icon}/></div>
              <div className="title">{p.title}</div>
              
              </div>
              
              )
            }
            )
          } */}
        {showPop?<NewPlaylist inpVal = {inpVal} setinpVal={setinpVal} AddAndClose = {AddAndClose}/>:<></>}
      </div >

  )

}

export default ContSong