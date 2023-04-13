import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/about/AboutSkill.module.scss'
import Lottie from "react-lottie-player";
import lottieJson from "../../public/coding-slide.json";
import Html from "../../public/html5.svg";
import {
    Animator,
    ScrollPage,
    batch,
    StickyIn,
    FadeIn,
    MoveIn,
    MoveOut,
    Sticky,
    Fade
  } from "react-scroll-motion";
import { useRouter } from 'next/router';

const AboutSkill = () => {

  const observerRef = useRef([]);
  const [active,setActive] = useState(false);
  const router = useRouter();

  useEffect(()=>{

    let observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true)
        }else{
          setActive(false)
        }
      },
      { threshold: 0.5 }
    );

    if(observerRef.current){
      observer.observe(observerRef.current)
    }
  },[observerRef,active])

  return (
    <>
            <div className={`${styles.detailbg} ${active?styles.active:null}`} ref={observerRef}>
                <img src='../lottie_skill.gif' className={styles.lottie}/>
                <div className={styles.detailtext}>
                    <div className={styles.content1}>
                        <p>Skills</p>
                        <div className={styles.first}>
                          <img className={styles.img1} src='../html5.svg'/>
                          <img className={styles.img2} src='../css.svg'/>
                          <img className={styles.img3} src='../javascript.svg'/>
                          <img className={styles.img4} src='../react.svg'/>
                          <img className={styles.img5} src='../nextdotjs.svg'/>
                          <img className={styles.img6} src='../vuedotjs.svg'/>
                        </div>
                        <div className={styles.second}>
                          <img className={styles.img7} src='../github.svg'/>
                          <img className={styles.img8} src='../vercel (1).svg'/>
                          <img className={styles.img9} src='../filezilla.svg'/>
                          <img className={styles.img10} src='../figma.svg'/>
                          <img className={styles.img11} src='../adobephotoshop.svg'/>
                          <img className={styles.img12} src='../visualstudiocode.svg'/>
                        </div>
                    </div>
                    
                    <div className={styles.content2}>
                        <p>Education</p>
                        <p>그린컴퓨터아카데미 프론트엔드 과정수료</p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default AboutSkill