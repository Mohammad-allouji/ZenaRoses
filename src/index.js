import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";

// FireBase WebSDK.
firebase.initializeApp({
  apiKey: "AIzaSyD2TebqJ-K7BB4kFU5V649p8tU9LEIZPks",
  authDomain: "zenarosses-6814b.firebaseapp.com",
  projectId: "zenarosses-6814b",
  storageBucket: "zenarosses-6814b.appspot.com",
  messagingSenderId: "1086623471406",
  appId: "1:1086623471406:web:5ce39490256c784d4d8cbf",
  measurementId: "G-N0FE0XVCGN"
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);