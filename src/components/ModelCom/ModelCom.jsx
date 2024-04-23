import React, { Component } from "react";
import classes from "./ModelCom.module.scss";

class ModelCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleDrawer = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
    console.log("hdhdh");
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div className={`${classes.drawer} ${isOpen ? "open" : "closed"}`}>
        <div className={classes.toggleBtn} onClick={this.props.close}>
          <div className={classes.bar}></div>
          <div className={classes.bar}></div>
          <div className={classes.bar}></div>
        </div>
        <div className={classes.content}>
          {/* Content goes here */}
          <p>contant</p>
        </div>
      </div>
    );
  }
}

export default ModelCom;
