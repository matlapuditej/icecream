import React, { Component } from "react";
import Flavors from "./components/flavors";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <Flavors />
      </main>
    );
  }
}

export default App;
