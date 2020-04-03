import React from "react";
import styles from "./App.module.scss";
import Router from "./containers/Routes";
import ProfileBar from "./containers/ProfileBar";
import library from "./data/fa-library";

const App = () => {

  return (
  
  <div className={styles.app}>
    <section className={styles.profileBar}>
      <ProfileBar />
    </section>
    <section className={styles.mainContent}>
      <Router />
    </section>
  </div>

  )};

export default App;
