import React from "react";
import "./Media.scss";

const Media = () => {
  return (
    <div className="col-md-6 text-center media-column">
      <h2 className="media-title text-capitalize my-5">sweet store</h2>
      <div className="d-flex justify-content-around my-5">
        <button className="media-icon">
          <i className="fab fa-facebook-square fa-3x" />
        </button>
        <button className="media-icon">
          <i className="fab fa-twitter-square fa-3x" />
        </button>
        <button className="media-icon">
          <i className="fab fa-instagram fa-3x" />
        </button>
        <button className="media-icon">
          <i className="fab fa-google-plus-square fa-3x" />
        </button>
      </div>
    </div>
  );
};

export default Media;
