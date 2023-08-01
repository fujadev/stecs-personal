import React, { useContext } from "react";
import classes from './Overlay.module.css'
import AppContext from "../../context/context-api";
import Button from "../button/Button";
import { Link } from "react-router-dom";

export default function Overlay() {

    const ctx = useContext(AppContext);

    const closeOverlayHandler = () => {
        ctx.closeOverlay();
    }
    return (
      <>
        <div className={classes.container} onClick={closeOverlayHandler}></div>
        <div className={classes.card}>
          {/* <div className={classes.bigText}>Get the Stecs app</div>
                <div className={classes.smallText}>
                    Scan the QR code to download the app
                </div>
                <div className={classes.qr}>
                    <img src="./svg.png" alt="" />
                </div>
                <div className={classes.smallText}>
                    or get a download link via SMS
                </div>
                <div className={classes.form}>
                    <div className={classes.countryCode}>
                        <img src="./flag.png" alt="" />
                        <p>+234</p>
                    </div>
                    <input type="text" className={classes.form} placeholder="Mobile number" />
                </div>
                <div className={classes.button}>
                    <p>Get link</p>
                    <img src="./images/hero/arrow1.png" alt="" />
                </div> */}
          <div className={classes.bigText}>
            App is currently in private beta.
          </div>
          <div className={classes.button}>
            <Button buttonSize="big">
              <Link
                to="https://chat.whatsapp.com/IsnaShS0KQp444o6VDlNXP"
                className={classes.buttonText}
              >
                <p>Join Stecstars</p>
                <img src="./images/hero/arrow1.png" alt="" />
              </Link>
            </Button>
          </div>
        </div>
      </>
    );
}