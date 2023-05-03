import React from "react";
import classes from './FooterColumn.module.css'
import { Link } from "react-router-dom";

export default function FooterColumn(props) {
    
    const list = props.list;
    const showList = list.map(item => <Link to={item.link} key={item.name} className={classes.listItem}>{item.name}</Link>)
    return (
        <div className={classes.body}>
            <div className={classes.title}>
                {props.title}
            </div>
            <div className={classes.list}>
                {showList}
            </div>
        </div>
    )
}