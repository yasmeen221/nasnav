import React from "react";

import classes from "./Cards.module.scss";
import Card from "../Card/Card";
import { DataCards } from "../../services/Data";

class Cards extends React.Component {
  render() {
    return (
      <>
        <div className={`container ${classes.flex}`}>
          <div className={classes.container}>
            <div className={classes.headline}>
              <h3>Similar Products</h3>
              <p>you may like this product also</p>
            </div>
            <div className={classes.cards}>
              {DataCards.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cards;
