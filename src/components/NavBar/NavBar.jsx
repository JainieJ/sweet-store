import React from "react";
import "./NavBar.scss";
import logo from "../../img/logo.svg";

const NavBar = ({ toggleCartDisplay }) => {
  return (
    <nav className="navbar navbar-expand-lg px-4">
      <a className="navbar-brand ml-lg-3" href="/">
        <img src={logo} alt="cake" style={{ width: "50px", height: "50px" }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon mt-3">
          <i className="fas fa-bars" />
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav text-capitalize mx-auto">
          <li className="nav-item active mx-lg-3">
            <a href="#header" className="nav-link">
              home
            </a>
          </li>
          <li className="nav-item mx-lg-3">
            <a href="#about" className="nav-link">
              about
            </a>
          </li>
          <li className="nav-item mx-lg-3">
            <a href="#store" className="nav-link">
              store
            </a>
          </li>
          <li className="nav-item mx-lg-3">
            <a href="#services" className="nav-link">
              services
            </a>
          </li>
          <li className="nav-item mx-lg-3">
            <a href="#order" className="nav-link">
              order
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
