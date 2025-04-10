import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import styles from "./css/App.module.css";
import { useState } from "react";
import scissors from "./assets/scissors.png";
import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import questionmark from "./assets/questionmark.png";

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null); // "win" | "lose" | "draw"
  const [isPlaying, setIsPlaying] = useState(false);

  const choices = ["가위", "바위", "보"];

  const handleUserChoice = (choice) => {
    if (isPlaying) return; // 중복 클릭 방지
    setIsPlaying(true);
    //유저의 선택
    setUserChoice(choice);
    //컴퓨터의 선택
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);

    const gameResult = determineResult(choice, randomChoice);
    setResult(gameResult);

    // 1초 후 다시 버튼 활성화
    setTimeout(() => {
      setIsPlaying(false);
    }, 1000);
  };

  const getImage = (choice) => {
    switch (choice) {
      case "가위":
        return scissors;
      case "바위":
        return rock;
      case "보":
        return paper;
      default:
        return questionmark;
    }
  };
  const determineResult = (user, computer) => {
    if (user === computer) return "draw";

    if (
      (user === "가위" && computer === "보") ||
      (user === "바위" && computer === "가위") ||
      (user === "보" && computer === "바위")
    ) {
      return "win";
    }

    return "lose";
  };
  const handleReset = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <div className={styles.fullscreen}>
      <div className={styles.wrapper_main}>
        <h1>가위바위보 게임</h1>

        <div className={styles.wrapper_contet}>
          <Card
            title="너님"
            colorClass="blue"
            img={getImage(userChoice)}
            status={
              result === "win" ? "win" : result === "lose" ? "lose" : null
            }
          >
            <p>
              {result === "win"
                ? "승리"
                : result === "lose"
                ? "패배"
                : result === "draw"
                ? "무승부"
                : "선택하세요"}
            </p>
          </Card>

          <div className={styles.wrapper_button}>
            <Button onChoice={handleUserChoice} isPlaying={isPlaying} />
            <button className={styles.retry} onClick={handleReset}>
              다시하기
            </button>
          </div>

          <Card
            title="상대선수"
            colorClass="orange"
            img={getImage(computerChoice)}
            status={
              result === "lose" ? "win" : result === "win" ? "lose" : null
            }
          >
            <p>
              {result === "lose"
                ? "승리"
                : result === "win"
                ? "패배"
                : result === "draw"
                ? "무승부"
                : "선택하세요"}
            </p>
          </Card>
        </div>

        <div>
          <p>버튼을 클릭하여 가위, 바위, 보 중 하나를 선택하세요.</p>
          <p>컴퓨터는 랜덤으로 선택합니다.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
