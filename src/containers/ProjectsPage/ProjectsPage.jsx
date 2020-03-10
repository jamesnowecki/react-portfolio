import React from "react";
import styles from "./ProjectsPage.module.scss";
import projects from "../../data/projects";
import CardFront from "../../components/CardFront";

const ProjectsPage = () => {
  return (
    <div className={styles.projectsPage}>     
    {projects.map(project => (
    <div>
      <CardFront project={project} />
    </div>
  ))}
  </div>
  );
};

export default ProjectsPage;
