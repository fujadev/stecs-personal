import React, { useLayoutEffect } from "react";
import classes from "./styles.module.css";
import circlechecklist from "../../assets/media/circlechecklist.png";

const Congratulations = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img
          className={classes.backgroundImage}
          src={circlechecklist}
          alt="Congratulations"
        />
      </div>
      <div className={classes.textContainer}>
        <p className={classes.p1}>
          Congratulations and welcome to our community of savvy investors!
          You've successfully signed up with a referral link, and we're thrilled
          to have you on board.
        </p>
        <p>
          Ready to take control of your financial future? Click the link below
          to download the app now
        </p>
      </div>
      <a
        className={classes.submitButton}
        href="https://play.google.com/store/apps/details?id=com.stecsmobile.stecs&hl=en_US"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Android
      </a>
      <a
        className={classes.submitButton}
        href="https://apps.apple.com/ng/app/stecs/id6451484520"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download iOS
      </a>
    </div>
  );
};

export default Congratulations;
