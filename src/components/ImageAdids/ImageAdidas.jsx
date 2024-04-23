import React from "react";
import * as classes from "./ImageAdidas.module.scss";
const ImageAdidas = (props) => (
  // <div className={classes.Image} style={{ height: props.height }}>
  <img className={props.style} src={props.src} alt={props.name} />
  // </div>
);

export default ImageAdidas;
