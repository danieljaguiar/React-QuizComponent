import React, { Component } from "react";
import "./App.css";
import Quiz from "./Quiz";

class App extends Component {
  render() {
    console.log("App -> render");

    return <Quiz></Quiz>;
  }
}

export default App;
