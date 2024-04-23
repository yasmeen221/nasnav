import React from "react";
import * as classes from "./ListIcons.module.scss";
import { Link } from "react-router-dom";
import { LiaShoppingBasketSolid } from "react-icons/lia";

const ListIcons = (props) => {
  const isCartIcon = props.icon.type === LiaShoppingBasketSolid;
  return (
    <>
      <ul className={classes.iconList}>
        <li>
          <Link>
            <span className={props.style}>{props.icon} </span>
            {isCartIcon && (
              <span className={classes.badge} onClick={props.onClick}>
                {props.quantity}
              </span>
            )}
            {props.name}
          </Link>
        </li>
        {props.children}
      </ul>
    </>
  );
};

export default ListIcons;
