import React from "react";
import "./OrderItem.scss";
import Button from "./../utilities/Button";

const OrderItem = ({ cake: { title, price, img } }) => {
  return (
    <div className="col-sm-6 col-md-4 mx-auto my-3 text-center text-capitalize text-muted">
      <h3 className="my-3 text-dark">{`${title} cake`}</h3>
      <h5 className="my-3">custom ingredients</h5>
      <h5 className="my-3">custom size</h5>
      <h5 className="my-3">custom design</h5>
      <Button title="order now" styleClass="order-link" />
      <h5 className="my-3 text-lowercase">{`starting at $${price}`}</h5>
      <img src={img} alt="cake" className="order-img" />
    </div>
  );
};

export default OrderItem;
