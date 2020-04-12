import React from "react";
import styles from "./ProjectsPage.module.scss";
import projects from "../../data/projects";
import Card from "../../components/Card";
import PhDPDF from "../../assets/NoweckiThesis_PhD_2014.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectsPage = () => {
  return (
    <section className={styles.projectsPage}>
      <div className={styles.profile}>
        <h2>Profile</h2>
        <p>
          A desire to reapply the logical skillset developed in{" "}
          <a href={PhDPDF} target="_blank">
            research
          </a>{" "}
          and a taste of programming (a small amount of R) led me to undertake a
          12-week intensive coding, programming and software development
          bootcamp at{" "}
          <a href="https://www.nology.io/" target="_blank">
            _nology
          </a>
          , retraining as a software developer. I am particularly interested in
          automation, testing, applications for AI, and data-driven decision
          making. Ultimately, however, I enjoy finding novel solutions to
          interesting problems, something I enjoy through playing boardgames in
          my spare time.
        </p>
      </div>
      <h2>Projects</h2>
      <p>Click a project for more info.</p>
      <div className={styles.projectsBox}>
        {projects.map((project) => (
          <div key={project.projectTitle}>
            <Card project={project} />
          </div>
        ))}
      </div>
      <div className={styles.experience}>
        <h2>Experience</h2>
        <section className={styles.stack}>
          <div>
            <p>
              <FontAwesomeIcon icon={["fab", "git-alt"]} /> Version control with
              Git, GitHub flow
            </p>
            <p>
              <FontAwesomeIcon icon={["fab", "yarn"]} /> Yarn package manager,
              exposure to NPM
            </p>
            <p>
              <FontAwesomeIcon icon={["fab", "react"]} /> React
            </p>
            <p>
              <FontAwesomeIcon icon={["fab", "js-square"]} /> JavaScript ES6
            </p>
            <p>
              <FontAwesomeIcon icon={["fab", "html5"]} /> HTML5
            </p>
            <p>
              <FontAwesomeIcon icon={["fab", "css3-alt"]} /> CSS3
            </p>
            <p>
              <FontAwesomeIcon icon={["fab", "sass"]} /> SASS
            </p>
            <p>
              <FontAwesomeIcon icon={["fab", "bootstrap"]} /> Bootstrap
            </p>
          </div>
          <div className={styles.right}>
            <p>Mobile first web-development</p>
            <p>Unit testing with Jest and Enzyme</p>
            <p>Firebase BaaS and CRUD</p>
            <p>Authentication</p>
            <p>REST APIs</p>
            <p>CI/CD Travis CI</p>
            <p>Remote working</p>

            <br></br>
            <p>Excellent presentation skills</p>
            <p>Technical writing</p>
            <p></p>
          </div>
        </section>
        <br></br>
        <p>
          Exposure to and working knowledge of TypeScript, Node.js, Express.js,
          Material UI, React-Chart-JS2 , Agile workflow (Kanban and Scrum), and
          Test-Driven Development.
        </p>
      </div>
    </section>
  );
};

export default ProjectsPage;
