import React, { useContext } from "react";
import classes from "./TryNow.module.css";
import Button from "../button/Button";
import AppContext from "../../context/context-api";

export default function TryNow() {
  const ctx = useContext(AppContext);
  const showOverlay = ctx.showOverlay;
  const buttonClickHandler = () => {
    showOverlay();
  };

  return (
    <div
      className={`${classes.sectionSeven} container-fluid ${classes.bigDiv}`}
    >
      <div className={classes.texts}>
        <p className={classes.big}>Take control of your finances today</p>
        <p className={classes.small}>
          Manage all your finances in an ethical manner and in just one app with
          no interest. Instantly create your account.
        </p>
      </div>

      <Button buttonSize="big" clickHandler={buttonClickHandler}>
        <div className={classes.buttonText}>
          <p>Try Stecs Now</p>
          <img src="./images/hero/arrow1.png" alt="" />
        </div>
      </Button>
    </div>
  );
}
