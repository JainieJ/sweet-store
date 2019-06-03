import React from "react";
import "./Cart.scss";

//destructure img, title, price
const Cart = () => {
  return (
    <div className="cart" id="cart">
      {/* cart item */}
      <div className="cart-item d-flex justify-content-between text-capitalize my-3">
        <img
          src="./img/storeitems/cake1.jpeg"
          alt="store item"
          className="img-fluid rounded-circle"
          style={{ height: "50px", width: "50px" }}
        />
        <div className="item-text font-weight-bold">
          <p className="mb-0">cart item </p>
          <span>$</span>
          <span className="cart-item-price mb-0">10</span>
        </div>
        <button className="cart-item-remove btn ">
          <i className="fas fa-trash fa-2x" />
        </button>
      </div>
      {/* cart total */}
      <div className="cart-total-container d-flex justify-content-around text-capitalize mt-5 mx-5">
        <h5>total</h5>
        <h5>
          $ <span className="font-weight-bold"> 10</span>
        </h5>
      </div>
      {/* buttons */}
      <div className="cart-button-container mt-3 mx-3 d-flex justify-content-between">
        <button className="btn clear-btn text-capitalize">clear cart</button>
        <button className="btn checkout-btn text-capitalize">checkout</button>
      </div>
    </div>
  );
};

export default Cart;