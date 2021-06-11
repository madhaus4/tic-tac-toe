// QUERYSELECTORS
var gameBoard = document.getElementById('centerContainer');
var square1 = document.getElementById('sq1');
var square2 = document.getElementById('sq2');
var square3 = document.getElementById('sq3');
var square4 = document.getElementById('sq4');
var square5 = document.getElementById('sq5');
var square6 = document.getElementById('sq6');
var square7 = document.getElementById('sq7');
var square8 = document.getElementById('sq8');
var square9 = document.getElementById('sq9');

var currentGame = new Game();
// BUTTONS

// EVENTLISTENERS
gameBoard.addEventListener('click', displayPlayerToken);

function chooseSquare() {
  for (var i = 0; i < currentGame.gameBoard.length; i++) {
    if (currentGame.gameBoard[i] === event.target.id) {
      event.target.id.innerHTML = 'YO';
    }
  }
}

function displayPlayerToken() {
  if (event.target.id === 'sq1') {
    square1.innerHTML = currentGame.player1.token;
  }
  if (event.target.id === 'sq2') {
    square2.innerHTML = currentGame.player1.token;
  }
  if (event.target.id === 'sq3') {
    square3.innerHTML = currentGame.player1.token;
  }
  if (event.target.id === 'sq4') {
    square4.innerHTML = currentGame.player1.token;
  }
  if (event.target.id === 'sq5') {
    square5.innerHTML = currentGame.player1.token;
  }
  if (event.target.id === 'sq6') {
    square6.innerHTML = currentGame.player1.token;
  }
  if (event.target.id === 'sq7') {
    square7.innerHTML = currentGame.player1.token;
  }
  if (event.target.id === 'sq8') {
    square8.innerHTML = currentGame.player1.token;
  }
  if (event.target.id === 'sq9') {
    square9.innerHTML = currentGame.player1.token;
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
