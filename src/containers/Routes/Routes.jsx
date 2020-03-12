import React from "react";
import styles from "./Routes.module.scss";
import {Router, Redirect} from "@reach/router";
import ProjectsPage from "../ProjectsPage";
import NotFound from "../NotFound";

const Routes = () => {
  return (
  <div className={styles.router}><Router>
  <Redirect noThrow from= "/" to= "projects-page" />
  <ProjectsPage path= "projects-page" />
  <NotFound default/>
  </Router></div>
  );
};

export default Routes;
