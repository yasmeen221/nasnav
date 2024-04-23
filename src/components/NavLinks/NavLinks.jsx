import React from "react";
import { NavLinksData } from "../../services/Data";
import { Link } from "react-router-dom";
import * as classes from "./NavLinks.module.scss";

const NavLinks = () => {
  return (
    <>
      <header>
        <div className={classes.NavLinksContainer}>
          <div className="container">
            <div className={classes.NavLinks}>
              {NavLinksData.map((link, index) => (
                <Link key={index} to={link.slug} className={classes.NavLink}>
                  {link.linkName}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className={classes.NavLinksTwo}>
          <Link>Men</Link>
          <Link>/Clothing</Link>
          <Link>/Tops</Link>
          <Link>/Adidas</Link>
          <Link>/Adidas Black T-shirt</Link>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default NavLinks;
