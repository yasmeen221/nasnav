import React, { useState } from "react";
import classes from "./ModelCom.module.scss";
import { useSelector } from "react-redux";
import { Price } from "../Stars/Starts";
import { DataCardModel } from "../../services/Data";

const ModelCom = (props) => {
  // Define state using useState hook
  const [isOpen, setIsOpen] = useState(false);
  const quantityCard = useSelector((state) => state.cardReducer.quantity);

  // Define toggleDrawer function
  const toggleDrawer = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    console.log("hdhdh");
  };

  return (
    <div className={`${classes.drawer} ${isOpen ? "open" : "closed"}`}>
      <div className={classes.toggleBtn} onClick={props.close}>
        <div className={classes.bar}></div>
        <div className={classes.bar}></div>
        <div className={classes.bar}></div>
      </div>
      <div className={classes.content}>
        <h3>My Cart</h3>
        <p>cart summery</p>
        {/* Content goes here */}
        {DataCardModel.map((data, index) => {
          return (
            <div key={index}>
              <div key={index} className={classes.contantCard}>
                <div>
                  <img src={data.image} />
                </div>
                <div className={classes.info}>
                  <p>{data.title}</p>
                  <p className={classes.quantity}>quantity:{quantityCard}</p>
                  <div className={classes.priceDiv}>
                    <div>
                      <h5>
                        999.99<span> LE</span>
                      </h5>
                    </div>

                    <button className={classes.buttonRem}>remove</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div>
          <h4>Total:19.999 LE</h4>

          <button className={classes.reviewCard}>Review Cart</button>

          <button className={classes.completeCard}>Complete checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ModelCom;
