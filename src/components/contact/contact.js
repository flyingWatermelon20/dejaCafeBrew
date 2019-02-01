import React from "react";
import styles from "./contact.css";
import About from "../about/about";
import mainshop from "../../assets/mainShop.jpeg";
const Contact = () => (
  <div className={styles.contactContainer}>
    <div className={styles.titleContainer}>
      <p className={styles.title}>Contact us</p>
      <p className={styles.subtitle}>we would love to hear from you</p>
    </div>
    <div className={styles.helper}>
      <img className={styles.mainshopImage} src={mainshop} alt="mainshop" />
      <div className={styles.textContainer}>
        <p className={styles.colorBlock}>How to find us?</p>
        <div className={styles.textBox}>
          <p>
            <strong>Location : </strong> 319 Braxfield Road, London SE4 2QZ
          </p>
          <p>
            <strong>Open hour : </strong> 7AM to 4:30PM (Close on Monday)
          </p>
          <p>
            <strong>Tel : </strong>
            020 7998 836
          </p>
        </div>
        <p className={styles.colorBlock}>Talk to us! </p>
        <div className={styles.textBox}>
          <p>
            <strong>We'd love to hear from you!</strong>
            <br />
            If you have any question or suggestion, please post a review on
            Google Review by clicking
            <strong>
              {" "}
              <a
                target="_blank"
                href="https://www.google.co.uk/search?ei=761AXIOyOeKW1fAPp6-XqAY&q=deja+cafe+brew+brockley&oq=deja+cafe+brew+brockley&gs_l=psy-ab.3...2295.2983..3159...0.0..0.59.114.2......0....1..gws-wiz.OT_amsPp-WI#lrd=0x4876030414cb245d:0x7ad5988dbb77a3a1,1,,,"
              >
                HERE
              </a>
            </strong>
          </p>
        </div>
        <p className={styles.colorBlock}>Got more questions?</p>
        <div className={styles.textBox}>
          <p>
            For further questions regarding partnership or party room/catering
            service, Please give us a call at <strong>020 7998 836 </strong> or
            send us an email at <strong>dejabrewbrockley@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
