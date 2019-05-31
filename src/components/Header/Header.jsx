import React from "react";
import "./Header.scss";
import Title from "../utilities/Title";
import Button from "../utilities/Button";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row max-height justify-content-center align-items-center">
        <div className="col-10 mx-auto banner text-center">
          <Title text1="welcome to our" text2="sweet store" />
          <Button link="#store" />
        </div>
      </div>
    </div>
  );
};

export default Header;
