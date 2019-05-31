import React, { Component } from "react";
import "./About.scss";
import Title from "../../components/utilities/Title";
import Button from "../../components/utilities/Button";

class About extends Component {
  state = {};
  render() {
    return (
      <section id="about" className="py-5 about">
        <div className="container">
          <div className="row">
            {/* info */}
            <div className="col-10 mx-auto col-md-6 my-5">
              <Title text1="about" text2="us" />
              <p className="text-muted w-75 my-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ut
                dolore temporibus, modi doloribus eum earum fugit! Eum,
                doloremque harum!
              </p>
              <Button link="#store" />
            </div>
            {/* image */}
            <div className="col-10 mx-auto col-md-6 my-5 align-self-center">
              <div className="about-image__container">
                <img
                  src="./img/about-picture.jpg"
                  alt="cake"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
