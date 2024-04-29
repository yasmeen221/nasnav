import React, { useState } from "react";
import classes from "./ModelCom.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Price } from "../Stars/Starts";
import { DataCardModel } from "../../services/Data";
import { removeFromCart } from "../../redux/cardSlice";

const ModelCom = (props) => {
  // Define state using useState hook
  const [isOpen, setIsOpen] = useState(false);
  const quantityCard = useSelector((state) => state.cardReducer.quantity);
  const items = useSelector((state) => state.cardReducer.cardItems);

  // Define toggleDrawer function
  const toggleDrawer = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    console.log("hdhdh");
  };

  const dispatch = useDispatch();
  const product = {
    image: "../images/img1.png",
    price: "9.999",
    title:
      "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,ad.",
    totalPrice: "19.999",
  };
  const handleAddToCart = () => {
    dispatch(removeFromCart({ product, quantity: 1 }));
    console.log("dhdh");
  };

  return (
    <div className={`${classes.drawer} ${isOpen ? "open" : "closed"}`}>
      <div className={classes.toggleBtn} onClick={props.close}>
        <div className={classes.bar}></div>
        <div className={classes.bar}></div>
        <div className={classes.bar}></div>
      </div>
      <div className={classes.content}>
        <h3 className={classes.h3}>My Cart</h3>
        <p className={classes.head}>cart summery</p>
        {/* Content goes here */}
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className={classes.scroll}>
            {items.map((data, index) => {
              return (
                <div key={index}>
                  <div key={index} className={classes.contantCard}>
                    <div>
                      <img src={data.image} />
                    </div>
                    <div className={classes.info}>
                      <p className={classes.textCard}>{data.title}</p>
                      <p className={classes.quantity}>quantity:1</p>
                      <div className={classes.priceDiv}>
                        <div>
                          <h5>
                            999.99<span> LE</span>
                          </h5>
                        </div>

                        <button
                          className={classes.buttonRem}
                          onClick={handleAddToCart}
                        >
                          remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div>
              <h4>Total:19.999 LE</h4>

              <button className={classes.reviewCard}>Review Cart</button>

              <button className={classes.completeCard}>
                Complete checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelCom;
