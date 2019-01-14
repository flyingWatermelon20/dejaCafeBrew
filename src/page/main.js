import React, { Component } from "react";
import Header from "../components/header/header";
// import Home from "../components/home/home";
import Contact from "../components/contact/contact";
import About from "../components/about/about";
import Menu from "../components/menu/menu";
import mainFood from "../assets/mainFood.jpeg";
import styles from "./main.css";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={styles.content}>
          <section id="home">
            {/* <Home /> */}
            <img src={mainFood} className={styles.mainFoodImg} />
            <div className={styles.mainTextContainer}>
              <h1 className={styles.mainText}>
                We make foods that make you happy
              </h1>
              <button>VIEW MENU</button>
            </div>
          </section>
          <section id="about">
            <About />
          </section>
          <section id="menu">
            <Menu />
          </section>
          <section id="contact">
            <Contact />
          </section>

          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}
export default Main;
