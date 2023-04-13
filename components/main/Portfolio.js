import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/main/Portfolio.module.scss'
import NavBar from '../NavBar'
import Link from 'next/link';

const Portfolio = () => {

  const containerRef = useRef(null);
  const layerRef1 = useRef(null);
  const layerRef2 = useRef(null);
  const layerRef3 = useRef(null);
  const layerRef4 = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    let X = e.pageX;
    let Y = e.pageY;
    layerRef1.current.style.transform = `translate(${X / 80}px, ${Y / 80}px)`;
    layerRef2.current.style.transform = `translate(${Y / 100}px, ${X / 100}px)`;
    layerRef3.current.style.transform = `translate(${X / 50}px, ${Y / 50}px)`;
    layerRef4.current.style.transform = `translate(${Y / 100}px, ${X / 100}px)`;

  };

  return (
    <>
      <NavBar/>
      <div ref={containerRef} className={styles.mainbg}>
          <div ref={layerRef1} className={styles.maintext}>
            PORTFOLIO
          </div>          
          <div ref={layerRef2} className={styles.purple}></div>
          <div ref={layerRef3} className={styles.green}></div>
          <div ref={layerRef4} className={styles.red}></div>
      </div>
    </>
  )
}

export default Portfolio