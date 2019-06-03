import React from "react";
import "./Header.scss";
import Title from "../utilities/Title";
import Button from "../utilities/Button";
import Cart from "./../Cart/Cart";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row max-height justify-content-center align-items-center">
        <div className="col-10 mx-auto banner text-center">
          <Title text1="welcome to our" text2="sweet store" />
          <Button link="#store" />
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default Header;
