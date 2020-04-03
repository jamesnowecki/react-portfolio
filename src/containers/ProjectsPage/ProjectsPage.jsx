import React from "react";
import styles from "./ProjectsPage.module.scss";
import projects from "../../data/projects";
import Card from "../../components/Card";

const ProjectsPage = () => {
console.log(projects)
  return (
    <section className={styles.projectsPage}>
      <h2>Projects</h2>
      <div className={styles.projectsBox}>
        {projects.map(project => (
          <div key={project.projectTitle}>
            <Card  project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
