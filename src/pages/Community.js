import React from "react";
import classes from './Community.module.css';
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Button from "../components/button/Button";

export default function Community() {
    return (
      <>
        <Nav />
        <div className={`${classes.container} container-fluid`}>
          <div className={classes.image}>
            <img
              src="./images/community/p2.png"
              alt=""
              className={classes.img2}
            />
            <img
              src="./images/community/p1.png"
              alt=""
              className={classes.img1}
            />
            <img
              src="./images/community/p5.png"
              alt=""
              className={classes.img5}
            />
            <img
              src="./images/community/p4.png"
              alt=""
              className={classes.img4}
            />
            <img
              src="./images/community/p3.png"
              alt=""
              className={classes.img3}
            />
          </div>
          <div className={classes.texts}>
            <p className={classes.header}>
              Your community of ethical wealth builders
            </p>
            <p className={classes.body}>
              Are you confused about how to start investing and building wealth
              the ethical way? Do you need first-hand information about safe and
              affordable local and foreign ethical investments? Look no further.
              Stecstars is the right place to be. 
            </p>
            <p className={classes.body}>
              Stecstars has been created to bring together individuals who are
              looking for investment opportunities that align with their faith
              and ethical values, while also providing a safe space for them to
              interact with each other and learn from our in-house financial
              experts.
            </p>
            <p className={classes.body}>
              It doesn’t matter whether you are; a seasoned investor or you are
              just starting out. The community is tailored just for you.
            </p>
            <p className={classes.body}>
              Share your experiences, ask questions, and engage in discussions
              related to ethical saving & investing, money management, career or
              business.
            </p>
            <p className={classes.body}>
              Join the Stecstars today and start your journey towards ethical
              and halal investing
            </p>

            <div className={classes.button}>
              <Button buttonSize="big">
                <div className={classes.buttonText}>
                  <p>Join Stecstars Now</p>
                  <img src="./images/hero/arrow1.png" alt="" />
                </div>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}