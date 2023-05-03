import React from "react";
import classes from './AboutCard.module.css'

export default function AboutCard({title, body, image, color}) {

    return (
      <div
        className={classes.container}
        style={{ background: color}}
      >
        <div className={classes.texts}>
          <p className={classes.big}>{title}</p>
          <p className={classes.small}>{body}</p>
        </div>
        <img src={image} alt="" />
      </div>
    );
}