import React, { useState } from "react";
import "./styles.css";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function handleClick(index) {
    if (board[index] !== null || winner !== null) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const newWinner = checkForWinner(newBoard);
    if (newWinner !== null) {
      setWinner(newWinner);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  }

  function checkForWinner(board) {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  function renderCell(index) {
    return (
      <div className="cell" onClick={() => handleClick(index)}>
        {board[index]}
      </div>
    );
  }

  function renderBoard() {
    return (
      <div className="board">
        <div className="row">
          {renderCell(0)}
          {renderCell(1)}
          {renderCell(2)}
        </div>
        <div className="row">
          {renderCell(3)}
          {renderCell(4)}
          {renderCell(5)}
        </div>
        <div className="row">
          {renderCell(6)}
          {renderCell(7)}
          {renderCell(8)}
        </div>
      </div>
    );
  }

  function renderStatus() {
    if (winner !== null) {
      return `Winner: ${winner}`;
    } else {
      return `Current player: ${currentPlayer}`;
    }
  }
  function resetBoard() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  }

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      {renderBoard()}
      <p>{renderStatus()}</p>
      <button onClick={resetBoard}>Reset Board</button>
    </div>
  );
}

export default TicTacToe;
