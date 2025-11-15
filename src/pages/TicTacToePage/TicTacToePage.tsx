import { useState, useEffect } from "react";
import { useI18n } from "../../hooks/useI18n";
import { Board } from "../../components/Board";
import {
  Board as BoardType,
  calculateWinner,
  isBoardFull,
} from "../../utils/tictactoe";
import { cx } from "../../utils/cx";
import styles from "./TicTacToePage.module.css";

const STORAGE_KEY = "tictactoe-game-state";

interface GameState {
  history: BoardType[];
  currentMove: number;
}

function TicTacToePage() {
  const { t } = useI18n();

  // Load initial state from localStorage or use default
  const [history, setHistory] = useState<BoardType[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: GameState = JSON.parse(saved);
        return parsed.history;
      }
    } catch (error) {
      console.error("Error loading game state:", error);
    }
    return [Array(9).fill(null)];
  });

  const [currentMove, setCurrentMove] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: GameState = JSON.parse(saved);
        return parsed.currentMove;
      }
    } catch (error) {
      console.error("Error loading game state:", error);
    }
    return 0;
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    try {
      const gameState: GameState = {
        history,
        currentMove,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
    } catch (error) {
      console.error("Error saving game state:", error);
    }
  }, [history, currentMove]);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const winnerInfo = calculateWinner(currentSquares);
  const isTied = !winnerInfo && isBoardFull(currentSquares);

  function handlePlay(nextSquares: BoardType) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  function handleSquareClick(i: number) {
    if (currentSquares[i] || winnerInfo) {
      return;
    }
    const nextSquares = currentSquares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    handlePlay(nextSquares);
  }

  function handleReset() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  let status: string;
  if (winnerInfo) {
    status = `${t("tictactoe-winner")}${winnerInfo.winner}`;
  } else if (isTied) {
    status = t("tictactoe-tied-game");
  } else {
    status = `${t("tictactoe-next-player")}${xIsNext ? "X" : "O"}`;
  }

  const moves = history.map((_, move) => {
    const isActive = move <= currentMove;
    const description =
      move === 0 ? t("tictactoe-game-start") : `${t("tictactoe-move")} ${move}`;

    return (
      <button
        key={move}
        onClick={() => jumpTo(move)}
        className={cx(
          styles["tic-tac-toe-page__move-button"],
          !isActive && styles["tic-tac-toe-page__move-button--inactive"]
        )}
        disabled={!isActive}
      >
        <p
          className={cx(
            styles["tic-tac-toe-page__move-text"],
            !isActive && styles["tic-tac-toe-page__move-text--inactive"]
          )}
        >
          {description}
        </p>
      </button>
    );
  });

  return (
    <div className={styles["tic-tac-toe-page"]}>
      <div className={styles["tic-tac-toe-page__content"]}>
        <div className={styles["tic-tac-toe-page__card"]}>
          <div className={styles["tic-tac-toe-page__game-container"]}>
            <div className={styles["tic-tac-toe-page__board-section"]}>
              <p className={styles["tic-tac-toe-page__status"]}>{status}</p>
              <Board
                squares={currentSquares}
                onClick={handleSquareClick}
                winningLine={winnerInfo?.line}
                disabled={!!winnerInfo || isTied}
              />
            </div>
            <div className={styles["tic-tac-toe-page__history-section"]}>
              <button
                className={styles["tic-tac-toe-page__reset"]}
                onClick={handleReset}
              >
                <p className={styles["tic-tac-toe-page__reset-text"]}>
                  {t("tictactoe-reset")}
                </p>
              </button>
              <div className={styles["tic-tac-toe-page__history"]}>
                <p className={styles["tic-tac-toe-page__history-title"]}>
                  {t("tictactoe-go-to")}
                </p>
                <div className={styles["tic-tac-toe-page__history-moves"]}>
                  {moves}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TicTacToePage };

