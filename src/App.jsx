import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import styles from "./css/App.module.css";

function App() {
  return (
    <div className={styles.fullscreen}>
      <div className={styles.wrapper_main}>
        <h1>가위바위보 게임</h1>
        <div className={styles.wrapper_contet}>
          <Card title="너님" colorClass="blue">
            <p>선택하세요</p>
          </Card>
          <div className={styles.wrapper_button}>
            <Button />
            <button className={styles.retry}>다시하기</button>
          </div>
          <Card title="상대선수" colorClass="orange">
            <p>선택하세요</p>
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
