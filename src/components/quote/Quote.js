import React from "react";
import classes from "./Quote.module.css";

export default function Quote({ text, name, location }) {
  return (
    <div className={classes.card}>
      <img
        src="./images/sectionFive/colons.png"
        alt=""
        className={classes.img}
      />
      <p className={classes.text}>{text}</p>
      <div className={classes.author}>
        <p className={classes.name}>{name}</p>
        <p className={classes.location}>{location}</p>
      </div>
    </div>
  );
}
