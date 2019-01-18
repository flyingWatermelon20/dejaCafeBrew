import React from "react";
import PropTypes from "prop-types";
import styles from "./header.css";
import logo from "../../assets/logo.png";

const Header = () => (
  <div className={styles.header}>
    <img src={logo} className={styles.logoImg} />
    <a href="#default" className={styles.logo}>
      DEJA BREW CAFE
    </a>
    <div className={styles.headerRight}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#menu">Menu</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
);

export default Header;
