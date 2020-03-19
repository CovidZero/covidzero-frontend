import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleIncrement, handleDecrement } from "./actions";

const TestReducer = () => {

  const dispatch = useDispatch();

  const { counter } = useSelector(state => state.testReducer);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(handleDecrement())}>Decrement</button>
      <button onClick={() => dispatch(handleIncrement())}>Increment</button>
    </div>
  )
}

export default TestReducer;