import React from "react";

import chefImg from "../../assets/chef.jpeg";

import styles from "./about.css";

const About = () => (
  <div className={styles.container}>
    <p className={styles.title}>About us...</p>
    <div className={styles.helper}>
      <div>
        <div className={styles.textLeft}>
          <p className={styles.subtitle}>Chef. David Oulton </p>
          <p className={styles.description}>
            Hi. Let me introduce myself. My name is David Oulton and I have been
            The Executive Chef of The Great National Abbey Court Hotel and
            Trinity Leisure Spa for the best part of 10 years. I've never
            written a Blog before so anyone out there reading this and wants to
            ask me questions please feel free to email me. chef@abbeycourt.ie
            usually gets the job done. Let me introduce myself. My name is David
            Oulton and I have been The Executive Chef of The Great National
            Abbey Court Hotel and Trinity Leisure Spa for the best part of 10
            years. I've never written a Blog before so anyone out there reading
            this and wants to ask me questions please feel free to email me.
            chef@abbeycourt.ie usually gets the job done.
          </p>
        </div>
      </div>
      <img className={styles.chefImg} src={chefImg} />
    </div>
  </div>
);

export default About;
