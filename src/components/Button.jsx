import React from "react";
import styles from "../css/Button.module.css";
import scissors from "../assets/scissors.png";
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";

const Button = ({ onChoice, isPlaying }) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.green}
        onClick={() => onChoice("가위")}
        disabled={isPlaying}
      >
        <img src={scissors} alt="가위"></img>
        <span>가위</span>
      </button>
      <button
        className={styles.blue}
        onClick={() => onChoice("바위")}
        disabled={isPlaying}
      >
        <img src={rock} alt="바위"></img>
        <span>바위</span>
      </button>
      <button
        className={styles.orange}
        onClick={() => onChoice("보")}
        disabled={isPlaying}
      >
        <img src={paper} alt="보"></img>
        <span>보</span>
      </button>
    </div>
  );
};

export default Button;
