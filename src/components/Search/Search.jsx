import React from "react";
import "./Search.scss";

const Search = ({ value, handleChange, handleSubmit }) => {
  return (
    <form className="my-3">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button
            className="input-group-text search-box"
            onClick={handleSubmit}
          >
            <i className="fas fa-search" />
          </button>
        </div>
        <input
          type="text"
          value={value}
          placeholder="Search.."
          className="form-control"
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Search;
