import React from 'react'
import styles from '@/styles/contact/ContactMe.module.scss'
import NavBar from '../NavBar'
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";


const ContactMe = () => {
  return (
    <>
      <NavBar/>
          <div className={styles.abouttext}>
              <div className={styles.contact}>CONTACT</div>
              <div className={styles.address}>
                <div className={styles.content1}>
                  <p>Email</p>
                  <p>harinworld95@gmail.com</p>
                </div>
                <div className={styles.content2}>
                  <p>Github</p>
                  <p>https://github.com/harinworld</p>
                </div>
                <div className={styles.content3}>
                  <p>TISTORY</p>
                  <p>https://github.com/harinworld</p>
                </div>
              </div>
          </div>
        <div className={styles.aboutbg}>
          <div className={styles.red1}></div>
          <div className={styles.red2}></div>
        </div>
    </>
  )
}

export default ContactMe