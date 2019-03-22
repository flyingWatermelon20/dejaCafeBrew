import React from "react";
import styles from "./footer.css";
import facebookLogo from "../../assets/facebook.png";
import googleLogo from "../../assets/google.png";
import deliverooLogo from "../../assets/deliveroo.jpg";
import uberLogo from "../../assets/uber.jpg";
import logo from "../../assets/logo.png";

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.elementsContainer}>
      <div className={styles.title}>DEJA BREW CAFE</div>
      <div className={styles.address}>
        319 Brockley Road, London SE4 2QZ | 020 7998 8360{" "}
      </div>
      <div className={styles.iconCotainer}>
        <a
          target="_blank"
          href="https://www.facebook.com/Deja-Brew-Cafe-Brockley-407394519793712/"
        >
          <img src={facebookLogo} className={styles.snsLogo} />
        </a>
        <a
          target="_blank"
          href="https://www.google.co.uk/search?ei=761AXIOyOeKW1fAPp6-XqAY&q=deja+cafe+brew+brockley&oq=deja+cafe+brew+brockley&gs_l=psy-ab.3...2295.2983..3159...0.0..0.59.114.2......0....1..gws-wiz.OT_amsPp-WI#lrd=0x4876030414cb245d:0x7ad5988dbb77a3a1,1,,,"
        >
          <img src={googleLogo} className={styles.snsLogo} />
        </a>
        <a>
          <img src={deliverooLogo} className={styles.snsLogo} />
        </a>
        <a>
          <img src={uberLogo} className={styles.snsLogo} />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
