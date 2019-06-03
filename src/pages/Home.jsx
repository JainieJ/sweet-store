import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";

class Home extends Component {
  state = {
    showCart: true
  };
  toggleCartDisplay = () => {
    this.setState({ showCart: !this.state.showCart }, () =>
      console.log(this.state.showCart)
    );
  };
  render() {
    return (
      <header id="header">
        <NavBar toggleCartDisplay={this.toggleCartDisplay} />
        <Header displayCart={this.state.showCart} />
      </header>
    );
  }
}

export default Home;
