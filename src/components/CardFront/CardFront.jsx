import React from "react";
import styles from "./CardFront.module.scss";

const CardFront = ({project}) => {
  const {projectImage, projectTitle, projectStrapline, projectLiveLink, projectRepoLink} = project;

  return (
    <section className={styles.cardFront}>
      <img src={projectImage} alt= {`${projectTitle}`} />
      <h3>{projectTitle}</h3>
      <p>{projectStrapline}</p>
      <p><a href= {projectLiveLink}>Launch</a> | <a href= {projectRepoLink}>GitHub</a></p>
    </section>
  );
};

export default CardFront;
