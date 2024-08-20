import React, { useLayoutEffect } from "react";
import classes from "./Community.module.css";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Community() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  // const [showPassword, setShowPassword] = useState(false);

  // const handleSignUp = (values, { setSubmitting }) => {
  //   axios
  //     .post("https://strong.stecs.ng/api/sign-up")
  //     .then((response) => {
  //       console.log("Sign-up successful:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Sign-up error:", error);
  //     })
  //     .finally(() => {
  //       setSubmitting(false);
  //     });
  // };

  // const handleSignUp = (values, { setSubmitting }) => {
  //   console.log("Form values:", values);
  //   axios
  //     .post("https://strong.stecs.ng/api/sign-up", values)
  //     .then((response) => {
  //       console.log("Sign-up successful:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Sign-up error:", error);
  //     })
  //     .finally(() => {
  //       setSubmitting(false);
  //     });
  // };

  return (
    <>
      <Helmet>
        <title>Community</title>
        <meta name="description" content="Community" />
        <link rel="canonical" href="/community" />
      </Helmet>
      <Nav />
      <div className={`${classes.container} container-fluid`}>
        <div className={classes.widthEnforcer}>
          <div className={classes.image}>
            {/* <img
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
            /> */}
            <img src="./footer_logo.png" alt="" className={classes.img3} />
          </div>

          <div className={classes.texts}>
            <p className={classes.header}>
              Want to be part of our Islamic Finance Learning Community?
            </p>
            <p className={classes.body}>
              Are you a financially savvy Muslim looking for a community where you can share knowledge and grow? Look no further!
            </p>
            <p className={classes.body}>
              Stecs Learning Community is a growing community dedicated to empowering Muslims with the tools and knowledge they need to make Shariah-compliant financial decisions. Our community offers educational content, professional advice, valuable resources, and online workshops/webinars tailored to help you navigate your financial journey.
            </p>
            <p className={classes.body}>
              Whether you're just starting or seeking to enhance your financial literacy, our welcoming community is here to support you. With Stecs Learning Community, you can achieve your financial goals while staying true to Islamic principles.
            </p>
            <p className={classes.body}>
              Become a member today and take charge of your financial future in a halal way!
              business.
            </p>

            <div className={classes.button}>
              <Button buttonSize="big">
                <Link
                  to="https://chat.whatsapp.com/IsnaShS0KQp444o6VDlNXP"
                  className={classes.buttonText}
                >
                  <p>Join Us Today</p>
                  <img src="./images/hero/arrow1.png" alt="" />
                </Link>
              </Button>
            </div>

            <div className={classes.formGroup}>
              <div class="sender-form-field" data-sender-form-id="lzsnvh1se3bppd9fjcb"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
    // <div className={classes.loginFormWrapper}>
    //   <img className={classes.welcomeImage} src={welcomebackground} />
    //   <div className={classes.welcomeMessage}>
    //     <div className={classes.header}>
    //       <h1>Welcome to Stecs</h1>
    //       <p>Please Sign in to your account.</p>
    //     </div>
    //     <div className={classes.formContainer}>
    //       <Formik
    //         initialValues={{ email: "", password: "" }}
    //         validate={(values) => {
    //           const errors = {};
    //           if (!values.email) {
    //             errors.email = "Required";
    //           } else if (
    //             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //           ) {
    //             errors.email = "Invalid email address";
    //           }
    //           if (!values.password) {
    //             errors.password = "Required";
    //           }
    //           return errors;
    //         }}
    //         onSubmit={handleSignUp}
    //       >
    //         {({ isSubmitting }) => (
    //           <Form>
    //             <div className={classes.inputField}>
    //               <label htmlFor="email">Email</label>
    //               <Field
    //                 type="email"
    //                 name="email"
    //                 placeholder="Enter your email"
    //               />
    //               <ErrorMessage name="email" component="div" />
    //             </div>
    //             <div className={classes.inputField}>
    //               <label htmlFor="password">Password</label>
    //               <Field
    //                 type={showPassword ? "text" : "password"}
    //                 name="password"
    //                 placeholder="Enter your password"
    //               />
    //               <div className={classes.eyeIcon}>
    //                 {showPassword ? (
    //                   <IoEyeOutline onClick={() => setShowPassword(false)} />
    //                 ) : (
    //                   <IoEyeOffOutline onClick={() => setShowPassword(true)} />
    //                 )}
    //               </div>
    //               <ErrorMessage name="password" component="div" />
    //             </div>
    //             <div className={classes.reminderContainer}>
    //               <Field type="checkbox" name="checked" />
    //               <p className={classes.reminder}>Remember for 30 days</p>
    //             </div>
    //             <button
    //               className={classes.formButton}
    //               type="submit"
    //               disabled={isSubmitting}
    //             >
    //               Sign Up
    //             </button>
    //           </Form>
    //         )}
    //       </Formik>
    //     </div>
    //     <p className={classes.loginLinkMessage}>
    //       Already have an account? <span>Login</span>
    //     </p>
    //   </div>
    // </div>
  );
}
