// QUERYSELECTORS
var gameBoard = document.getElementById('centerContainer');
var boardTitle = document.getElementById('boardTitle');
var gameSpaces = document.querySelectorAll('.square');
var sq1 = document.getElementById('sq1');
var sq2 = document.getElementById('sq2');
var sq3 = document.getElementById('sq3');
var sq4 = document.getElementById('sq4');
var sq5 = document.getElementById('sq5');
var sq6 = document.getElementById('sq6');
var sq7 = document.getElementById('sq7');
var sq8 = document.getElementById('sq8');
var sq9 = document.getElementById('sq9');

var currentGame = new Game();
// BUTTONS

// EVENTLISTENERS
gameBoard.addEventListener('click', runGame);

function runGame() {
  chooseSquare();
  currentGame.collectSquares(currentGame.currentPlayer);
  currentGame.checkforWin();
  currentGame.checkForDraw();
  currentGame.updatePlayerTurn();
  updateBoardTitle();
  disableClick();
  console.log('currentGame', currentGame);
  resetGame();
}

function chooseSquare() {
  var idTarget = event.target.id;
  for (var i = 0; i < currentGame.gameBoard.length; i++) {
    if (currentGame.gameBoard[i] === idTarget) {
      eval(idTarget).innerHTML = currentGame.currentPlayer.token;
    }
  }
}

function updateBoardTitle() {
  if (!this.hasWinner && currentGame.player1.turn) {
    boardTitle.innerText = `It's X turn!!!`;
  } else if (!this.hasWinner && currentGame.player2.turn) {
    boardTitle.innerText = `It's O turn!!!`;
  }
  // SEPERATE INTO 2 FUNCTIONS??
  if (currentGame.hasWinner) {
    boardTitle.innerText = `${currentGame.currentPlayer.token} wins!!!`;
  // } else if (currentGame.isDraw) {
  //   boardTitle.innerText = 'It\'s a draw! Please play again!';
  }
}

function disableClick() {
  if (currentGame.hasWinner) {
    gameBoard.removeEventListener('click', runGame);
  }
}

function resetGame() {
  if (currentGame.hasWinner || currentGame.hasDraw) {
    timeOut();
    currentGame.resetGameBoard();
    gameBoard.addEventListener('click', runGame);
  }
}

function timeOut() {
  setTimeout(function() {
    clearGameBoard();
    updateBoardTitle();
  }, 5000);
}

function clearGameBoard() {
  for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].innerHTML = '';
  }
}


// *****  I AM A PLAYER  *****
  // who goes first???
    // new games start with player1 but if its a persisting game, whoever has won the previous?
    // no switching who goes first

  // I click a square, my token appears
      // board title changes to say it's the other player's   turn
      // then other user selects a square
        // board title changes to say it's the other player's turn
        // repeat until game is won or there is a draw

    // when a game is won, 'it's ___ turn!', will display 'it's "winners" turn!'
      // 'wins' will update on player who won
      // game board will automatically reset after a few seconds

    // if game is a draw, no one wins,  board title will say it's a draw, then reset after a frew seconds
