import React from "react";
import styles from "./ProfileBar.module.scss";
import FacePic from "../../assets/face-photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CVPdf from "../../assets/cv-james-nowecki.pdf";


const ProfileBar = () => {
  return (
    <section className={styles.profileBar}>
      <div className={styles.facePic}>
      <img src={FacePic} alt="James Nowecki face"/>
      </div>
      <h2 className={styles.name}>JAMES <span>NOWECKI</span></h2>
      <h2>SOFTWARE <span>DEVELOPER</span></h2>
      <h2>
        <section className={styles.skillsGrid}>
        <div className={styles.cell}>
          <a href="https://jamesnowecki.com"><FontAwesomeIcon icon={["fas", "home"]} /></a>
        </div>
        <div className={styles.cell}>
          <a href={CVPdf} target="_blank"><FontAwesomeIcon icon={["fas", "file-pdf"]} /></a>
        </div>
        <div className={styles.cell}>
          <a href="https://www.linkedin.com/in/jamesnowecki/" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
        </div>
        <div className={styles.cell}>
          <a href="https://github.com/jamesnowecki" target="_blank"><FontAwesomeIcon icon={["fab", "github-square"]} /></a>
        </div>
        </section>
      </h2>
      <h2>
        <section className={styles.skillsGrid}>
          <div className={styles.cell}>
            <FontAwesomeIcon icon={["fab", "git-alt"]} />
          </div>
          <div className={styles.cell}>
            <FontAwesomeIcon icon={["fab", "html5"]} />
          </div>
          <div className={styles.cell}>
            <FontAwesomeIcon icon={["fab", "js-square"]} />
          </div>
          <div className={styles.cell}>
            <FontAwesomeIcon icon={["fab", "css3-alt"]} />
          </div>
          <div className={styles.cell}>
            <FontAwesomeIcon icon={["fab", "yarn"]} />
          </div>
          <div className={styles.cell}>
            <FontAwesomeIcon icon={["fab", "react"]} />
          </div>
          <div className={styles.cell}>
            <FontAwesomeIcon icon={["fab", "sass"]} />
          </div>
          <div className={styles.cell}>
            <FontAwesomeIcon icon={["fab", "bootstrap"]} />
          </div>
        </section>
      </h2>
      
    </section>
  );
};

export default ProfileBar;
