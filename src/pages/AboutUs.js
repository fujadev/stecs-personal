import React, { useContext, useLayoutEffect } from "react";
import classes from "./AboutUs.module.css";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import AboutText from "../components/aboutText/AboutText";
import AppContext from "../context/context-api";
import AboutCard from "../components/aboutCards/AboutCard";
import TryNow from "../components/tryNow/TryNow";
import { Helmet } from "react-helmet-async";

export default function AboutUs() {
  const ctx = useContext(AppContext);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const isPhone = ctx.isPhone;
  const titleOne = "The One money App for an ethical lifestyle";
  const bodyTextOne =
    "Stecs is an ethical mobile money app that lets you manage all your finances in just one app. Swift account opening process, savings and investment options, money management tools are some of the things you stand to gain by opening an account with us.";

  const titleTwo =
    "We’re on a mission to remove your ethical financial worries";

  const bodyTextTwo =
    "From budgeting and saving to spending and investing, our app offers everything you need to take control of your money and reach your financial goals. Say goodbye to juggling multiple apps and hello to simplicity and convenience with our all-in-one money app that takes care of all your ethical financial worries.";

  const text1 =
    "No hidden charges and fees. Users know where their money goes.";
  const text2 = "A platform that is easy-to-use and accessible to everyone.";
  const text3 =
    "Educating our users towards helping them make informed decision about their money.";
  const text4 =
    "A platform designed to give you the tools and information to take charge of your money.";
  const text5 =
    "Delivering an exceptional experience that meets and exceeds your expectations.";

  const image1 = "./images/about/mag.png";
  const image2 = "./images/about/handPhone.png";
  const image3 = "./images/about/education.png";
  const image4 = "./images/about/hand.png";
  const image5 = "./images/about/satisfaction.png";
  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="About Stecs" />
        <link rel="canonical" href="/about-us" />
      </Helmet>
      <Nav />
      <div
        className={`${classes.hero} ${classes.widthEnforcer} container-fluid`}
      >
        <div className={classes.big}>
          The Ethical and Interest-Free Money App for Professionals
        </div>
        <div className={classes.small}>
          Stecs is an ethical money app that allows users securely save, invest
          and grow their wealth ethically with ease.
        </div>
      </div>

      <div
        className={`container-fluid ${classes.sectionOne} ${classes.widthEnforcer}`}
      >
        <div className={classes.flexbox}>
          <div className={`${classes.imageDiv} ${classes.green}`}>
            <img src="./images/about/phone_mockup.png" alt="" />
          </div>
          <AboutText title={titleOne} body={bodyTextOne} />
        </div>
        <div className={classes.flexbox}>
          {!isPhone && <AboutText title={titleTwo} body={bodyTextTwo} />}
          <div className={`${classes.imageDiv} ${classes.pink}`}>
            <img src="./images/about/iPhone.png" alt="" />
          </div>
          {isPhone && <AboutText title={titleTwo} body={bodyTextTwo} />}
        </div>
      </div>
      <div
        className={`${classes.sectionTwo} ${classes.widthEnforcer} container-fluid`}
      >
        <div className={classes.texts}>
          <p className={classes.big}>What we stand for</p>
          <p className={classes.small}>
            Our values define the Stecs culture, who we are, and what we do
            every day
          </p>
        </div>

        <div className={classes.cards}>
          <AboutCard
            title="Simplicity"
            body={text2}
            image={image2}
            color="#EAF6EA"
          />
          <AboutCard
            title="Transparency"
            body={text1}
            image={image1}
            color="#EDF8FC"
            width="190"
          />
          <AboutCard
            title="Education"
            body={text3}
            image={image3}
            color="#FFFAEB"
            width="250"
          />
          <AboutCard
            title="Control"
            body={text4}
            image={image4}
            color="#EDF8FC"
            width={180}
          />
          <AboutCard
            title="Satifaction"
            body={text5}
            image={image5}
            color="#EAF6EA"
            width={280}
          />
        </div>
      </div>
      <div
        className={`${classes.sectionTwo} ${classes.widthEnforcer} container-fluid`}
      >
        <TryNow />
      </div>
      <Footer />
    </>
  );
}
