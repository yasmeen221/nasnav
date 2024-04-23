import React, { Component } from "react";
import * as classes from "./ContantCard.module.scss";
import ImageAdidas from "../ImageAdids/ImageAdidas";
import { ImageAdidasData, ProductInfo } from "../../services/Data";
import Starts, { Price } from "../Stars/Starts";

class ContantCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  decrementQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
    }
  };

  incrementQuantity = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  };

  render() {
    const { quantity, cartItems } = this.state;

    return (
      <>
        <div className={classes.right}>
          <div className={classes.margin}>
            <ImageAdidas src={ProductInfo.brandImage} />
            <h5>Adidas black t-shirt {ProductInfo.title}</h5>
            <span>Men</span>

            <Starts
              rating={ProductInfo.rating}
              count={ProductInfo.numberRating}
              showSpan={true}
            />
            <Price />
          </div>
          <hr className={classes.margin}></hr>

          <div>
            <h5 className={classes.sectionSize}>Size</h5>

            <div className={classes.circleContainer}>
              {ProductInfo.size.map((size, index) => (
                <div key={index} className={classes.circle}>
                  {size.name}
                </div>
              ))}
            </div>
          </div>
          <hr className={classes.margin}></hr>

          <div>
            <h5 className={classes.sectionSize}>Color</h5>

            <div className={classes.circleContainer}>
              {ProductInfo.color.map((color, index) => (
                <div key={index} className={classes.color}>
                  <img src={color.imgSrc} alt={color.name} />
                </div>
              ))}
            </div>
          </div>
          <hr className={classes.margin}></hr>

          <div>
            <h5 className={classes.sectionSize}>Quantity</h5>

            <div className={classes.quantitySection}>
              <div className={classes.containerCount}>
                <div
                  className={classes.circle}
                  onClick={this.decrementQuantity}
                >
                  -
                </div>
                <div className={classes.quantity}>{quantity}</div>
                <div
                  className={classes.circle}
                  onClick={this.incrementQuantity}
                >
                  +
                </div>
              </div>
            </div>
          </div>

          <button onClick={() => this.props.addToCart(quantity)}>
            Add To Cart
          </button>

          <button className={classes.buttonSec}>Pickup From Store</button>
        </div>
      </>
    );
  }
}

export default ContantCard;
