import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, signIn } from "./actions";
import counterSlice from "./counterSlice";
import { createSlice } from "@reduxjs/toolkit";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  let test = 10;

  console.log("Start");

  function loginUser(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //truyen vao .then cai o trong resolve: cu the la user
        resolve(email);
      }, 2000);
    });
  }

  function getUserVideos(email) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(["video1", "video2", "video3"]);
      }, 2000);
    });
  }

  function videoDetails(video) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("title of the video");
      }, 2000);
    });
  }

  async function displayUser() {
    try {
      const loggedUser = await loginUser("ed", 1234);
      const videos = await getUserVideos(loggedUser.email);
      const detail = await videoDetails(videos[0]);
      console.log(detail);
    } catch (err) {
      console.log("Error happened");
    }
  }

  displayUser();

  // loginUser('minh', 'deptrai')
  // .then(user => getUserVideos(user.email))
  // .then(videos => videoDetails(videos[0]))
  // .then(title => console.log(title))

  // //async await
  // const yt = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     console.log("getting thing from youtube")
  //     resolve({videos: [1, 2, 3, 4, 5]})
  //   }, 2000)
  // })

  // const fb = new Promise((resolve, reject)=> {
  //   setTimeout(() => {
  //     console.log("getting thing from facebook")
  //     resolve({user: "Minh"})
  //   }, 4000)
  // })

  // Promise.all([yt, fb])
  // .then(result => console.log(result))

  // const user = loginUser('minhdeptrai vailon', 111111, user => {
  //   console.log(user);
  //   getUserVideos(user.userEmail, videos => {
  //     console.log(videos);
  //     videoDetails(videos[0], (title) => {
  //        console.log()
  //     })
  //   });
  // });

  console.log("End");

  return (
    <div className="app">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>Log in or not?: {isLogged ? "Yes" : "No"}</h1>
      <button onClick={() => dispatch(signIn())}>Log In / Sign Out</button>
    </div>
  );
}

export default App;
