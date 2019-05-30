import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

class Home extends Component {
  state = {};
  render() {
    return (
      <header id="header">
        <NavBar />
        <Header />
      </header>
    );
  }
}

export default Home;
