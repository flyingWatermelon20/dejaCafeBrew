import React from "react";
import styles from "./contact.css";
import About from "../about/about";
const Contact = () => (
  <div className={styles.contactContainer}>
    <div className={styles.titleContainer}>
      <p className={styles.title}>Contact us</p>
      <p className={styles.subtitle}>we would love to hear from you.</p>
    </div>
    <div className={styles.contactHelper}>
      <div className={styles.formContainer}>
        <form
          className={styles.contactForm}
          action="heathercoraje@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <p className={styles.formText} />
          <label>
            <textarea
              type="text"
              name="message"
              placeholder=" If you have any comment, send us a message. Please include your name and contact information so that we can get back to you."
            />
          </label>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;

// clean form
// update info about the chef
// add link to icons
// refactor css code and structure divs

// simple mobile responsive (one media query)

// go daddy pricing for domain
