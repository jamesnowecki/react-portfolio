import React from "react";
import styles from "./Card.module.scss";
import CardFront from "../CardFront";
import CardBack from "../CardBack";
import { useState } from "react";

const Card = ({project}) => {

  const [isFaceUp, toggleFaceUp] = useState(true);

  const flipStyle = isFaceUp ? "" : styles.faceDown;
  
    return (
      <section className={`${styles.projectCard} ${flipStyle}`} onClick= {() => toggleFaceUp(!isFaceUp)}>
        <div className={styles.front}>
          <CardFront project={project} />
        </div>
        <div className={styles.back}>
          <CardBack project={project} />
        </div>
      </section>
    );
  };

export default Card;
