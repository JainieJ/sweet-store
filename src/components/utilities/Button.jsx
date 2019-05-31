import React from "react";

const Button = ({ link, styleClass, title }) => {
  return (
    <a href={link} className={`btn text-uppercase ${styleClass} my-2`}>
      {title}
    </a>
  );
};

export default Button;

Button.defaultProps = {
  styleClass: "banner-link",
  title: "explore",
  link: "#"
};
