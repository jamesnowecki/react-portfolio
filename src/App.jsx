import React from 'react';
import styles from './App.module.scss';
import projects from './data/projects';
import CardFront from './components/CardFront'

const App = () => {
  return (
    <>
    <div className={styles.App}>
      Rockin in the free world
    </div>
    <div>     
      {projects.map(project => (
      <div>
        <CardFront project={project} />
      </div>
    ))}
    </div>
    
    </>
  );
}
export default App;
