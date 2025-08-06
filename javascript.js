const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""]
  const getBoard = () => board
  const resetBoard = () => board = ["", "", "", "", "", "", "", "", ""]
  const markSquare = function (index, symbol) {
    if (board[index] === "") {
      board[index] = symbol
    } else { console.log("Square already marked, choose a different square"); }
  }
  return { getBoard, resetBoard, markSquare }
})()