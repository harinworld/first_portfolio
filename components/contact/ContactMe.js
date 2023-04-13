import React from "react";
import styles from "@/styles/contact/ContactMe.module.scss";
import NavBar from "../NavBar";
import Link from "next/link";

const ContactMe = () => {
  return (
    <>
      <NavBar />
      <div className={styles.abouttext}>
        <div className={styles.contact}>CONTACT</div>
        <div className={styles.address}>
          <div className={styles.content1}>
            <p>Email</p>
            <p>harinworld95@gmail.com</p>
          </div>
          <div className={styles.content2}>
            <p>Github</p>
            <p>
              <a href="https://github.com/harinworld" target="_blank">
                https://github.com/harinworld
              </a>
            </p>
          </div>
          <div className={styles.content3}>
            <p>TISTORY</p>
            <p>
              <a href="https://harinworld.tistory.com/category/%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%BC%EA%B8%B0" target="_blank">
                https://harinworld.tistory.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.aboutbg}>
        <div className={styles.red1}></div>
        <div className={styles.red2}></div>
      </div>
    </>
  );
};

export default ContactMe;
