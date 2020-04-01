import React from "react";
import styles from "./App.module.scss";
import Router from "./containers/Routes";
import ProfileBar from "./containers/ProfileBar";
import library from "./data/fa-library";

const App = () => {

  return (
  
  <div className={styles.app}>
    <ProfileBar />
    <Router />
  </div>

  )};

export default App;
