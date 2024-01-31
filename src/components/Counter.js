import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease,reset } from "../redux/features/counter/counterSlice"; 

const Counter = () => {
    const count = useSelector(state => state.counter.age)
    const dispatch = useDispatch()


    return(
        <div>
              <h1> Counter App</h1>
                <h2>{count}</h2>
                <button onClick={()=>dispatch(increase())}> Increse </button>
                <button onClick={()=>dispatch(decrease())}> Decrese </button>
                <button onClick={()=>dispatch(reset())}> Reset </button>
        </div>
    )
}

export default Counter