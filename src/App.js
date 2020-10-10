import React, { Component } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  //Enable dispatching an action
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <h1>Is user logged in?: {isLogged ? "Yess" : "No"}</h1>
      <button onClick={() => dispatch(signIn())}>Log In / Sign out</button>
      <h2>App is now available</h2>
    </div>
  )
}

export default App
