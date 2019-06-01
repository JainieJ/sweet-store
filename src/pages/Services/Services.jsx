import React, { Component } from "react";
import ServicesItem from "../../components/ServicesItem/ServicesItem";
import bread from "../../img/bread.svg";
import candy from "../../img/candy.svg";
import cupcake from "../../img/cupcake.svg";
import "./Services.scss";

class Services extends Component {
  state = {
    services: [
      { id: 0, title: "bread", icon: bread },
      { id: 1, title: "candy", icon: candy },
      { id: 2, title: "cupcake", icon: cupcake }
    ]
  };
  render() {
    const { services } = this.state;
    return (
      <section id="services" className="services py-5">
        <div className="container">
          <div className="row">
            {services.map(service => (
              <ServicesItem key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
