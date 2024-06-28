import React from "react";
import classes from "./styles.module.css";

const ProductCards = ({
  background,
  headingText,
  descriptionText,
  houseicon,
}) => {
  return (
    <div className={classes.container} style={{ backgroundColor: background }}>
      <div className={classes.innerContainer}>
        <div className={classes.subContainer}>
          <div className={classes.imageContainer}>
            <img className={classes.iconImage} src={houseicon} alt="Icon" />
          </div>
          <div className={classes.textContainer}>
            <p className={classes.heading}>{headingText}</p>
          </div>
        </div>
        <p className={classes.description}>{descriptionText}</p>
      </div>
    </div>
  );
};

export default ProductCards;
