const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""]
  const getBoard = () => board
  const resetBoard = () => board = ["", "", "", "", "", "", "", "", ""]
  const markSquare = function (index, symbol) {
    board[index] = symbol
  }
  return { getBoard, resetBoard, markSquare }
})()

// Call game().play() to pick a square
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

  const checkWinner = function (board, marker) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    // Checks that in any of the combinations all of the indexes are the same as the marker
    return winningCombinations.some(combination => {
      return combination.every(index => board[index] === marker);
    })
  }

  const declareWinner = function (currentPlayer) {
    console.log(`${currentPlayer.name} is the winner`);
  }

  const play = function (choice) {

    if (Gameboard.getBoard()[choice] === "") {
      Gameboard.markSquare(choice, currentPlayer.symbol)
      turnCount = turnCount + 0.5
    } else { console.log("This square has already been selected, choose a different square."); }

    if (turnCount > 2.5) {
      console.log("Checking wincon");
      if (checkWinner(Gameboard.getBoard(), currentPlayer.symbol) === true) {
        declareWinner(currentPlayer)
        return
      }
    }
    turnAlternator()
    console.log(`It is now ${currentPlayer.name}'s turn`);
  }

  return { play }
}

game().play(0)
game().play(4)
game().play(1)
game().play(5)
game().play(2)
