import React, { Component } from "react";
import Title from "../../components/utilities/Title";
import Button from "../../components/utilities/Button";
import Search from "./../../components/Search/Search";
import { buttonTitle } from "../../data/buttonTitles";
import "./Store.scss";

class Store extends Component {
  state = {
    search: ""
  };
  handleChange = e => {
    this.setState({ search: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };
  render() {
    return (
      <section id="store" className="store py-5">
        <div className="container">
          {/* title */}
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              <Title text1="our" text2="store" />
            </div>
          </div>
          {/* buttons */}
          <div className="row my-3">
            <div className="col-10 mx-auto text-center d-flex justify-content-around flex-wrap">
              {buttonTitle.map((btn, index) => (
                <Button key={index} title={btn.title} />
              ))}
            </div>
          </div>
          {/* search */}
          <div className="row my-3">
            <div className="col-10 col-md-6 mx-auto text-center">
              <Search
                value={this.state.search}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Store;
