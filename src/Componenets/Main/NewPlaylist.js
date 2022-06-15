import React from 'react'

function NewPlaylist(props) {
    // const{arrayPlaylist,setArrayPlaylist} = useContext(ListOfPlaylist)
  return (
    <div  className='popupBox'>
        <div className='box'>
            <input onChange={(e)=>{props.setinpVal(e.target.value)}} type = "text"/>
            <button onClick={props.AddAndClose} className='btn-add'>Add</button>
        </div>
    </div>
  )
}

export default NewPlaylist