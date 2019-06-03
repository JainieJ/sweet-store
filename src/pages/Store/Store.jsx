import React, { Component } from "react";
import Title from "../../components/utilities/Title";
import Search from "./../../components/Search/Search";
import { buttonTitle } from "../../data/buttonTitles";
import StoreItems from "../../components/StoreItems/StoreItems";
import { storeItems } from "../../data/storeItems";
import SortButton from "./../../components/utilities/SortButton";
import Cart from "./../../components/Cart/Cart";
import "./Store.scss";

class Store extends Component {
  state = {
    search: "",
    items: storeItems,
    filtered: storeItems,
    showCart: false
  };
  toggleCartDisplay = () => {
    this.setState({ showCart: !this.state.showCart }, () =>
      console.log(this.state.showCart)
    );
  };
  handleSort = ({ target: { name: title } }) => {
    //destruturing of event object
    const { items } = this.state;
    if (title.toLowerCase() === "all") {
      this.setState({ filtered: storeItems });
      return;
    }
    const searchString = title.substring(0, title.length - 1); //the name of the button is "cakes", but for sorting we need singular
    const filtered = items.filter(item =>
      item.title.toLowerCase().startsWith(searchString.toLowerCase())
    );
    this.setState({ filtered });
  };
  handleChange = e => {
    this.setState({ search: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { items, search } = this.state;
    const filtered = items.filter(item =>
      item.title.toLowerCase().startsWith(search.toLowerCase())
    );
    this.setState({ filtered, search: "" });
  };
  render() {
    const { search, items, filtered, showCart } = this.state;
    return (
      <section id="store" className="store py-5">
        {/* cart */}
        <Cart toggleCartDisplay={this.toggleCartDisplay} showCart={showCart} />
        <div className="container">
          {/* title */}
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              <Title text1="our" text2="store" />
            </div>
          </div>
          {/* buttons */}
          <div className="row my-3">
            <div className="col-10 mx-auto text-center d-flex justify-content-around flex-wrap">
              {buttonTitle.map((btn, index) => (
                <SortButton
                  key={index}
                  title={btn.title}
                  handleSort={this.handleSort}
                />
              ))}
            </div>
          </div>
          {/* search */}
          <div className="row my-3">
            <div className="col-10 col-md-6 mx-auto text-center">
              <Search
                value={search}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </div>
          </div>
          {/* store items */}
          <div className="row store-items" id="store-items">
            {filtered.length === 0 ? (
              <div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 text-center">
                <h2>Search returned no result. Please, try again</h2>
              </div>
            ) : (
              filtered.map(item => <StoreItems key={item.id} item={item} />)
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Store;
