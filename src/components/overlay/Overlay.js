import React, { useContext } from "react";
import classes from "./Overlay.module.css";
import AppContext from "../../context/context-api";
// import Button from "../button/Button";
// import { Link } from "react-router-dom";

export default function Overlay() {
  const ctx = useContext(AppContext);

  const closeOverlayHandler = () => {
    ctx.closeOverlay();
  };
  return (
    <>
      <div className={classes.container} onClick={closeOverlayHandler}></div>
      <div className={classes.card}>
        <div className={classes.cardBody}>
          <div className={classes.cardHeader}>
            <h1>Get the Stecs appp</h1>
            <p> Scan the QR code below to download the app</p>
          </div>
          <div className={classes.cardImageContainer}>
            <div className={classes.iosBarcodeContainer}>
              <p className={classes.iosText}>IOS</p>
              <figure>
                <img className={classes.iosQr} src="./iosqrcode.png" alt="" />
              </figure>
            </div>
            <div className={classes.androidBarcodeContainer}>
              <p className={classes.androidText}>ANDROID</p>
              <figure>
                <img
                  className={classes.androidQr}
                  src="./androidqrcode.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div className={classes.cardText}>
            <span> or get a download link via SMS</span>
          </div>
          <div className={classes.cardForm}>
            <div className={classes.cardLabel}>
              <figure>
                <img className={classes.flag} src="./nigeria-flag.svg" alt="" />
              </figure>
              <span className={classes.labelText}>+234</span>
            </div>
            <input
              type="text"
              className={classes.input}
              placeholder="Mobile number"
            />
          </div>
          <button className={classes.btn}>
            <span className={classes.btnText}>Get link</span>

            <svg
              className={classes.linkArrow}
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="15"
              viewBox="0 0 21 15"
              fill="none"
            >
              <path
                d="M1.5 6.6C1.00294 6.6 0.6 7.00294 0.6 7.5C0.6 7.99706 1.00294 8.4 1.5 8.4L1.5 6.6ZM20.1364 8.13639C20.4879 7.78492 20.4879 7.21507 20.1364 6.8636L14.4088 1.13604C14.0574 0.784566 13.4875 0.784566 13.136 1.13604C12.7846 1.48751 12.7846 2.05736 13.136 2.40883L18.2272 7.5L13.136 12.5912C12.7846 12.9426 12.7846 13.5125 13.136 13.864C13.4875 14.2154 14.0574 14.2154 14.4088 13.864L20.1364 8.13639ZM1.5 8.4L19.5 8.4L19.5 6.6L1.5 6.6L1.5 8.4Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        {/* <div className={classes.bigText}>Get the Stecs app</div>
        <div className={classes.smallText}>
          Scan the QR code to download the app
        </div>

        <div className={classes.barCodeContainer}>
          <div className={classes.qr}>
            <img src="./svg.png" alt="" />
          </div>
          <div className={classes.qr}>
            <img src="./svg.png" alt="" />
          </div>
        </div>

        <div className={classes.smallText}>or get a download link via SMS</div>
        <div className={classes.form}>
          <div className={classes.countryCode}>
            <img src="./flag.png" alt="" />
            <p>+234</p>
          </div>
          <input
            type="text"
            className={classes.form}
            placeholder="Mobile number"
          />
        </div>
        <div className={classes.button}>
          <p>Get link</p>
          <img src="./images/hero/arrow1.png" alt="" />
        </div> */}
        {/* <div className={classes.bigText}>
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
          </div> */}
      </div>
    </>
  );
}
