import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../counter/counterSlice.js";


const initialState = ""

const songSlice = createSlice({
    name: "song", 
    initialState: initialState,
    reducers: {
        selectedSong: (state, action) => action.payload,

    },
    extraReducers: (builder)=>{
       builder.addCase(reset , (state)=> initialState)
    }
})

console.log(songSlice) 

// songSlice = {
//     actions: {}, 
//     reducer: function(){}
// }

export const { selectedSong } = songSlice.actions 

export default songSlice.reducer