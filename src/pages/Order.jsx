import React, { Component } from "react";
import OrderItem from "../components/OrderItem/OrderItem";
import Title from "./../components/utilities/Title";

class Order extends Component {
  state = {
    cakes: [
      {
        id: 0,
        title: "birthday",
        price: 5,
        img: "./img/orderitems/birthday.png"
      },
      {
        id: 1,
        title: "custom",
        price: 10,
        img: "./img/orderitems/custom.png"
      },
      {
        id: 2,
        title: "wedding",
        price: 15,
        img: "./img/orderitems/wedding.png"
      }
    ]
  };
  render() {
    return (
      <section id="order" className="order py-5">
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto text-center my-3">
              <Title text1="order" text2="cakes" />
            </div>
          </div>
          <div className="row">
            {this.state.cakes.map(cake => (
              <OrderItem key={cake.id} cake={cake} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Order;
