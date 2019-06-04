import React from "react";
import "./CartItem.scss";

const CartItem = ({
  handleDelete,
  item: { id, img, title, price, quantity }
}) => {
  return (
    <div className="d-flex justify-content-between text-capitalize my-3">
      <img
        src={img}
        alt="store item"
        className="img-fluid rounded-circle"
        style={{ height: "5rem", width: "5rem" }}
      />
      <div className="item-text text-center font-weight-bold mx-3 align-self-center">
        <p className="mb-0">
          {title} <span className="small">x</span> {quantity}
        </p>
        <span>$</span>
        <span className="cart-item-price mb-0">{price}</span>
      </div>
      <button
        className="cart-item-remove btn"
        onClick={() => handleDelete(id, price, quantity)}
      >
        <i className="fas fa-trash fa-2x" />
      </button>
    </div>
  );
};

export default CartItem;
