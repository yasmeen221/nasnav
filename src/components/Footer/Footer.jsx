import React from "react";

import classes from "./Footer.module.scss";
import { LuSend } from "react-icons/lu";
import { FooterLinks, SocialLinks } from "../../services/Data";
import { Link } from "react-router-dom";

class Cards extends React.Component {
  render() {
    return (
      <>
        <footer>
          <div className={classes.FooterParent}>
            <div className={`container `}>
              <div className={classes.Footer}>
                <div className={classes.left}>
                  <img src="../../../public/images/logo.png" />
                  <div className={classes.pcontant}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi commodi maiores tenetur mollitia obcaecati impedit
                      vel
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi commodi maiores tenetur mollitia obcaecati impedit
                      vel Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Sequi commodi maiores tenetur mollitia obcaecati
                      impedit vel
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi commodi maiores tenetur mollitia obcaecati impedit
                      vel
                    </p>
                  </div>
                </div>
                <hr color="#3d3d3d" />

                <div className={classes.right}>
                  <div className={classes.top}>
                    <p>Subscribe to our newsletter</p>
                    <div className={classes.form}>
                      <input type="email" placeholder="Enter your mail" />
                      <div className={classes.inputSide}>
                        Subscribe{" "}
                        <span>
                          <LuSend />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={classes.bottom}>
                    <div className={classes.btmleft}>
                      {FooterLinks.map((link, index) => {
                        return (
                          <Link key={index} to={link.slug}>
                            {link.linkName}
                          </Link>
                        );
                      })}
                    </div>
                    <hr color="#3d3d3d" />

                    <div className={classes.btmright}>
                      {SocialLinks.map((link, index) => {
                        return (
                          <Link to={link.link} key={index}>
                            <div className={classes.social}>
                              <img src={link.icon} />
                              <p>{`/${link.link}`}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <hr color="#3d3d3d" />
              <div className={classes.lastFooter}>
                {/* <div> */}
                <p>&copy;2021 yesterday. all rights reserved</p>
                {/* </div> */}
                <div className={classes.imgcon}>
                  <img src="../../../public/images/cash.png" />
                  <img src="../../../public/images/visa.png" />
                  <img src="../../../public/images/mastercard.png" />
                </div>
                {/* <div> */}
                <span>
                  Powered by <h5>nasnav</h5>
                </span>
                {/* </div> */}
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Cards;
