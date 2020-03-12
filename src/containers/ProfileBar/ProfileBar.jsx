import React from "react";
import styles from "./ProfileBar.module.scss";
import FacePic from "../../assets/face-photo.png";

const ProfileBar = () => {
  return (
    <section className={styles.profileBar}>
      <div className={styles.facePic}>
      <img src={FacePic} alt="Photo of James Nowecki"/>
      </div>
      <h1>JAMES NOWECKI</h1>
      <h2>SOFTWARE DEVELOPER</h2>
    </section>
  );
};

export default ProfileBar;
