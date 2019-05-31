import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row max-height justify-content-center align-items-center">
        <div className="col-10 mx-auto banner text-center">
          <h1 className="text-capitalize">
            welcome to our <strong className="banner-title">sweet store</strong>
          </h1>
          <a href="#store" className="btn text-uppercase banner-link my-2">
            explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
