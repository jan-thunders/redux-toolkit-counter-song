import React from "react";

import songsData from "../data/songData"; 
import { useDispatch } from "react-redux";
import { selectedSong } from "../redux/features/song/songSlice";


const SongList = () => {

    const dispatch = useDispatch();


    return(
        <div>
            <h1> Song List</h1>
            <ul>
                {
                    songsData.map((song)=>(
                        <li 
                            onClick={()=>dispatch(selectedSong(song))}
                        key={song.id}>
                            <h3>{song.name}</h3>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SongList