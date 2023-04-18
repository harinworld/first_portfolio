import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/about/AboutDetail.module.scss'
import { useRouter } from 'next/router';
import PDF from './PDF';
import localFont from 'next/font/local'
// import font from '../../public/fonts/GmarketSansTTFMedium.woff'

const myFont = localFont({
  src:[
    {path: '../../public/fonts/GmarketSansTTFMedium.woff', weight:'normal'},
    {path: '../../public/fonts/GmarketSansTTFBold.woff', weight:'bold'}
  ]
})

const AboutDetail = () => {

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
            <img src='../animation_500_lg0ku4qn.gif' className={styles.lottie}/>
            <div className={`${myFont.className} ${styles.detailtext}`}>
                <p>
                    <b>‘Stay hungry stay foolish’</b> 
                        &nbsp;제가 가장 좋아하는 문구인 스티브잡스의 명언처럼 멈추지않고 항상 배우는 개발자가 되기위해 노력하는 <b>양정민</b>입니다.
                </p>
                <p>
                    세상의 모든 것들을 인터넷으로 해결하는 지금, 저는 사용자의 입장에서 생각하는 개발자를 향해 나아가고 있습니다.
                </p>
                <PDF/>
            </div>
            
        </div>
    </>
  )
}

export default AboutDetail