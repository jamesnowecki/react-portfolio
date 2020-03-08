import React from "react";
import styles from "./CardFront.module.scss";

const CardFront = ({project}) => {

  const {projectImage, projectTitle, projectStrapline, projectLiveLink, projectRepoLink} = project;

  return (
    <section className={styles.cardFront}>
      <img src={projectImage} alt= {`${projectTitle} picture`} />
      <h3>{projectTitle}</h3>
      <p>{projectStrapline}</p>
      <a href= {projectLiveLink}>Link</a>
      <a href= {projectRepoLink}>GitHub</a>
    </section>
  );
};

export default CardFront;
