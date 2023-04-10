import React from 'react'
import styles from '@/styles/about/AboutMe.module.scss'
import NavBar from '../NavBar'
import AboutDetail from './AboutDetail'
import AboutSkill from './AboutSkill'
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

const ZoomInScrollOut = batch(
  StickyIn(),
  FadeIn(),
  ZoomIn(),
  MoveOut(0, -1000)
);

const AboutMe = () => {
  return (
    <>
      <NavBar/>
      <ScrollContainer>
        <ScrollPage>
          <div className={styles.abouttext}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              About Me
            </Animator>
          </div>
          <div className={styles.abouttext2}>
              SCROLL DOWN
          </div>
        </ScrollPage>
        <div className={styles.aboutbg}>
          <div className={styles.purple1}></div>
          <div className={styles.purple2}></div>
          <div className={styles.purple3}></div>
        </div>
        <AboutDetail/>
        <AboutSkill/>
      </ScrollContainer>
    </>
  )
}

export default AboutMe