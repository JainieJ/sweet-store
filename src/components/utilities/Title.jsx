import React from "react";

const Title = ({ text1, text2, styleClass }) => {
  return (
    <h1 className="text-capitalize">
      {text1} <strong className={styleClass}>{text2}</strong>
    </h1>
  );
};

export default Title;

Title.defaultProps = {
  styleClass: "banner-title"
};
