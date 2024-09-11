const board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function makeMove(cell, index) {
  if (board[index] === "" && gameActive) {
    board[index] = currentPlayer;
    cell.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner() {
  let roundWon = false;
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    gameActive = false;
    document.getElementById(
      "message"
    ).innerText = `Player ${currentPlayer} Wins!`;
    return;
  }

  if (!board.includes("")) {
    gameActive = false;
    document.getElementById("message").innerText = "It's a Draw!";
    return;
  }
}

function resetGame() {
  currentPlayer = "X";
  gameActive = true;
  board.fill("");
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerText = ""));
  document.getElementById("message").innerText = "";
}
