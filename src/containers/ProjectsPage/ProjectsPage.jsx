import React from "react";
import styles from "./ProjectsPage.module.scss";
import projects from "../../data/projects";
import CardFront from "../../components/CardFront";

const ProjectsPage = () => {
  return (
    <>
    <section className={styles.projectsPage}>
      <h2>Projects</h2>
      <div className={styles.projectsBox}>
        {projects.map(project => (
          <div>
            <CardFront project={project} />
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default ProjectsPage;
