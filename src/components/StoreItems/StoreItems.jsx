import React from "react";
import "./StoreItems.scss";

const StoreItems = ({ addToCart, item, item: { img, title, price } }) => {
  return (
    <div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item">
      <div className="card single-item">
        <div className="img-container">
          <img src={img} alt="cake" className="card-img-top store-img" />
          <button
            className="store-item-icon btn rounded-0"
            onClick={() => addToCart(item)}
          >
            <i className="fas fa-shopping-cart" />
          </button>
        </div>
        <div className="card-body">
          <div className="card-text d-flex justify-content-between text-capitalize">
            <h5>{title}</h5>
            <h5>
              $ <strong>{price}</strong>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreItems;
