import React from "react";
import styles from "../css/Button.module.css";
import scissors from "../assets/scissors.png";
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";

const Button = ({ onChoice }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.green} onClick={() => onChoice("scissors")}>
        <img src={scissors} alt="가위"></img>
        <span>가위</span>
      </button>
      <button className={styles.blue} onClick={() => onChoice("rock")}>
        <img src={rock} alt="바위"></img>
        <span>바위</span>
      </button>
      <button className={styles.orange} onClick={() => onChoice("paper")}>
        <img src={paper} alt="보"></img>
        <sapn>보</sapn>
      </button>
    </div>
  );
};

export default Button;
