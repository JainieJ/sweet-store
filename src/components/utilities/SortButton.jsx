import React from "react";

const SortButton = ({ styleClass, title, handleSort }) => {
  return (
    <button
      onClick={handleSort}
      name={title}
      className={`btn text-uppercase ${styleClass} my-2`}
    >
      {title}
    </button>
  );
};

export default SortButton;

SortButton.defaultProps = {
  styleClass: "banner-link"
};
