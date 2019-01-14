import React from "react";
import styles from "./contact.css";
import shopImg from "../../assets/mainShop.jpeg";
const Contact = () => (
  <div className={styles.contactContainer}>
    <div className={styles.titleContainer}>
      <p className={styles.title}>Contact us</p>
      <p className={styles.subtitle}>We would love to hear from you!</p>
    </div>
    <div className={styles.helper}>
      <img src={shopImg} className={styles.shopImg} />
      <div className={styles.textContainer}>
        <p>hello world</p>
      </div>
    </div>
  </div>
);

export default Contact;
