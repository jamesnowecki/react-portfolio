import React from "react";
import styles from "./CardBack.module.scss";

const CardBack = ({project}) => {
  const {projectDescription, projectTitle, projectLiveLink, projectRepoLink, projectTechStack} = project;

  const toggleNoProp = (e) => {
    e.stopPropagation();
  }

  return (
    <section className={styles.cardBack}>
      <h3>{projectTitle}</h3>
      <p>{projectDescription}</p>
      <div className={styles.techBar}>
        <p><a href= {projectLiveLink} onClick={toggleNoProp} target="_blank">Launch</a> | <a href= {projectRepoLink} onClick={toggleNoProp} target="_blank">GitHub</a></p>
          <p className={styles.techStack}>
          {projectTechStack.map(tech => 
          <p>{tech}</p>)}
          </p>
      </div>    </section>
  );
};

export default CardBack;

