import React, { Component } from "react";
import Media from "../../components/Media/Media";
import Contact from "../../components/Contact/Contact";

class Footer extends Component {
  state = {};
  render() {
    return (
      <section id="footer" className="footer pt-5">
        <div className="container-fluid">
          <div className="row" style={{ minHeight: "50vh" }}>
            <Media />
            <Contact />
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
