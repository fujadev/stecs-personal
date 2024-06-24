import React, { useLayoutEffect } from "react";
import classes from "./styles.module.css";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BlogBox from "../../components/blogBox";
import blogImage from "../../assets/media/blogImage.png";
import { useNavigate } from "react-router-dom";

export default function Learn() {
  const navigate = useNavigate();
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
      <div className={`${classes.container} container-fluid`}>
        <div className={classes.widthEnforcer}>
          <p className={`${classes.header} ${classes.pageHeader}`}>
            Stecs Learn
          </p>
          <div className={classes.texts}>
            <p className={`${classes.body} ${classes.forProducts}`}>
              For product announcements, feature updates, user stories, and
              technical posts about banking, subscribe to the Stecs blog.
            </p>
          </div>
          <p className={classes.bloghHeader}>Investment</p>
          <div className={classes.blogContainer}>
            <Link to={"/LearnDetails"}>
              <BlogBox
                backgroundColor="#E2EDF1"
                image={blogImage}
                title="Money Tips"
                subtitle={"Ways to keep your funds safe"}
                time={"February 21, 2023"}
              />
            </Link>
            <Link to={"/LearnDetails"}>
              <BlogBox
                backgroundColor="#E2EDF1"
                image={blogImage}
                title="Money Tips"
                subtitle={"Ways to keep your funds safe"}
                time={"February 21, 2023"}
              />
            </Link>
            <div onClick={() => navigate("/LearnDetails")}>
              <BlogBox
                backgroundColor="#E2EDF1"
                image={blogImage}
                title="Money Tips"
                subtitle={"Ways to keep your funds safe"}
                time={"February 21, 2023"}
              />
            </div>
          </div>
          <div className={classes.controlContainer}>
            <p className={`${classes.header} ${classes.takeControl}`}>
              Take control of your finances today
            </p>
            <p className={`${classes.body} ${classes.getStarted}`}>
              Get started for free today and enjoy the convenience and security
              of banking on-the-go
            </p>
            <div className={classes.buttonContainer}>
              <Button buttonSize="big">
                <Link
                  to="https://chat.whatsapp.com/IsnaShS0KQp444o6VDlNXP"
                  className={classes.buttonText}
                >
                  <p>Join Stecstars Now</p>
                  <img src="./images/hero/arrow1.png" alt="" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
