import React from "react";
import styles from "../css/Card.module.css";

const Card = ({ title, colorClass, children }) => {
  return (
    <div className={`${styles.card} ${styles[colorClass]}`}>
      <h2>{title}</h2>
      <img></img>
      <div>{children}</div>
    </div>
  );
};

export default Card;
