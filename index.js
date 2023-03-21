/*
    Checkers Game
*/

// let pl1 = 1
// let p1q = -1
// let p2 = 2
// let p2q = -2
let board = [
  [0, 2, 0, 2, 0, 2, 0, 2], // col 0
  [2, 0, 2, 0, 2, 0, 2, 0], // col 1
  [0, 2, 0, 2, 0, 2, 0, 2], // col 2
  [0, 0, 0, 0, 0, 0, 0, 0], // col 3
  [0, 0, 0, 0, 0, 0, 0, 0], // col 4
  [1, 0, 1, 0, 1, 0, 1, 0], // col 5
  [0, 1, 0, 1, 0, 1, 0, 1], // col 6
  [1, 0, 1, 0, 1, 0, 1, 0], // col 7
]
let turn = null
let rPieces = 12
let bPieces = 12
let selectedPiece = null 
let player


//init()
// function init() {   
//     board = [
//       [0, 2, 0, 2, 0, 2, 0, 2], // col 0
//       [2, 0, 2, 0, 2, 0, 2, 0], // col 1
//       [0, 2, 0, 2, 0, 2, 0, 2], // col 2
//       [0, 0, 0, 0, 0, 0, 0, 0], // col 3
//       [0, 0, 0, 0, 0, 0, 0, 0], // col 4
//       [1, 0, 1, 0, 1, 0, 1, 0], // col 5
//       [0, 1, 0, 1, 0, 1, 0, 1], // col 6
//       [1, 0, 1, 0, 1, 0, 1, 0], // col 7
//     ]
//     //render()
// }
 console.log(board[0].length)

  function canMovePiece(row, col, move) {

    if (row >= 0 && row < board.length && col >= 0 && col < board[col].length) {
      if (move === "up-left" && col > 0 && cor2 > 0 && board[cor1-1][cor2-1] === 0) {
        return true;
      } else if (move === "up-right" && cor1 > 0 && cor2 < board[cor1].length-1 && board[cor1-1][cor2+1] === 0) {
        return true;
      } 
    return false;
  }
}

function isKing(){

}

function selectedPieces(){
  if (turn == true) {
    player = rPieces
  } else {
    player = bPieces
  }
}

function clickedPieceListener() {
  if (turn == true) {
    let i = 0
    while (i < rPieces.length){
      rPieces[i].addEventListener('click', selectedPieces)
    i++
    }
  } else {
    for (let i = 0; i < bPieces; i++){
      bPieces[i].addEventListener('click', selectedPieces)
    }
  }
}

function availableSpaces() {
  for(let r = 0; r < board.length; r++ ){
      for(let c = 0; c < board.length; c++) {
        
      }
  }
}