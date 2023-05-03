import React from "react";
import classes from './AboutText.module.css'

export default function AboutText({title, body}) {

    return (
        <div className={classes.container}>
            <p className={classes.title}>{title}</p>
            <p className={classes.body}>{body}</p>
        </div>
    )
}