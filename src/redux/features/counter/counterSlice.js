import { createSlice } from "@reduxjs/toolkit";


const initialState = {name:"Ramesh", age:20, city:"Bangalore"}

const counterSlice = createSlice({
     name: "counter",
     initialState: initialState, 
     reducers: {
        increase:  (state,action) => {state.age = state.age +  (action.payload || 1)},
         // {...state , age : sate.age + +1}
        decrease:  (state,action) => {state.age = state.age -  1},
        reset:  state => initialState,
     }
})

console.log(counterSlice)

export const {increase,decrease,reset} = counterSlice.actions

// const counterReducer = counterSlice.reducer
export default counterSlice.reducer



// for counter with value 0
// reducers: {
//     increase:  (state, action) => {return state + action.payload},
//     decrease:  (state, action) => state- action.payload,
//     reset:  state => initialState,
// }

