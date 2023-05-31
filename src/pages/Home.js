import React, { useContext } from "react";
import classes from './Home.module.css'
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Button from "../components/button/Button";
import TryNow from "../components/tryNow/TryNow";
import AppContext from "../context/context-api";

export default function Home() {
  const ctx = useContext(AppContext);
  const overlayIsActive = ctx.overlayActive;
  const showOverlay = ctx.showOverlay;
    // const firstText =
    //   "I never thought banking could be so easy and stress-free until I started using this app. It has completely transformed the way I manage my finances.";
    // const secondText = ""

    const buttonClickHandler = () => {
      showOverlay();
    }
    return (
      <>
        <Nav />
        <div
          className={`containter-fluid ${classes.hero} ${
            overlayIsActive ? classes.overlay : ""
          }`}
        >
          <div className={classes.widthEnforcer}>
            <p className={classes.big}>
              One app for all your ethical financial needs
            </p>
            <p className={classes.small}>
              Save, spend and grow your wealth ethically with ease
            </p>
            <Button buttonSize="big" clickHandler={buttonClickHandler}>
              <span className={classes.getStarted}>Get Started</span>
              <img src="./images/hero/arrow1.png" alt="" />
            </Button>
          </div>
          <img src="./images/hero/card.png" alt="" className={classes.image1} />
          <img
            src="./images/hero/cash1.png"
            alt=""
            className={classes.image2}
          />
          <img
            src="./images/hero/cash2.png"
            alt=""
            className={classes.image3}
          />
          <img src="./images/hero/coin.png" alt="" className={classes.image4} />
        </div>
        <div
          className={`${classes.sectionOne} ${classes.bigDiv} container-fluid`}
        >
          <div className={classes.phoneBackground}>
            <img src="./images/section/phones.png" alt="" />
          </div>

          <div className={classes.texts}>
            <p className={classes.big}>Track, save and build wealth </p>
            <p className={classes.small}>
              Empower your financial future with the tools to succeed
            </p>
          </div>
        </div>
        <div className={`container-fluid ${classes.sectionTwo} ${classes.widthEnforcer}`}>
          <div className={classes.insight}>
            <div className={classes.texts}>
              <p className={classes.big}>Get insights on your spendings</p>
              <p className={classes.small}>
                Take control of your finances with in-depth insights into your
                spending habits. With powerful tools to analyze your spending,
                you can track your progress, make adjustments, and stay on top
                of your budget with ease.
              </p>
            </div>
            <div className={classes.images}>
              <img
                src="./images/sectionTwo/chart.png"
                alt=""
                className={classes.img1}
              />
              <img
                src="./images/sectionTwo/pie.png"
                alt=""
                className={classes.img2}
              />
              <img
                src="./images/sectionTwo/money.png"
                alt=""
                className={classes.img3}
              />
            </div>
          </div>
          <div className={classes.group}>
            <div className={classes.save}>
              <p className={classes.big}>Save & invest with ease</p>
              <p className={classes.small}>
                Put your funds into a vault depending on your goal and when you
                need the funds.
              </p>
              <img
                src="./images/sectionTwo/money2.png"
                alt=""
                className={classes.img1}
              />
              <img
                src="./images/sectionTwo/safe.png"
                alt=""
                className={classes.img2}
              />
            </div>
            <div className={classes.card}>
              <p className={classes.big}>Card with great perks</p>
              <p className={classes.small}>
                Say goodbye to the hassle of carrying cash and enjoy the
                convenience and security of making purchases
              </p>
              <img
                src="./images/sectionTwo/card.png"
                alt=""
                className={classes.img1}
              />
            </div>
          </div>
        </div>
        <div
          className={`${classes.sectionThree} ${classes.bigDiv} container-fluid`}
        >
          <div className={classes.texts}>
            <p className={classes.big}>
              We are not a bank, <br />
              We are more than a bank
            </p>
            <p className={classes.small}>
              Get exclusive perks designed to enhance your financial journey
            </p>
          </div>
          <div className={classes.card}>
            <div className={classes.info}>
              <p className={classes.title}>All in one money App</p>
              <div className={classes.content}>
                <p className={classes.text1}>Spend, Save, Invest</p>
                <p className={classes.text2}>
                  Seamlessly manage your money and take control of your finances
                  with ease.
                </p>
              </div>
              <div className={classes.content}>
                <p className={classes.text1}>
                  Earn competitive returns on your savings
                </p>
                <p className={classes.text2}>
                  Your savings are invested in shari’ah compliant assets and you
                  earn a share of the profits generated
                </p>
              </div>
              <div className={classes.content}>
                <p className={classes.text1}>Maintain Zero interest</p>
                <p className={classes.text2}>
                  Your deposit does not attract any form of interest but
                  permissible profits.
                </p>
              </div>
            </div>
            <img src="./images/sectionThree/phone.png" alt="" />
          </div>
        </div>
        <div
          className={`${classes.sectionFour} ${classes.bigDiv} container-fluid`}
        >
          <div className={classes.texts}>
            <p className={classes.big}>End-to-end encryption</p>
            <p className={classes.small}>
              Protect your privacy and secure your data with end-to-end
              encryption.
            </p>
          </div>
          <div className={classes.card}>
            <div className={classes.cardText}>
              <p className={classes.text1}>We safeguard your money</p>
              <p className={classes.text2}>
                Rest easy knowing that your money is in good hands. We take your
                financial security seriously and have implemented rigorous
                measures to safeguard your funds. From advanced encryption to
                fraud detection and prevention, we have your back every step of
                the way. Rely on bank-grade security with all your monies fully
                insured by NDIC.
              </p>
            </div>
            <img
              src="./images/sectionFour/cash.png"
              alt=""
              className={classes.img1}
            />
            <img
              src="./images/sectionFour/lock.png"
              alt=""
              className={classes.img2}
            />
            <img
              src="./images/sectionFour/shadow.png"
              alt=""
              className={classes.img3}
            />
          </div>
        </div>
        {/* <div
          className={`container-fluid ${classes.sectionFive} ${classes.bigDiv}`}
        >
          <div className={classes.texts}>
            <p className={classes.big}>Our impact is being felt</p>
            <p className={classes.small}>
              Our values define the Stecs culture, who we are, and what we do
              every day
            </p>
          </div>
          <div className={classes.quotes}>
            <Quote
              name="Asiwaju Peter"
              location="Lagos, Nigeria"
              text={firstText}
            />
            <Quote
              name="Atiku Kwankwaso"
              location="Kano, Nigeria"
              text={firstText}
            />
            <Quote
              name="Obi Sowore"
              location="Abuja, Nigeria"
              text={firstText}
            />
          </div>
        </div> */}
        <div className={`${classes.bigDiv} container-fluid ${classes.faq}`}>
          <div className={classes.texts}>
            <p className={classes.big}>Frequently Asked Questions</p>
            <p className={classes.small}>
              Our values define the Stecs culture, who we are, and what we do
              every day
            </p>
          </div>
          <div className={classes.accordion}>
            <div class="accordion" id="accordionExample">
              <div class={`${classes.item} accordion-item`}>
                <h2
                  class={`${classes.header} accordion-header`}
                  id="headingOne"
                >
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What can I do on the Stecs App?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>Open an interest-free savings account</p>
                    <p>
                      Manage your finances by tracking your income and expenses
                    </p>
                    <p>Send and receive money to and from friends and family</p>
                    <p>
                      Access expert financial advice and support through our
                      community
                    </p>
                    <p>
                      Lock away your savings in the Vault feature to prevent
                      impulsive spending
                    </p>
                  </div>
                </div>
              </div>
              <div class={`${classes.item} accordion-item`}>
                <h2
                  class={`${classes.header} accordion-header`}
                  id="headingTwo"
                >
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How does STECS protect my personal and financial
                    information?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    We take your financial security seriously and have
                    implemented rigorous measures to safeguard your funds. From
                    advanced encryption to fraud detection and prevention, we
                    have your back every step of the way. Rely on bank-grade
                    security with all your monies fully insured by NDIC.
                  </div>
                </div>
              </div>
              <div class={`${classes.item} accordion-item`}>
                <h2
                  class={`${classes.header} accordion-header`}
                  id="headingThree"
                >
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What does ethical financing mean?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Ethical financing is a form of financial management that
                    aligns with ethical and moral values that are shared across
                    many different faiths and beliefs. It means that the
                    financial institution or platform, such as Stecs, operates
                    with a sense of responsibility towards the environment and
                    society, in addition to providing financial benefits to its
                    users. This can include promoting fair trade, investing in
                    renewable energy, avoiding investments in harmful
                    industries, and adhering to ethical business practices.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${classes.sectionSix} ${classes.bigDiv} container-fluid`}
        >
          <div className={classes.texts}>
            <p className={classes.big}>Learn how ethical finance works</p>
            <p className={classes.small}>
              Expertly curated articles to help you understand how our
              application works.
            </p>
          </div>

          <div className={classes.cards}>
            <div className={`${classes.card} ${classes.pink}`}>
              <div className={classes.cardTexts}>
                <p className={classes.bigText}>Ways to keep your funds safe</p>
                <p className={classes.smallText}>
                  Put your funds into a vault depending on your goal and when
                  you need the funds.
                </p>
              </div>
              <div className={classes.link}>
                <p>Read article</p>
                <img src="./images/sectionSix/blue-arrow.png" alt="" />
              </div>
              <img src="./images/sectionSix/safe-blue.png" alt="" />
            </div>
            <div className={`${classes.card} ${classes.blue}`}>
              <div className={classes.cardTexts}>
                <p className={classes.bigText}>Paying Bills with QR Scanning</p>
                <p className={classes.smallText}>
                  Get the opportunity to save with your family, friends and
                  associates towards a particular need
                </p>
              </div>
              <div className={classes.link}>
                <p>Read article</p>
                <img src="./images/sectionSix/blue-arrow.png" alt="" />
              </div>
              <img src="./images/sectionSix/qr.png" alt="" />
            </div>
          </div>
        </div>
        <div
          className={`${classes.sectionSeven} container-fluid ${classes.bigDiv}`}
        >
          <TryNow />
          <div className={classes.card}>
            <div className={classes.details}>
              <p className={classes.bigText}>Subscribe to our newsletter</p>
              <p className={classes.smallText}>
                Get update from us from time to time and be the first to know
                when we launch a new product.
              </p>
              <div className={classes.form}>
                <input type="email" placeholder="Enter your email address" />
                <button>Join now</button>
              </div>
            </div>
            <img
              className={classes.img1}
              src="./images/sectionSeven/envelop.png"
              alt=""
            />
            <img
              className={classes.img2}
              src="./images/sectionSeven/envelop-shadow.png"
              alt=""
            />
          </div>
        </div>
        <Footer />
      </>
    );
}