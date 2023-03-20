/*
    Checkers Game
*/

// let pl1 = 1
// let p1q = -1
// let p2 = 2
// let p2q = -2
let turn = null
let rPieces = 12
let bPeices = 12



init()

function init() {
   
    board = [
      [0, 2, 0, 2, 0, 2, 0, 2], // col 0
      [2, 0, 2, 0, 2, 0, 2, 0], // col 1
      [0, 2, 0, 2, 0, 2, 0, 2], // col 2
      [0, 0, 0, 0, 0, 0, 0, 0], // col 3
      [0, 0, 0, 0, 0, 0, 0, 0], // col 4
      [1, 0, 1, 0, 1, 0, 1, 0], // col 5
      [0, 1, 0, 1, 0, 1, 0, 1], // col 6
      [1, 0, 1, 0, 1, 0, 1, 0], // col 7
    ]
    render()
}

  function canMovePiece(cor1, cor2, move) {

    if (cor1 >= 0 && cor1 < board.length && cor2 >= 0 && cor2 < board[cor1].length) {
      if (move === "up-left" && cor1 > 0 && cor2 > 0 && board[cor1-1][cor2-1] === 0) {
        return true;
      } else if (move === "up-right" && cor1 > 0 && cor2 < board[cor1].length-1 && board[cor1-1][cor2+1] === 0) {
        return true;
      } 
    return false;
  }
}

clickedPieceListener() {
  if
}

