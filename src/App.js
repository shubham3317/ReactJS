import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/landingpage";
//Simple CRUD Example
class App extends Component {
  render() {
    return (
      <div>
        <h3>App Parent</h3>
        <LandingPage />
      </div>
    );
  }
}

export default App;
