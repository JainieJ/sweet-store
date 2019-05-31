import React from "react";

const Button = ({ link, styleClass }) => {
  return (
    <a href={link} className={`btn text-uppercase ${styleClass} my-2`}>
      explore
    </a>
  );
};

export default Button;

Button.defaultProps = {
  styleClass: "banner-link"
};
