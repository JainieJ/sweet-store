import React from "react";
import "./Cart.scss";
import CartItem from "../cartItem/CartItem";

//destructure img, title, price
const Cart = ({
  showCart,
  itemsInCart,
  totalAmount,
  itemCount,
  handleDelete,
  toggleCartDisplay,
  handleClear
}) => {
  return (
    <>
      {showCart ? (
        <div className="cart" id="cart">
          <button className="btn close-btn">
            <i
              className="fas fa-window-close fa-2x"
              onClick={toggleCartDisplay}
            />
          </button>
          {/* cart item */}
          {itemsInCart.map(item => (
            <CartItem key={item.id} item={item} handleDelete={handleDelete} />
          ))}
          {/* cart total */}
          <div className="cart-total-container d-flex justify-content-around text-capitalize mt-5 mx-5">
            <h5>total</h5>
            <h5>
              $ <span className="font-weight-bold"> {totalAmount}</span>
            </h5>
          </div>
          {/* buttons */}
          <div className="cart-button-container mt-3 mx-3 d-flex justify-content-between">
            <button
              className="btn clear-btn text-capitalize"
              onClick={handleClear}
            >
              clear cart
            </button>
            <button className="btn checkout-btn text-capitalize">
              checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="cart-icon-container px-4 mt-lg-2">
          <button className="btn cart-btn pb-3" onClick={toggleCartDisplay}>
            <span className="item-count">{itemCount}</span>
            <i className="fas fa-shopping-cart fa-2x" />
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
