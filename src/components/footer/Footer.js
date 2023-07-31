import React from "react";
import classes from "./Footer.module.css";
import FooterColumn from "./FooterColumn";

export default function Footer() {
  return (
    <div className={`continer-fluid ${classes.section}`}>
      <div className={`${classes.top}`}>
        <div className={`${classes.getapp}`}>
          <div className={`${classes.logo}`}>
            <img src="./footer_logo.png" alt="" />
          </div>
          <p className={`${classes.appText}`}>
            Available on Play Store and App Store
          </p>
          <div className={`${classes.store}`}>
            <div className={`${classes.play}`}>
              <img src="./google-play.png" alt="" />
              <p>Google Play</p>
            </div>

            <div className={`${classes.play}`}>
              <img src="./apple.png" alt="" />
              <p>App Store</p>
            </div>
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
              { name: "Privacy policy", link: "" },
              { name: "Terms of service", link: "" },
            ]}
          />
          <FooterColumn
            title="Contact"
            list={[
              { name: "+2348066443041", link: "" },
              { name: "support@stecs.ng", link: "support@stecs.ng" },
            ]}
          />
          <FooterColumn
            title="Social Media"
            list={[
              { name: "Twitter", link: "" },
              { name: "LinkedIn", link: "" },
              { name: "Instagram", link: "" },
            ]}
          />
        </div>
      </div>
      <div className={`${classes.bottom}`}>
        <p className={classes.firstLine}>
          Stecs financial technologies Ltd is registered with CAC with RC Number
          1873053
          <br /> 
          Bank services is provided by Providus Bank Limited and
          regulated by the Central Bank of Nigeria.
        </p>
        <p className={classes.secondLine}>
          © 2022 Stecs Ltd. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
