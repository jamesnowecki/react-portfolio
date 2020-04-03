import React from "react";
import styles from "./CardFront.module.scss";

const CardFront = ({project}) => {
  const {projectImage, projectTitle, projectStrapline, projectLiveLink, projectRepoLink} = project;

  return (
    <section className={styles.cardFront}>
      <img src={projectImage} alt= {`${projectTitle}`} />
      <h3>{projectTitle}</h3>
      <p>{projectStrapline}</p>
      <p><a href= {projectLiveLink} target="_blank">Launch</a> | <a href= {projectRepoLink} target="_blank">GitHub</a></p>
    </section>
  );
};

export default CardFront;
