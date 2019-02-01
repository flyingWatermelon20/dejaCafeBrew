import React from "react";

import chefImg from "../../assets/chef.jpeg";

import styles from "./about.css";

const About = () => (
  <div className={styles.container}>
    <div className={styles.helper}>
      <div className={styles.textLeft}>
        <div>
          <div className={styles.titleHelper}>
            <p className={styles.title}>About us</p>{" "}
          </div>
          <p className={styles.description}>
            <strong>Deja Cafe Brew</strong> is located in the heart of Brockley
            Road. We serve dishes made with fresh ingredients and home-made
            sides. We have <strong>space for private parties</strong> with
            tailored catering service. People is a multi-functional events
            space. The space is perfect for supper clubs, meetings, pop-up
            restaurants, anything you want! Private dining from 10 to 20, and
            whole venue hire available for up to 50. We can arragne to suit all
            occasions. For further information, please
            <a href="#contact">
              <strong> contact us.</strong>
            </a>
          </p>
          <br />
          <button className={styles.readReviewButton}>
            <a
              className={styles.buttonLike}
              href="https://www.google.co.uk/search?ei=761AXIOyOeKW1fAPp6-XqAY&q=deja+cafe+brew+brockley&oq=deja+cafe+brew+brockley&gs_l=psy-ab.3...2295.2983..3159...0.0..0.59.114.2......0....1..gws-wiz.OT_amsPp-WI#lrd=0x4876030414cb245d:0x7ad5988dbb77a3a1,1,,,"
              target="_blank"
            >
              READ REVIEW
            </a>
          </button>
          <div className={styles.chefContainer}>
            <p className={styles.chefTitle}>
              Chef. Toure <br />
            </p>
            <p className={styles.description}>
              <strong>Chef. Toure</strong> is Head Chef at Deja Brew Cafe
              Brockley. He has years of experience. He is very passonate about
              cooking especially British and French cuisine. He has been working
              many years as a breakfast chef. He was in charge of breakfast at
              The Wolseley Restaurant Piccadilly and worked at The Langham
              Hotel, The Simpsons at the Strand, The Savoy Hotel London.
            </p>
          </div>
        </div>
      </div>
      <img className={styles.chefImg} src={chefImg} />
    </div>
  </div>
);

export default About;
