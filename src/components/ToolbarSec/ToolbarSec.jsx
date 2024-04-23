import React, { Component } from "react";
import ImageAdidas from "../ImageAdids/ImageAdidas";
import { ImageAdidasData } from "../../services/Data";
import Search from "../Search/Search";
import ListIcons from "../ListIcons/ListIcons";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import * as classes from "./ToolbarSec.module.scss";
import ModelCom from "../ModelCom/ModelCom";

class ToolbarSec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
    };
  }

  toggleDrawer = () => {
    this.setState((prevState) => ({
      isDrawerOpen: !prevState.isDrawerOpen,
    }));
  };
  render() {
    const quantity = 1;

    const { isDrawerOpen } = this.state;

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
                  quantity={quantity}
                  onClick={this.toggleDrawer}
                />

                {isDrawerOpen && <ModelCom close={this.toggleDrawer} />}

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
  }
}

export default ToolbarSec;
