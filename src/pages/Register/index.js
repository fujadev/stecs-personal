import React, { useLayoutEffect, useState } from "react";
import classes from "./styles.module.css";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import welcomebackground from "../../assets/media/welcomebackground.png";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .label("Password")
    .matches(/[A-Z]/, "Password must contain at least one uppercase character")
    .matches(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
      "Password must contain at least one special character"
    )
    .min(8),
  referral: Yup.string().label("Referral"),
});

export default function Register() {
  const query = useQuery();
  const referralCode = query.get("code");
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={classes.aa}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <Link to='/'>
            <img src="./stecs.svg" alt="" />
          </Link>
        </div>
        <img className={classes.backgroundImage} src={welcomebackground} />
        <div className={classes.container}>
          <div className={classes.header}>
            <h1>Welcome to Stecs</h1>
            <p>Please Sign in to your account.</p>
          </div>
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{ email: "", password: "", referral: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log("Form Value", values);
                axios
                  .post("https://strong.stecs.ng/api/sign-up", values)
                  .then((response) => {
                    navigate("/congratulations");
                    console.log("Sign-up successful:", response.data);
                  })
                  .catch((error) => {
                    console.error("Sign-up error:", error);
                  })
                  .finally(() => {
                    setSubmitting(false);
                  });
              }}
            >
              {({
                handleChange,
                handleSubmit,
                errors,
                setFieldTouched,
                touched,
              }) => (
                <form onSubmit={handleSubmit} className={classes.form}>
                  <div className={classes.inputField}>
                    <label>Email</label>
                    <input
                      onChange={handleChange("email")}
                      type="email"
                      name="email"
                      onBlur={() => setFieldTouched("email")}
                      placeholder="Enter your email"
                    />
                    {touched.email && (
                      <p className={classes.error}>{errors.email}</p>
                    )}
                  </div>
                  <div className={classes.inputField}>
                    <label>Password</label>
                    <div className={classes.passwordContainer}>
                      <input
                        onChange={handleChange("password")}
                        type={showPassword ? "text" : "password"}
                        name="password"
                        onBlur={() => setFieldTouched("password")}
                        placeholder="Enter your password"
                        className={classes.passwordInput}
                      />
                      <div className={classes.eyeIcon}>
                        {showPassword ? (
                          <IoEyeOutline
                            onClick={() => setShowPassword(false)}
                          />
                        ) : (
                          <IoEyeOffOutline
                            onClick={() => setShowPassword(true)}
                          />
                        )}
                      </div>
                    </div>
                    {touched.password && (
                      <p className={classes.error}>{errors.password}</p>
                    )}
                  </div>
                  <div className={classes.inputField}>
                    <label>Referral Code</label>
                    <input
                      onChange={handleChange("referral")}
                      type="text"
                      readOnly
                      name="referral"
                      onBlur={() => setFieldTouched("referral")}
                      placeholder="Enter your referral code"
                      value={referralCode}
                    />
                    {touched.referral && (
                      <p className={classes.error}>{errors.referral}</p>
                    )}
                  </div>
                  <button className={classes.submitButton} type="submit">
                    Sign Up
                  </button>
                </form>
              )}
            </Formik>
          </div>
          <p className={classes.loginLinkMessage}>
            Already have an account? <span>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}
