import React, { useContext, useState } from 'react'
import ListOfPlaylist from '../Context'
import"./Header.css"

function Search() {
  const {setSong,song} = useContext(ListOfPlaylist)
  const[inpVal,setinpVal] = useState("")
  return (

    <div className='search'>
      <input type = "text" onChange={(e)=>{setinpVal(e.target.value)}} className='inpSearch'/>
      <button onClick={()=>{setSong(inpVal)}} className='btnSearch'>🔍</button>
    </div>
  )
}

export default Search