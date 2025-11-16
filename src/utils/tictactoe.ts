export type SquareValue = "X" | "O" | null;
export type Board = SquareValue[];

interface WinnerResult {
  winner: SquareValue;
  line: number[] | null;
}

export function calculateWinner(squares: Board): WinnerResult {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line };
    }
  }

  return { winner: null, line: null };
}

export function isBoardFull(squares: Board): boolean {
  return squares.every((square) => square !== null);
}

