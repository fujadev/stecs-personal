import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../button/Button";
import classes from './Nav.module.css'
import AppContext from "../../context/context-api";

export default function Nav() {

    const ctx = useContext(AppContext);
    const isPhone = ctx.isPhone;
    const [showNav, setShowNav] = useState(false);
    const showOverlay = ctx.showOverlay;

    const buttonClickHandler = () => {
      setShowNav(false);
      showOverlay();
    };

    return (
      <>
        <div className={`${classes.nav} container-fluid main d-flex`}>
          <div className={classes.logo}>
            <img src="./stecs_logo.png" alt="" />
          </div>
          {!isPhone && (
            <div className={`${classes.links}`}>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to="/"
              >
                Home
              </NavLink>
              {/* <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to="/"
              >
                Product
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to="/"
              >
                Learn
              </NavLink> */}
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to="/about-us"
              >
                About Us
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to="/community"
              >
                Community
              </NavLink>
            </div>
          )}
          {!isPhone && <Button buttonSize="small" clickHandler={buttonClickHandler}>Get Started</Button>}

          {isPhone && (
            <div
              className={`${classes.hamburger} ${
                showNav ? classes.active : ""
              }`}
              onClick={() => setShowNav((prev) => !prev)}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
        {isPhone && showNav && (  
          <div className={`${classes.dropdown}`}>
            <Link to="/">Home</Link>
            {/* <Link to="/">Product</Link>
            <Link to="/">Learn</Link> */}
            <Link to="/about-us">About Us</Link>
            <Link to="/community">Community</Link>
            <div className={classes.btn} onClick={buttonClickHandler}>
              <p>Get Started</p>
            </div>
          </div>
        )}
      </>
    );
}
