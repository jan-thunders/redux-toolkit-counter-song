// createStore, applyMiddleware,  combineReducers, thunk
import { configureStore } from "@reduxjs/toolkit";
// reducers
import counterReducer from "../features/counter/counterSlice.js";
import songReducer from "../features/song/songSlice.js";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        song: songReducer
    }
})

export default store