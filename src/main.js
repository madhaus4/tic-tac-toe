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
// window.addEventListener('load', begin);
gameBoard.addEventListener('click', runGame);


function runGame() {
  currentGame.collectSquares(currentGame.currentPlayer);
  renderToken();
  currentGame.updateGameBoard();
  currentGame.checkforWin();
  currentGame.checkForDraw();
  disableClick();
  currentGame.updatePlayerTurn();
  updateBoardTitle();
  resetGame();
}

function renderToken() {
  var idTarget = event.target.id;
  for (var i = 0; i < currentGame.gameBoard.length; i++) {
    if (currentGame.gameBoard[i] === idTarget) {
      eval(idTarget).innerHTML = currentGame.currentPlayer.token;
    }
  }
}

function updateBoardTitle() {
  if (!this.hasWinner && currentGame.player1.turn) {
    boardTitle.innerText = `It's X's turn!!!`;
  } else if (!this.hasWinner && currentGame.player2.turn) {
    boardTitle.innerText = `It's O's turn!!!`;
  }

  if (currentGame.hasWinner && currentGame.currentPlayer.id === '2') {
    boardTitle.innerText = `X wins!!!`;
  } else if (currentGame.hasWinner && currentGame.currentPlayer.id === '1') {
    boardTitle.innerText = `O wins!!!`;
  }

  if (currentGame.isDraw && !currentGame.hasWinner) {
    boardTitle.innerText = 'It\'s a draw! Please play again!';
  }
}

function disableClick() {
  if (currentGame.hasWinner || currentGame.counter === 9) {
    gameBoard.removeEventListener('click', runGame);
  }
}

function enableClick() {
  if (!currentGame.hasWinner) {
    gameBoard.addEventListener('click', runGame);
  }
}

function resetGame() {
  if (currentGame.hasWinner || currentGame.hasDraw || currentGame.counter === 9) {
    timeOut();
  }
}

function timeOut() {
  setTimeout(function() {
    currentGame.resetGameBoard();
    clearGameBoard();
    boardTitle.innerText = `It's X's turn!!!`;
    enableClick();
    currentGame.updatePlayerTurn();
  }, 3000);
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
