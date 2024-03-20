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
              { name: "Shari'ah Compliance", link: "/sheriah-compliance" },
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
              { name: "hello@stecs.ng", link: "mailto:hello@stecs.ng" },
              { name: "tel: 02013309146" },
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
          Stecs is a Financial Technology company duly registered with the
          Corporate Affairs Commission, Nigeria (RC: 1873053) with our office at
          12F Tola Adewumi Street, TAAT Estate, Maryland, Lagos, Nigeria.
          Banking services provided in partnership with Providus Bank Limited.
          It's savings and Investments scheme is duly registered under the
          Co-operative Societies Laws of Lagos State with registration number
          LSCS 18966 as Stecs (Alausa) Multipurpose Cooperative Society Limited.
          Other activities and partnerships are in line with the best ethical
          practices and the laws of the Federal Republic of Nigeria. Any
          unauthorized redistribution or reproduction of any copyrighted
          materials on this website is strictly prohibited. Other product and
          company names are trademarks of their respective owners. This website
          contains simulated images; actual appearance may vary.
          <p />
          <div>
            <p className={classes.copyright}>
              © 2024 Stecs Ltd. All Rights Reserved
            </p>
          </div>
        </p>
      </div>
    </div>
  );
}
