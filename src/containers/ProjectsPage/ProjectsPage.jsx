import React from "react";
import styles from "./ProjectsPage.module.scss";
import projects from "../../data/projects";
import Card from "../../components/Card";
import PhDPDF from "../../assets/NoweckiThesis_PhD_2014.pdf";

const ProjectsPage = () => {
  return (
    <section className={styles.projectsPage}>
      <div className={styles.profile}>
        <h2>Profile</h2>
        <p>A desire to reapply the logical skillset developed in <a href={PhDPDF} target="_blank">research</a> and a taste of programming (a small amount of R) led me to undertake a 12-week intensive coding, programming and software development bootcamp at <a href="https://www.nology.io/" target="_blank">_nology</a>, retraining as a software developer. I am particularly interested in automation, testing, applications for AI, and data-driven decision making. Ultimately, however, I enjoy finding novel solutions to interesting problems, something I enjoy through playing boardgames in my spare time.</p>
      </div>
      <h2>Projects</h2>
      <div className={styles.projectsBox}>
        {projects.map(project => (
          <div key={project.projectTitle}>
            <Card  project={project} />
          </div>
        ))}
      </div>
      <div className={styles.skills}>
        <h2>Skills</h2>
      </div>
    </section>
  );
};

export default ProjectsPage;
