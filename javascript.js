const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""]
  const getBoard = () => board
  const resetBoard = () => board = ["", "", "", "", "", "", "", "", ""]
  const markSquare = function (index, symbol) {
    board[index] = symbol
  }
  return { getBoard, resetBoard, markSquare }
})()

const Player = function (name, symbol) {
  return { name, symbol }
}

const player1 = Player("Pedro", "X")
const player2 = Player("Kim", "O")

let currentPlayer = player1
let turnCount = 1

const game = function () {

  const turnAlternator = function () {
    currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1
  }

  const play = function (choice) {

    if (Gameboard.getBoard()[choice] === "") {
      Gameboard.markSquare(choice, currentPlayer.symbol)
      turnCount = turnCount + 0.5
      turnAlternator()
      console.log(`It is now ${currentPlayer.name}'s turn`);
      console.log(Gameboard.getBoard())
    } else { console.log("This square has already been selected, choose a different square."); }

    if (turnCount > 2.5) {
      console.log("Checking wincon");
    }
  }

  return { play }
}

