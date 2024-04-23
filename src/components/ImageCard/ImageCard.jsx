import React, { Component } from "react";
import * as classes from "./ImageCard.module.scss";
import ContantCard from "../ContantCard/ContantCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { images } from "../../services/Data";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  handleImageClick(index) {
    this.setState({ currentImageIndex: index });
  }

  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    return (
      <>
        <section>
          <div className={`container ${classes.flex}`}>
            <div className={classes.left}>
              <div className={classes.mainImage}>
                <img
                  src={`../../images/${images[this.state.currentImageIndex]}`}
                  className={classes.slide}
                />
                <img
                  src="../../images/bagde.png"
                  alt="Badge"
                  className={classes.badge}
                />
              </div>
              <div className={`${classes.option} ${classes.flex}`}>
                {/* <Carousel responsive={responsive}> */}

                {images.map((image, index) => (
                  <img
                    key={index}
                    src={`../../images/${image}`}
                    onClick={() => this.handleImageClick(index)}
                  />
                ))}

                {/* </Carousel> */}
              </div>
            </div>
            <ContantCard />
          </div>
        </section>
      </>
    );
  }
}

export default ImageCard;
