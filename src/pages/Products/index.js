import React, { useLayoutEffect } from "react";
import classes from "./styles.module.css";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import ProductCards from "../../components/productCards";
import MyButton from "../../components/myButton"

export default function Products() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const holdingphone = require("../../assets/media/holdingphone.png");
  const houseicon = require("../../assets/media/houseicon.png");
  // const productsimage2 = require("../../assets/media/productsimage2.png");
  const customerImageFrame = require("../../assets/media/customer-image-frame.png")

  const products = [
    {
      background: "#F8E7D3",
      headingText: "Sharia-Compliant Wealth Management",
      descriptionText:
        "Experience peace of mind as we help you manage your wealth in accordance with Islamic principles. Our expert team ensures that your investments and savings align with Sharia guidelines, providing ethical and profitable solutions",
      houseicon: houseicon,
    },
    {
      background: "#CCE6FF",
      headingText: "Secure Vaults",
      descriptionText:
        "Protect your assets with our secure vaults, offering both flexibility and stability. Whether you prefer regular, savings, or dollar-saving options, our vaults provide a safe space for your wealth to grow.",
      houseicon: houseicon,
    },
    {
      background: "#FFF5CC",
      headingText: "Tailored Investment Solutions",
      descriptionText:
        "Coming Soon! Stay tuned for personalised investment opportunities tailored to your financial goals and preferences. Our Sharia-compliant investment options will help you grow your wealth while upholding your values.",
      houseicon: houseicon,
    },
    {
      background: "#F8D3D3",
      headingText: "Stock",
      descriptionText:
        "Coming Soon! Prepare for the future with our upcoming stock trading service, designed to provide access to halal investment opportunities in the stock market. Our platform will offer a range of Sharia-compliant stocks, allowing you to invest in companies that align with your values.",
      houseicon: houseicon,
    },
  ];

  return (
    <>
      <Nav />
      {/* <div className={`${classes.sheriahContainer} container-fluid`}> */}
      <div className={classes.pageContainer}>
        <div className={classes.heroContainer}>
          <div className={classes.hero}>
            <h1>Unlocking Halal Wealth: Where Tradition Meets Innovation</h1>
            <p>
              Transforming Your Financial Journey through Sharia-Compliant
              Solutions
            </p>
            <div className={classes.myButtonContainer}>
              <MyButton href="#download">
                Download
              </MyButton>
              <MyButton href="#download" className={classes.signUpButton}>
                <Link to="/register">Sign Up</Link>
              </MyButton>
            </div>
          </div>

          <div className={classes.holdingPhoneBackground}>
            <img
              className={classes.holdingPhone}
              src={holdingphone}
              alt="Sheriah Compliance Certificate"
            />
          </div>
        </div>
        <div className={classes.productGrid}>
          <h2>
            Empowering Financial Growth, <br /> Guided by Islamic Principles
          </h2>
          {products.map((product, index) => (
            <ProductCards
              key={index}
              background={product.background}
              headingText={product.headingText}
              descriptionText={product.descriptionText}
              houseicon={product.houseicon}
            />
          ))}
        </div>
        <div className={classes.vaultContainer}>
          <p className={classes.secureText}>Secure Your Wealth with Our Vaults
          </p>
          <div className={classes.vaultCardContainer}>
            <div className={classes.vaultCard}>
              <h4>Regular Vault</h4>
              <p>Our Regular Vault offers a secure place to store your wealth while providing easy access when needed.</p>
            </div>
            <div className={classes.savingsVaultCard}>
              <div>
                <h4>Savings Vault</h4>
                <p>Save for your future with our Savings Vault, designed to help you achieve your financial goals while adhering to Islamic principles.</p>
              </div>
            </div>
            <div className={classes.vaultCard}>
              <h4>Dollar Savings Vault</h4>
              <p>Protect your wealth from currency fluctuations with our Dollar Savings Vault, providing stability and growth opportunities.</p>
            </div>
          </div>
        </div>
        {/* <div className={classes.productImagecontainer}>
          <img className={classes.productsimage2} src={productsimage2} alt="" />
        </div> */}
        <div className={classes.downloadContainer} id="download">
          <div className={`${classes.store}`}>
            <Link
              to={"https://apps.apple.com/us/app/stecs/id6451484520"}
              className={`${classes.play}`}
            >
              <img src="./apple.png" alt="" />
              <p>App Store</p>
            </Link>
            <Link
              to={
                "https://play.google.com/store/apps/details?id=com.stecsmobile.stecs"
              }
              className={`${classes.play}`}
            >
              <img src="./google-play.png" alt="" />
              <p>Google Play</p>
            </Link>
          </div>
        </div>
        <p className={classes.discover}>
          Discover What Our Customers Have to Say: <br /> Real Stories, Real
          Success!
        </p>
        <div className={classes.customerCardContainer}>
          <div className={classes.customerCard}>
            <div className={classes.textAndImageContainer}>
              <p className={classes.customerComment}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <img className={classes.customerImage} src={customerImageFrame} alt="customer" />
            </div>
            <p className={classes.customerName}>Khadijat</p>
          </div>
          <div className={classes.customerCard}>
            <div className={classes.textAndImageContainer}>
              <p className={classes.customerComment}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <img className={classes.customerImage} src={customerImageFrame} alt="customer" />
            </div>
            <p className={classes.customerName}>Khadijat</p>
          </div>
          <div className={classes.customerCard}>
            <div className={classes.textAndImageContainer}>
              <p className={classes.customerComment}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <img className={classes.customerImage} src={customerImageFrame} alt="customer" />
            </div>
            <p className={classes.customerName}>Khadijat</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
