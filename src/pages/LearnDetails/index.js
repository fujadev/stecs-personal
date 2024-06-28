import React, { useLayoutEffect } from "react";
import styles from "./styles.module.css";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import blogImage from "../../assets/media/blogImage.png";
import iphoneImage from "../../assets/media/iphoneImage.png";
import videoplaceholder from "../../assets/media/videoplaceholder.png";

export default function LearnDetails() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Helmet>
        <title>Learn</title>
        <meta name="description" content="Learn" />
        <link rel="canonical" href="/Learn" />
      </Helmet>
      <Nav />

      <div className={`${styles.articleDetailsWrapper} container-fluid`}>
        <div className={styles.articleDetailsContainer}>
          <span className={styles.articleTitle}>Money Tips</span>
          <h2 className={styles.articleSubtitle}>
            Ways to keep your funds safe
          </h2>
          <div className={styles.authorInfoContainer}>
            <span className={styles.authorName}>By Ridwan Sanusi</span>
            <div className={styles.circle}></div>
            <span className={styles.articleDate}>February 12 2023</span>
            <div className={styles.circle}></div>
            <span className={styles.readingTime}>2 Min Read</span>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img className={styles.image} src={blogImage} alt="blog" />
        </div>

        <div className={styles.textContent}>
          <h3>A quick money talk</h3>
          <p>
            Money is an essential part of our lives, and we work hard to earn
            it. As such, it is crucial to protect it from loss or theft. Keeping
            your funds safe is an essential practice that requires diligence,
            common sense, and a few simple steps. Here are some ways to keep
            your funds secure:
          </p>
          <p>
            Money is an essential part of our lives, and we work hard to earn
            it. As such, it is crucial to protect it from loss or theft. Keeping
            your funds safe is an essential practice that requires diligence,
            common sense, and a few simple steps. Here are some ways to keep
            your funds secure:
          </p>
        </div>

        <div className={styles.textContent}>
          <h3>A quick money talk</h3>
          <p>
            Money is an essential part of our lives, and we work hard to earn
            it. As such, it is crucial to protect it from loss or theft. Keeping
            your funds safe is an essential practice that requires diligence,
            common sense, and a few simple steps. Here are some ways to keep
            your funds secure:
          </p>
          <p>
            Money is an essential part of our lives, and we work hard to earn
            it. As such, it is crucial to protect it from loss or theft. Keeping
            your funds safe is an essential practice that requires diligence,
            common sense, and a few simple steps. Here are some ways to keep
            your funds secure:
          </p>
        </div>

        <div className={styles.phoneImageContainer}>
          <img
            className={styles.iphoneImage}
            src={iphoneImage}
            alt="iphone"
          />
        </div>

        <div className={styles.textContent}>
          <h3>A quick money talk</h3>
          <p>
            Money is an essential part of our lives, and we work hard to earn
            it. As such, it is crucial to protect it from loss or theft. Keeping
            your funds safe is an essential practice that requires diligence,
            common sense, and a few simple steps. Here are some ways to keep
            your funds secure:
          </p>
          <p>
            Money is an essential part of our lives, and we work hard to earn
            it. As such, it is crucial to protect it from loss or theft. Keeping
            your funds safe is an essential practice that requires diligence,
            common sense, and a few simple steps. Here are some ways to keep
            your funds secure:
          </p>
        </div>

        <div className={styles.videoContainer}>
          <img src={videoplaceholder} alt="video" className={styles.video} />
        </div>

        <div className={styles.textContent}>
          <h3>A quick money talk</h3>
          <p>
            Money is an essential part of our lives, and we work hard to earn
            it. As such, it is crucial to protect it from loss or theft. Keeping
            your funds safe is an essential practice that requires diligence,
            common sense, and a few simple steps. Here are some ways to keep
            your funds secure:
          </p>
          <p>
            Money is an essential part of our lives, and we work hard to earn
            it. As such, it is crucial to protect it from loss or theft. Keeping
            your funds safe is an essential practice that requires diligence,
            common sense, and a few simple steps. Here are some ways to keep
            your funds secure:
          </p>
        </div>

        <div className={styles.textContent}>
          <h3>In conclusion</h3>
          <p>
            Money is an essential part of our lives, and we work hard to earn
            it. As such, it is crucial to protect it from loss or theft. Keeping
            your funds safe is an essential practice that requires diligence,
            common sense, and a few simple steps. Here are some ways to keep
            your funds secure:
          </p>
          <p>
            Money is an essential part of our lives, and we work hard to earn
            it. As such, it is crucial to protect it from loss or theft. Keeping
            your funds safe is an essential practice that requires diligence,
            common sense, and a few simple steps. Here are some ways to keep
            your funds secure:
          </p>
        </div>

        <div className={styles.controlContainer}>
          <p className={`${styles.header} ${styles.takeControl}`}>
            Take control of your finances today
          </p>
          <p className={`${styles.body} ${styles.getStarted}`}>
            Get started for free today and enjoy the convenience and security of
            banking on-the-go
          </p>
          <div className={styles.buttonContainer}>
            <Button buttonSize="big">
              <Link
                to="https://chat.whatsapp.com/IsnaShS0KQp444o6VDlNXP"
                className={styles.buttonText}
              >
                <p>Join Stecstars Now</p>
                <img src="./images/hero/arrow1.png" alt="arrow" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
