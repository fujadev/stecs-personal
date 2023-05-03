import React, { useContext } from "react";
import classes from './AboutUs.module.css'
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import AboutText from "../components/aboutText/AboutText";
import AppContext from "../context/context-api";
import AboutCard from "../components/aboutCards/AboutCard";
import TryNow from "../components/tryNow/TryNow";

export default function AboutUs(){
        const ctx = useContext(AppContext);
        const isPhone = ctx.isPhone;
        const titleOne = "The One money App for an ethical lifestyle";
        const bodyTextOne =
          "Stecs is an ethical mobile money app that lets you manage all your finances in just one app. Swift account opening process, money management tools, cards services, investments and credit products are some of the things you stand to gain by opening an account with us.";
        
        const titleTwo =
          "We’re on a mission to remove your ethical financial worries";
        
        const bodyTextTwo =
          "From budgeting and saving to spending and investing, our app offers everything you need to take control of your money and reach your financial goals. Say goodbye to juggling multiple apps and hello to simplicity and convenience with our all-in-one money app that takes care of all your ethical financial worries.";

        const text1 =
          "No hidden charges and fees. Users know where their money goes.";
        const text2 =
          "A platform that is easy-to-use and accessible to everyone.";
        const text3 =
          "Educating our users towards helping them make informed decision about their money.";
        const text4 =
          "A platform designed to give you the tools and information to take charge of your money.";
        const text5 =
          "Delivering an exceptional experience that meets and exceeds your expectations.";

        const image1 = "./images/about/magnifier.png"
        const image2 = './images/about/handPhone.png'
        const image3 = './images/about/hat.png'
        const image4 = './images/about/hospital.png'
        const image5 = './images/about/smiley.png'
    return (
      <>
        <Nav />
        <div className={`${classes.hero} container-fluid`}>
          <div className={classes.big}>
            One app for all your ethical financial needs
          </div>
          <div className={classes.small}>
            Stecs is a non-interest financial mobile app that lets you manage
            all your finances in an ethical manner and in just one app.
          </div>
        </div>

        <div className={`container-fluid ${classes.sectionOne}`}>
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
        <div className={`${classes.sectionTwo} container-fluid`}>
          <div className={classes.texts}>
            <p className={classes.big}>What we stand for</p>
            <p className={classes.small}>
              Our values define the Stecs culture, who we are, and what we do
              every day
            </p>
          </div>

          <div className={classes.cards}>
            <AboutCard
              title="Transparency"
              body={text1}
              image={image1}
              color="#EDF8FC"
            />
            <AboutCard
              title="Simplicity"
              body={text2}
              image={image2}
              color="#EAF6EA"
            />
            <AboutCard
              title="Education"
              body={text3}
              image={image3}
              color="#FFFAEB"
            />
            <AboutCard
              title="Control"
              body={text4}
              image={image4}
              color="#EDF8FC"
            />
            <AboutCard
              title="Satifaction"
              body={text5}
              image={image5}
              color="#EAF6EA"
            />
          </div>
        </div>
        <div className={`${classes.sectionTwo} container-fluid`}>
          <TryNow />
        </div>
        <Footer />
      </>
    );
}