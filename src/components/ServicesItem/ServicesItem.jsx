import React from "react";
import "./ServicesItem.scss";
const ServicesItem = ({ service: { icon, title } }) => {
  return (
    <div className="col-md-4 text-center my-3">
      <img src={icon} style={{ width: "5rem", height: "5rem" }} alt={title} />
      <h4 className="text-uppercase my-3 service-title">{title}</h4>
      <p className="w-75 mx-auto text-left service-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
        tenetur quibusdam maiores consequuntur in qui, nemo esse voluptatem quis
        deleniti?
      </p>
    </div>
  );
};

export default ServicesItem;
