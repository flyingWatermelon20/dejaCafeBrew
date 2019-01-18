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
        319 Braxfield Road, London SE4 2QZ | 020 7998 836{" "}
      </div>
      <div className={styles.iconCotainer}>
        <a>
          <img src={facebookLogo} className={styles.snsLogo} />
        </a>
        <a>
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
