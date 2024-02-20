import React, { useLayoutEffect } from "react";
import classes from "./index.module.css";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

export default function SheriahCompliance() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const sheriahImage = require("../../sheriahCompliance/sheriahCertificate.jpg");

  return (
    <>
      <Nav />
      <div className={`${classes.sheriahContainer} container-fluid`}>
        <div className={classes.contentWrapper}>
          <div className={classes.textWrapper}>
            <p className={classes.header}>Sheriah Compliance Certificate</p>
          </div>
          <div className={classes.imageContainer}>
            <img
              className={classes.sheriahImage}
              src={sheriahImage}
              alt="Sheriah Compliance Certificate"
            />
          </div>
          <div className={classes.buttonContainer}>
            <Button buttonSize="big">
              <Link
                to="https://chat.whatsapp.com/IsnaShS0KQp444o6VDlNXP"
                className={classes.joinButton}
              >
                <p>Join Stecstars Now</p>
                <img src="./images/hero/arrow1.png" alt="" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
