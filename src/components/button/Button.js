import React from "react";
import classes from "./Button.module.css";
export default function Button({ children, buttonSize, clickHandler }) {
  var style = classes.small;
  if (buttonSize === "big") {
    style = classes.big;
  }

  return (
    <div className={`${classes.button} ${style}`} onClick={clickHandler}>
      {children}
    </div>
  );
}
