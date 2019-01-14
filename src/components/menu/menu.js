import React from "react";
import styles from "./menu.css";
const Menu = () => (
  <div className={styles.menuContainer}>
    <div className={styles.textContainer}>
      <p className={styles.title}>Menu</p>
      <p className={styles.subtitle}>
        We offer a wide range of foods from classic English breakfast to egg
        benedict, pannni and burger. We also have special menu everyday. Don't
        get to checkout our specials!
      </p>
      <button>VIEW MENU</button>
      <button className={styles.specialMenu}>VIEW SPECIALS</button>
    </div>
  </div>
);

export default Menu;
