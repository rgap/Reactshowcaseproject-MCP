import { useContext } from "react";
import { I18nContext } from "../../contexts";
import { Board, LanguagePicker, Breadcrumb } from "../../components";
import { useTicTacToe } from "../../hooks/useTicTacToe";
import styles from "./TicTacToePage.module.css";
import { cx } from "../../utils/cx";

function TicTacToePage() {
  const { t } = useContext(I18nContext);
  const {
    currentSquares,
    xIsNext,
    winner,
    winningLine,
    isDraw,
    history,
    currentMove,
    handlePlay,
    jumpTo,
    resetGame,
  } = useTicTacToe();

  const getStatus = () => {
    if (winner) {
      return `${t("tictactoe-winner")}: ${winner}`;
    }
    if (isDraw) {
      return t("tictactoe-tied-game");
    }
    return `${t("tictactoe-next-player")}: ${xIsNext ? "X" : "O"}`;
  };

  const moves = history.map((_, move) => {
    const description =
      move === 0
        ? t("tictactoe-game-start")
        : `${t("tictactoe-move")} ${move}`;

    // Only render if it's within the history
    if (move <= currentMove) {
      return (
        <button
          key={move}
          className={styles["tictactoe__history-button"]}
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      );
    }

    // Render placeholder for empty slots
    return (
      <div
        key={move}
        className={cx(
          styles["tictactoe__history-button"],
          styles["tictactoe__history-button--empty"]
        )}
      />
    );
  });

  // Fill remaining slots to always show 10 buttons (0-9)
  while (moves.length < 10) {
    moves.push(
      <div
        key={moves.length}
        className={cx(
          styles["tictactoe__history-button"],
          styles["tictactoe__history-button--empty"]
        )}
      />
    );
  }

  return (
    <div className={styles.tictactoe}>
      <header className={styles.tictactoe__header}>
        <div className={styles["tictactoe__header-container"]}>
          <h1 className={styles.tictactoe__title}>{t("app-title")}</h1>
          <Breadcrumb>{t("project-tictactoe")}</Breadcrumb>
          <LanguagePicker />
        </div>
      </header>
      <main className={styles.tictactoe__main}>
        <div className={styles.tictactoe__content}>
          <div className={styles["tictactoe__game-card"]}>
            <div className={styles["tictactoe__game-container"]}>
              <div className={styles["tictactoe__board-section"]}>
                <div className={styles.tictactoe__status}>{getStatus()}</div>
                <div className={styles["tictactoe__board-wrapper"]}>
                  <Board
                    squares={currentSquares}
                    onPlay={handlePlay}
                    xIsNext={xIsNext}
                    winningLine={winningLine}
                    disabled={!!winner || isDraw}
                  />
                </div>
              </div>
              <div className={styles["tictactoe__history-section"]}>
                <button
                  className={styles["tictactoe__reset-button"]}
                  onClick={resetGame}
                >
                  {t("tictactoe-reset")}
                </button>
                <h2 className={styles["tictactoe__history-title"]}>
                  {t("tictactoe-goto")}
                </h2>
                <div className={styles["tictactoe__history-list"]}>{moves}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { TicTacToePage };

