import React, { useRef, useState, useContext } from "react";
import { DataContext } from "../context/Context";
import data from "../../public/worklist.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "@/styles/work/ProjectList.module.scss";
import Link from "next/link";

const ProjectList = () => {
  const data = useContext(DataContext);
  // console.log('bb', data);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <div className={styles.detailbg}>
          {data &&
            data.projects.map((project, key) => (
              <SwiperSlide key={key}>
                <div className={styles.listbox}>
                  <div className={styles.img}>
                    <Link href={`/work/projectdetail?id=${project.id}`}>
                      <img src={project.image} alt={project.name} />
                    </Link>
                  </div>
                  <div className={styles.detailtext}>
                    <div className={styles.content1}>
                      <p>{project.name}</p>
                    </div>
                    <div className={styles.content2}>
                      <p>{project.description}</p>
                    </div>
                    <div className={styles.content3}>
                      <img src={project.techStack[0]} />
                      <img
                        className={styles.techImg}
                        src={project.techStack[1]}
                      />
                      <img src={project.techStack[2]} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </>
  );
};

export default ProjectList;
