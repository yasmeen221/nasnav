import React, { Component } from "react";
import ContantCard from "./ContantCard/ContantCard";
import ToolbarSec from "./ToolbarSec/ToolbarSec";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  addToCart = (quantity) => {
    const { cartItems } = this.state;
    const newItem = {
      id: cartItems.length + 1,
      quantity,
    };
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, newItem],
    }));
    console.log(quantity);
    console.log(cartItems);
  };

  render() {
    const { cartItems } = this.state;

    return (
      <div>
        <ContantCard addToCart={this.addToCart} />
        <ToolbarSec cartItems={cartItems} />
      </div>
    );
  }
}

export default ParentComponent;
