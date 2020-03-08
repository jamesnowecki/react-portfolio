import React from "react";
import styles from "./CardFront.module.scss";

const CardFront = (props) => {

  const {projectImage, projectTitle, projectStrapline, projectLink} = props;

  return (
    <section>
      <img src={projectImage} alt= {`${projectTitle} picture`} />
      <h3>{projectTitle}</h3>
      <p>{projectStrapline}</p>
      <button>More</button>
      <a href= {projectLink}>GitHub</a>
    </section>
  );
};

export default CardFront;
