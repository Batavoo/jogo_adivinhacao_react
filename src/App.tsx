import styles from "./app.module.css";

import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Header } from "./components/Header";
import { LettersUsed } from "./components/LettersUsed";

export default function App() {
  function handleRestartGame() {
    alert("Reiniciar o jogo!");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />

        <Tip tip="Uma das linguagens de programacao mais utilizadas" />

        <div className={styles.words}>
          <Letter value="R" />
          <Letter value="R" />
          <Letter value="R" />
          <Letter value="R" />
          <Letter value="R" />
        </div>

        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar" />
        </div>

        <LettersUsed />
      </main>
    </div>
  );
}
