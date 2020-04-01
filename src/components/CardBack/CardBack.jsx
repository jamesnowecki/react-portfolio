import React from "react";
import styles from "./CardBack.module.scss";

const CardBack = ({project}) => {
  const {projectDescription, projectTitle, projectLiveLink, projectRepoLink} = project;

  return (
    <section className={styles.cardBack}>
      <h3>{projectTitle}</h3>
      <p>{projectDescription}</p>
      <p><a href= {projectLiveLink} target="_blank">Launch</a> | <a href= {projectRepoLink} target="_blank">GitHub</a></p>
    </section>
  );
};

export default CardBack;

