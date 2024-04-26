import React, { Component } from "react";
import * as classes from "./ContantCard.module.scss";
import ImageAdidas from "../ImageAdids/ImageAdidas";
import { ImageAdidasData, ProductInfo } from "../../services/Data";
import Starts, { Price } from "../Stars/Starts";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCard,
  decrementQuantity,
  incrementQuantity,
} from "../../redux/cardSlice";

const ContantCard = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     quantity: 0,
  //   };
  // }

  // decrementQuantity = () => {
  //   if (this.state.quantity > 1) {
  //     this.setState((prevState) => ({
  //       quantity: prevState.quantity - 1,
  //     }));
  //   }
  // };

  // incrementQuantity = () => {
  //   this.setState((prevState) => ({
  //     quantity: prevState.quantity + 1,
  //   }));
  // };

  const quantityCard = useSelector((state) => state.cardReducer.quantity);
  const cartItems = useSelector((state) => state.cardReducer.cartItems);
  const dispatch = useDispatch();
  // const newItem = {
  //   id: cartItems?.length + 1,
  //   quantityCard,
  // };
  // const addItemToCart = () => {
  //   const newItem = {
  //     id: cartItems ? cartItems.length + 1 : 1,
  //     quantity: quantityCard,
  //   };
  //   dispatch(addToCard(newItem));
  // };

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
                onClick={() => dispatch(decrementQuantity())}
              >
                -
              </div>
              <div className={classes.quantity}>{quantityCard}</div>
              <div
                className={classes.circle}
                onClick={() => dispatch(incrementQuantity())}
              >
                +
              </div>
            </div>
          </div>
        </div>

        <button
          className={classes.buttonCard}
          onClick={() => dispatch(addToCard())}
        >
          Add To Cart
        </button>

        <button className={classes.buttonSec}>Pickup From Store</button>
      </div>
    </>
  );
};

export default ContantCard;
