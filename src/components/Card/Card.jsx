import React from "react";
import styles from "./Card.module.scss";
import CardFront from "../CardFront";
import CardBack from "../CardBack";
import { useState } from "react";

const Card = ({project}) => {

  const [isFaceUp, toggleFaceUp] = useState(true);

  const cardFrontJSX =  <div className={styles.front}><CardFront project={project} /></div>;

  const cardBackJSX = <div className={styles.back}><CardBack project={project} /></div>;

  const cardJSX = isFaceUp ? cardFrontJSX : cardBackJSX;
  
    return (
      <section className={`${styles.projectCard}`} onClick= {() => toggleFaceUp(!isFaceUp)}>
       {cardJSX}
      </section>
    );
  };

export default Card;
