import styles from "./styles.module.css";

// This component displays a letter in the game.
// It can be used to show the letters guessed by the player.

type Props = {
  value?: string;
  size?: "small" | "default";
  color?: "default" | "correct" | "wrong";
};

export function Letter({
  value = "",
  size = "default",
  color = "default",
}: Props) {
  return (
    <div
      className={`
      ${styles.letter} 
      ${size === "small" && styles.letterSmall} 
      ${color === "correct" && styles.letterCorrect}
      ${color === "wrong" && styles.letterWrong}
      `}
    >
      <span>{value}</span>
    </div>
  );
}
