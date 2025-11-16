import { useState, useEffect } from "react";
import { calculateWinner, isBoardFull } from "../utils/tictactoe";
import type { Board, Square } from "../utils/tictactoe";

interface GameState {
  history: Board[];
  currentMove: number;
}

const STORAGE_KEY = "tictactoe-game-state";

function loadGameState(): GameState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    // Ignore errors
  }
  return {
    history: [Array(9).fill(null)],
    currentMove: 0,
  };
}

function saveGameState(state: GameState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    // Ignore errors
  }
}

export function useTicTacToe() {
  const [gameState, setGameState] = useState<GameState>(loadGameState);

  const history = gameState.history;
  const currentMove = gameState.currentMove;
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  useEffect(() => {
    saveGameState(gameState);
  }, [gameState]);

  function handlePlay(nextSquares: Board) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setGameState({
      history: nextHistory,
      currentMove: nextHistory.length - 1,
    });
  }

  function jumpTo(move: number) {
    setGameState({
      ...gameState,
      currentMove: move,
    });
  }

  function resetGame() {
    setGameState({
      history: [Array(9).fill(null)],
      currentMove: 0,
    });
  }

  const winnerInfo = calculateWinner(currentSquares);
  const winner = winnerInfo?.winner || null;
  const winningLine = winnerInfo?.line || [];
  const isDraw = !winner && isBoardFull(currentSquares);

  return {
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
  };
}

