import React from "react";
import styles from "./ProjectsPage.module.scss";
import projects from "../../data/projects";
import Card from "../../components/Card";

const ProjectsPage = () => {
<<<<<<< HEAD
console.log(projects)
=======

>>>>>>> 2f0550a3033d7b77c393d96dcd7b855a4edcb413
  return (
    <section className={styles.projectsPage}>
      <h2>Projects</h2>
      <div className={styles.projectsBox}>
        {projects.map(project => (
<<<<<<< HEAD
          <div key={project.projectTitle}>
            <Card  project={project} />
=======
          <div>
            <Card key={project.projectTitle} project={project} />
>>>>>>> 2f0550a3033d7b77c393d96dcd7b855a4edcb413
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
