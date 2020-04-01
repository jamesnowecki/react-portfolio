import React from "react";
import styles from "./ProfileBar.module.scss";
import FacePic from "../../assets/face-photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ProfileBar = () => {
  return (
    <section className={styles.profileBar}>
      <div className={styles.facePic}>
      <img src={FacePic} alt="James Nowecki face"/>
      </div>
      <h1>JAMES <span>NOWECKI</span></h1>
      <h2>SOFTWARE <span>DEVELOPER</span></h2>
      <h2>
        <section className={styles.skillsGrid}>
        <div className={styles.cell}>
          <FontAwesomeIcon icon={["fas", "home"]} />
        </div>
        <div className={styles.cell}>
          <FontAwesomeIcon icon={["fas", "file-pdf"]} />
        </div>
        <div className={styles.cell}>
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </div>
        <div className={styles.cell}>
          <FontAwesomeIcon icon={["fab", "github-square"]} />
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
