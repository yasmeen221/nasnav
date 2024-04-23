import React from "react";

import * as classes from "./Stars.module.scss";
// import { IoMdStar } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Starts = (props) => {
  return (
    <>
      <div className={classes.StarsContainer}>
        <div className={classes.span}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

          <FaRegStar />
        </div>
        <div className={classes.contnatStars}>
          <small>{props.rating} of 5</small>
          {props.showSpan && <span>{props.count} rating</span>}
        </div>
      </div>
    </>
  );
};

export default Starts;

export const Price = (props) => {
  return (
    <>
      <div className={classes.StarsContainer}>
        <div className={classes.span}>
          <h4>
            999.99<span> LE</span>
          </h4>
        </div>
        <div className={classes.contnatStars}>
          <span className={classes.spanDelete}>999,99LE</span>
          <p className={classes.spanDiscount}>30% off</p>
        </div>
      </div>
    </>
  );
};
