import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, signIn } from "./actions";
import counterSlice from './counterSlice'

console.log(counterSlice.actions.increment());

const newState = counterSlice.reducer(
  {value: 10},
  counterSlice.actions.increment()
)
console.log(newState);

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>Log in or not?: {isLogged ? "Yes" : "No"}</h1>
      <button onClick={() => dispatch(signIn())}>Log In / Sign Out</button>
    </div>
  )
}

export default App
