import React from 'react'

function Artist() {
  const arrayArtist = ["a","b","c","d","e","f","g","h","i"];
  return (
    <div className='artist'>
      {/* <div>Artist</div>  */}
      
    {arrayArtist
    .map(p=>{
  return(
    <>
    <div className='oneArt'>{p}</div>
  {/* <span>{p}</span> */}
  </>
    )}
    )}
    </div>
  )
}

export default Artist