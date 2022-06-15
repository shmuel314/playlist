import React, { useContext } from 'react'
import ListOfPlaylist from '../Context'

function DropDown() {
    const { arrayPlaylist } = useContext(ListOfPlaylist);
    return (
        <div>
            {console.log(arrayPlaylist)}
            <select name="broken" id="broken">
                {console.log(111111)}

                {arrayPlaylist.map(p => {
                    { console.log(p) }
                    if (arrayPlaylist.lenght!==0) {
                        return (
                            <>
                                <option value="">בחירה</option>
                                <option onClick={(e)=>{AddSongToPlaylist(e)}}value={p.name}>{p.name}</option>
                            </>
                        )
                    }
                    else {
                        return (
                            <>
                            <option value="">בחירה</option>
                            < option value="" > אין פלייליסטים</option>
                            </>
                        )
                    }
                })}
            </select>
        </div >
    )
}

export default DropDown