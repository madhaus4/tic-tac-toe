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
  currentGame.checkforWin();
  currentGame.collectSquares(currentGame.currentPlayer);
  renderToken();
  currentGame.updateGameBoard();
  // currentGame.checkforWin();
  // currentGame.checkForDraw();
  // updateBoardTitle();
  disableClick();
  resetGame();
}

function renderToken() {
  var idTarget = event.target.id;
  for (var i = 0; i < currentGame.gameBoard.length; i++) {
    if (currentGame.gameBoard[i] === idTarget && currentGame.gameBoard.includes(idTarget)) {
      eval(idTarget).innerHTML = currentGame.currentPlayer.token;
      currentGame.updatePlayerTurn();
    }
    currentGame.checkforWin();
    currentGame.checkForDraw();
    updateBoardTitle();
  }
}

function updateBoardTitle() {
  if (!currentGame.hasWinner) {
    boardTitle.innerHTML = `It's ${currentGame.currentPlayer.token}'s turn!!!`;
  }

  if (currentGame.hasWinner && !currentGame.player1.turn) {
    console.log('SUP');
    boardTitle.innerHTML = ` ${currentGame.player1.token} WINS!!!`;
  } else if (currentGame.hasWinner && !currentGame.player2.turn) {
    boardTitle.innerHTML = ` ${currentGame.player2.token} WINS!!!`;
  }

  if (currentGame.isDraw && currentGame.counter <= 10 && !currentGame.hasWinner) {
    boardTitle.innerText = 'It\'s a draw! Please play again!';
  }
}

function resetGame() {
  if (currentGame.hasWinner || currentGame.hasDraw || currentGame.counter === 9) {
    timeOut();
  }
}

function timeOut() {
  setTimeout(function() {
    clearGameBoard();
    currentGame = new Game();
    // currentGame.resetGameBoard();
    boardTitle.innerText = `It's X's turn!!!`;
    enableClick();
    // currentGame.updatePlayerTurn();
  }, 3000);
}

function clearGameBoard() {
  for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].innerHTML = '';
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
