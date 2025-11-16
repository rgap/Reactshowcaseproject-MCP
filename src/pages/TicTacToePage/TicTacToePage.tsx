import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Board } from "../../components/Board";
import { Button, INTENT } from "../../components/Button";
import { useI18n } from "../../hooks/useI18n";
import {
  Board as BoardType,
  calculateWinner,
  isBoardFull,
} from "../../utils/tictactoe";
import styles from "./TicTacToePage.module.css";

interface GameHistory {
  squares: BoardType;
}

const STORAGE_KEY = "tictactoe-game-state";

function TicTacToePage() {
  const { t } = useI18n();
  const [history, setHistory] = useState<GameHistory[]>([
    { squares: Array(9).fill(null) },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;
  const { winner, line: winningLine } = calculateWinner(currentSquares);
  const isTied = !winner && isBoardFull(currentSquares);

  // Load game state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      try {
        const { history: savedHistory, currentMove: savedMove } =
          JSON.parse(savedState);
        setHistory(savedHistory);
        setCurrentMove(savedMove);
      } catch (error) {
        // If parsing fails, start with fresh game
      }
    }
  }, []);

  // Save game state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ history, currentMove })
    );
  }, [history, currentMove]);

  const handlePlay = (nextSquares: BoardType) => {
    const nextHistory = [...history.slice(0, currentMove + 1), { squares: nextSquares }];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const handleSquareClick = (index: number) => {
    if (currentSquares[index] || winner) {
      return;
    }
    const nextSquares = currentSquares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";
    handlePlay(nextSquares);
  };

  const jumpTo = (move: number) => {
    setCurrentMove(move);
  };

  const handleReset = () => {
    setHistory([{ squares: Array(9).fill(null) }]);
    setCurrentMove(0);
  };

  const getStatus = () => {
    if (winner) {
      return `${t("tictactoe-winner")}${winner}`;
    }
    if (isTied) {
      return t("tictactoe-tied-game");
    }
    return `${t("tictactoe-next-player")}${xIsNext ? "X" : "O"}`;
  };

  return (
    <div className={styles["tictactoe-page"]}>
      <Header showBadge badgeText={t("tictactoe-title")} />
      <main className={styles["tictactoe-page__content"]}>
        <div className={styles["tictactoe-page__container"]}>
          <div className={styles["tictactoe-page__game-container"]}>
            <div className={styles["tictactoe-page__game-area"]}>
              <div className={styles["tictactoe-page__board-section"]}>
                <p className={styles["tictactoe-page__status"]}>
                  {getStatus()}
                </p>
                <Board
                  squares={currentSquares}
                  winningLine={winningLine}
                  onSquareClick={handleSquareClick}
                  disabled={!!winner || isTied}
                />
              </div>
              <div className={styles["tictactoe-page__history-section"]}>
                <Button
                  onClick={handleReset}
                  intent={INTENT.DANGER}
                  className={styles["tictactoe-page__reset-button"]}
                >
                  {t("tictactoe-reset")}
                </Button>
                <p className={styles["tictactoe-page__history-title"]}>
                  {t("tictactoe-go-to")}
                </p>
                <div className={styles["tictactoe-page__history-moves"]}>
                  {history.map((_, move) => (
                    <Button
                      key={move}
                      onClick={() => jumpTo(move)}
                      intent={INTENT.PRIMARY}
                      className={styles["tictactoe-page__move-button"]}
                      disabled={move > currentMove}
                    >
                      {move === 0
                        ? t("tictactoe-game-start")
                        : `${t("tictactoe-move")} ${move}`}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { TicTacToePage };
