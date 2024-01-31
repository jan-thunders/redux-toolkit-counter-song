
import React from "react"; 
import { useSelector } from "react-redux";

const SongDisplay = () => {
   const song = useSelector((state)=>state.song)

   return(
      <div>
           { song &&  (
               <div>
                   <h3>{song.name}</h3>
                   <p>{song.artist}</p>
                   <p>{song.album}</p>
               </div>
           ) }
      </div>
   )
}

export default SongDisplay