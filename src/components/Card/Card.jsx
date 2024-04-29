import React from "react";
import classes from "./Card.module.scss";

import Starts from "./../Stars/Starts";
class Card extends React.Component {
  render() {
    const {
      price,
      name,
      name2,
      image,
      badgeImage,
      adidasImage,
      from,
      to,
      inDay,
      discount,
      rating,
    } = this.props;
    return (
      <>
        <div className={classes.card}>
          {/* images */}
          <div className={classes.imageContainer}>
            <img src={image} alt={name} className={classes.image} />
            <img src={badgeImage} alt="Badge" className={classes.badge} />
          </div>
          {/* contant card */}
          <div className={classes.content}>
            <p className={classes.description}>{name}</p>
            <p className={classes.description}>{name2}</p>

            {discount > 0 ? (
              <CardDiscount
                price={price}
                discount={discount}
                adidasImage={adidasImage}
              />
            ) : (
              <>
                <CardImage price={price} adidasImage={adidasImage} />
              </>
            )}
            <div className={classes.stars}>
              <Starts rating={rating} showSpan={false} />
            </div>
            {discount > 50 || discount === 0 ? (
              <Footer from={from} to={to} inDay={inDay} />
            ) : (
              <div className={classes.footerCardSec}>
                <p className={classes.p}>
                  pickup From: <span>{from}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Card;

export const CardDiscount = ({ price, discount, adidasImage }) => {
  return (
    <>
      <div className={classes.price}>
        <h4>
          {price}
          <span> LE</span>
        </h4>
      </div>
      <div className={classes.contnatStars}>
        <div className={classes.flex}>
          <span className={classes.spanDelete}>999,99LE</span>
          <div>
            <p className={classes.spanDiscount}>{`${discount}%`}</p>
          </div>{" "}
        </div>
        <div>
          <img src={adidasImage} alt="Adidas" />
        </div>
      </div>
    </>
  );
};
export const CardImage = ({ price, adidasImage }) => {
  return (
    <div className={`${classes.contnatStars} ${classes.imageCard}  `}>
      <div className={classes.price}>
        <h4>
          {price}
          <span> LE</span>
        </h4>
      </div>
      <div>
        <img src={adidasImage} alt="Adidas" />
      </div>
    </div>
  );
};

export const Footer = ({ from, to, inDay }) => {
  return (
    <>
      <div className={classes.footerCard}>
        <p>
          from: <span>{from}</span>
        </p>
        <p>
          to: <span>{to}</span>
        </p>
        <p>
          in: <span>{inDay}</span>
        </p>
      </div>
    </>
  );
};
