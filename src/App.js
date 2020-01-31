import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainApp from "./components/MainApp";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div>
        <h3>App Parent</h3>
        <MainApp />
      </div>
    );
  }
}

export default App;
