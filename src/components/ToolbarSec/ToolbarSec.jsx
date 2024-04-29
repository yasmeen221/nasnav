import React, { Component, useState } from "react";
import ImageAdidas from "../ImageAdids/ImageAdidas";
import { ImageAdidasData } from "../../services/Data";
import Search from "../Search/Search";
import ListIcons from "../ListIcons/ListIcons";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import * as classes from "./ToolbarSec.module.scss";
import ModelCom from "../ModelCom/ModelCom";
import { useSelector } from "react-redux";

const ToolbarSec = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const quantityCard = useSelector((state) => state.cardReducer.quantity);
  const items = useSelector((state) => state.cardReducer.cardItems);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <>
      <header>
        <div className="container space">
          <div className={classes.ToolbarSec}>
            <div>
              <Search />
            </div>
            <div>
              <ImageAdidas src={ImageAdidasData.src} />
            </div>
            <div className={classes.iconList}>
              <ListIcons
                style={classes.iconStyle}
                icon={<LiaShoppingBasketSolid />}
                name="Cart"
                quantity={items.length}
                onClick={toggleDrawer}
              />

              {isDrawerOpen && <ModelCom close={toggleDrawer} />}

              <ListIcons
                style={classes.iconStyle}
                icon={<FaRegHeart />}
                name=" WitchList"
              />

              <ListIcons
                style={classes.iconStyle}
                icon={<IoPersonOutline />}
                name="Login"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default ToolbarSec;
