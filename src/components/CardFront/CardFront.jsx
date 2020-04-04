import React from "react";
import styles from "./CardFront.module.scss";
// import TechPTag from "../TechPTag";

const CardFront = ({project}) => {
  const {projectImage, projectTitle, projectStrapline, projectLiveLink, projectRepoLink, projectTechStack} = project;

console.log(projectTechStack);

  return (
    <section className={styles.cardFront}>
      <img src={projectImage} alt= {`${projectTitle}`} />
      <h3>{projectTitle}</h3>
      <p>{projectStrapline}</p>
      <div className={styles.techBar}>
        <p><a href= {projectLiveLink} target="_blank">Launch</a> | <a href= {projectRepoLink} target="_blank">GitHub</a></p>
          <p className={styles.techStack}>
          {projectTechStack.map(tech => 
          <p>{tech}</p>)}
          </p>
          {/* <p className={styles.techStack}>{projectTechStack}</p> */}
      </div>
    </section>
  );
};

export default CardFront;
