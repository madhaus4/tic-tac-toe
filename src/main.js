// QUERYSELECTORS
var gameBoard = document.getElementById('gameBoard');
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

var p1Wins = document.getElementById('numOfWinP1');
var p2Wins = document.getElementById('numOfWinP2');


var currentGame = new Game();

// EVENTLISTENERS
window.addEventListener('load', getWinsFromStorage);
gameBoard.addEventListener('click', runGame);

function runGame() {
  console.log(currentGame);
  currentGame.collectSquares(currentGame.currentPlayer);
  currentGame.checkforWin();
  currentGame.checkForDraw();
  renderToken();
  currentGame.updateGameBoard();
  disableClick();
  updateBoardTitle();
  resetGame();
  getWinsFromStorage();
}

function renderToken() {
  var idTarget = event.target.id;
  for (var i = 0; i < currentGame.gameBoard.length; i++) {
    if (currentGame.gameBoard[i] === idTarget && currentGame.gameBoard.includes(idTarget)) {
      eval(idTarget).innerHTML = currentGame.currentPlayer.token;
      currentGame.updatePlayerTurn();
    }
  }
  // currentGame.checkforWin();
  // currentGame.checkForDraw();
  // updateBoardTitle();
}

function updateBoardTitle() {
  if (!currentGame.hasWinner
    // && !currentGame.currentPlayer.turn
  ) {
    boardTitle.innerHTML = `It's ${currentGame.currentPlayer.token}'s turn!`;
  }

  // if (currentGame.hasWinner && !currentGame.currentPlayer.turn) {
  //     boardTitle.innerHTML = `${currentGame.currentPlayer.token} WINS!!!`;
  // }

  if (currentGame.hasWinner && !currentGame.player1.turn) {
    boardTitle.innerHTML = `${currentGame.player1.token} WINS!!!`;
  } else if (currentGame.hasWinner && !currentGame.player2.turn) {
    boardTitle.innerHTML = `${currentGame.player2.token} WINS!!!`;
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
    // getWinsFromStorage();
    clearGameBoard();
    currentGame = new Game();
    // currentGame.resetGameBoard();
    boardTitle.innerText = `It's X's turn!!!`;
    enableClick();
    // currentGame.updatePlayerTurn();
  }, 2000);
}

function getWinsFromStorage() {
  currentGame.player1.retrieveWinsFromStorage();
  currentGame.player2.retrieveWinsFromStorage();
  displayWins();
}

function displayWins() {
  p1Wins.innerText = `${currentGame.player1.wins}`;
  p2Wins.innerText = `${currentGame.player2.wins}`;
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
