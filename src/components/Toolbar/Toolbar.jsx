import React, { Component } from "react";
import * as classes from "./Toolbar.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import ToolbarSec from "../ToolbarSec/ToolbarSec";
import ListIcons from "../ListIcons/ListIcons";
import NavLinks from "../NavLinks/NavLinks";

class Toolbar extends Component {
  render() {
    return (
      <>
        <header>
          <div className={classes.Toolbar}>
            <div className="container">
              <div className={classes.content}>
                <div className={classes.imgStyle}>
                  <span>
                    {" "}
                    <RxHamburgerMenu />
                  </span>
                  <img src="../../../public/images/navlogo.png"></img>
                </div>
                <div>
                  <p>
                    <span>
                      {" "}
                      <IoIosArrowBack />
                    </span>
                    Valentien's day offers Buy To Get One Free{" "}
                    <a href="#">shop Now</a>
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </p>
                </div>
                <div className={classes.iconList}>
                  <ListIcons icon={<FiPhoneCall />} name="contact us" />
                  <ListIcons icon={<SlBasket />} name="  Track order" />
                  <ListIcons icon={<SlLocationPin />} name=" find a store" />
                </div>
              </div>
            </div>
          </div>
          <ToolbarSec />

          <NavLinks />
        </header>
      </>
    );
  }
}

export default Toolbar;
