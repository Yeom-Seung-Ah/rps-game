import React from "react";
import styles from "../css/Card.module.css";

const Card = ({ title, colorClass, img, status, children }) => {
  return (
    <div
      className={`${styles.card} ${styles[colorClass]} ${
        status === "win" ? styles.win : status === "lose" ? styles.lose : ""
      }`}
    >
      <h2>{title}</h2>
      <img className={styles.img} src={img}></img>
      <div>{children}</div>
    </div>
  );
};

export default Card;
