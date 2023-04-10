import React from "react";
import styles from "@/styles/work/ProjectWork.module.scss";
import NavBar from "../NavBar";
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
import ProjectList from "./ProjectList";

const ZoomInScrollOut = batch(
  StickyIn(),
  FadeIn(),
  ZoomIn(),
  MoveOut(0, -1000)
);

const ProjectWork = () => {
  return (
    <>
      <NavBar />
      <ScrollContainer>
        <ScrollPage>
          <div className={styles.abouttext}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              WORK
            </Animator>
          </div>
          <div className={styles.abouttext2}>SCROLL DOWN</div>
        </ScrollPage>
        <div className={styles.aboutbg}>
          <div className={styles.green1}></div>
          <div className={styles.green2}></div>
          <div className={styles.green3}></div>
        </div>
        <ProjectList />
      </ScrollContainer>
    </>
  );
};

export default ProjectWork;
