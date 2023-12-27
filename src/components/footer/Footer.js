import React from "react";
import classes from "./Footer.module.css";
import FooterColumn from "./FooterColumn";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer" className={`continer-fluid ${classes.section}`}>
      <div className={`${classes.top}`}>
        <div className={`${classes.getapp}`}>
          <div className={`${classes.logo}`}>
            <img src="./footer_logo.png" alt="" />
          </div>
          <div className={`${classes.logo}`}>
            <img className="mt-5" src="./ndpr.png" alt="" />
          </div>

          <p className={`${classes.appText}`}>
            Available on Play Store and App Store
          </p>
          <div className={`${classes.store}`}>
            <Link
              to={
                "https://play.google.com/store/apps/details?id=com.stecsmobile.stecs"
              }
              className={`${classes.play}`}
            >
              <img src="./google-play.png" alt="" />
              <p>Google Play</p>
            </Link>

            <Link
              to={"https://apps.apple.com/us/app/stecs/id6451484520"}
              className={`${classes.play}`}
            >
              <img src="./apple.png" alt="" />
              <p>App Store</p>
            </Link>
          </div>
        </div>
        <div className={`${classes.contact}`}>
          <FooterColumn
            title="Company"
            list={[
              { name: "About us", link: "/about-us" },
              { name: "Features", link: "" },
              { name: "Community", link: "/community" },
            ]}
          />
          <FooterColumn
            title="Legal"
            list={[
              { name: "Terms of use", link: "" },
              { name: "Privacy policy", link: "/privacy-policy" },
              { name: "Terms of service", link: "" },
            ]}
          />
          <FooterColumn
            title="Contact"
            list={[
              // { name: "+2348066443041", link: "" },
              { name: "support@stecs.ng", link: "mailto:support@stecs.ng" },
            ]}
          />
          <FooterColumn
            title="Social Media"
            list={[
              {
                name: "Twitter",
                link: "https://twitter.com/Stecsng",
              },
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/company/Stecs.ng/",
              },
              { name: "Instagram", link: "https://instagram.com/stecs.ng" },
            ]}
          />
        </div>
      </div>
      <div className={`${classes.bottom}`}>
        <p className={classes.firstLine}>
          Stecs financial technologies Ltd is registered with CAC with RC Number
          1873053
          <br />
          Bank services is provided by Providus Bank Limited and regulated by
          the Central Bank of Nigeria.
        </p>
        <p className={classes.secondLine}>
          © 2022 Stecs Ltd. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
