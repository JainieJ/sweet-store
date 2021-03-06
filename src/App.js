import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Store from "./pages/Store/Store";
import Services from "./pages/Services/Services";
import Order from "./pages/Order";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <>
      <Home />
      <About />
      <Store />
      <Services />
      <Order />
      <Footer />
    </>
  );
}

export default App;
