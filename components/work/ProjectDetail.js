import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "@/styles/work/ProjectDetail.module.scss";
import { useRouter } from "next/router";
import NavBar from "../NavBar";
import { DataContext } from "../context/Context";

const ProjectDetail = () => {
  const data = useContext(DataContext);
  const router = useRouter();
  console.log(router.query.id);
  console.log("detail", data);
  // console.log('detail id', data.projects[1]);
  // console.log('detail id', data.projects[router.query.id]);

  const detail = data.projects[router.query.id];
  console.log("aaa", detail);

  // const observerRef = useRef([]);
  // const [active,setActive] = useState(false);
  // const router = useRouter();

  // useEffect(()=>{

  //   let observer = new IntersectionObserver(
  //     ([e]) => {
  //       if (e.isIntersecting) {
  //         setActive(true)
  //       }else{
  //         setActive(false)
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );

  //   if(observerRef.current){
  //     observer.observe(observerRef.current)
  //   }
  // },[observerRef,active])

  if (!detail) return <></>;

  return (
    <>
      {/* <div className={`${styles.detailbg} ${active?styles.active:null}`} ref={observerRef}> */}
      <NavBar />
      <div className={styles.detailbg}>
        <div className={styles.ipad}>
          <video autoPlay muted loop width="100%" height="100%">
            <source src={detail.video} />
          </video>
        </div>
        <div className={styles.detailtext}>
          <div className={styles.content1}>
            <p>{detail.name}</p>
            <button>CLICK ME</button>
          </div>
          <div className={styles.content2}>
            <p>{detail.detail}</p>
          </div>
          <div className={styles.responsive}>
            <div className={styles.small}>
              <video autoPlay muted loop width="100%" height="100%">
                <source src={detail.mobile} />
              </video>
            </div>
            <div className={styles.content3}>
              <p>📒 트러블슈팅</p>
              <p>{detail.trouble}</p>
              <p>{detail.trouble2}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutbg}>
        <div className={styles.green1}></div>
        <div className={styles.green2}></div>
        <div className={styles.green3}></div>
      </div>
    </>
  );
};

export default ProjectDetail;
