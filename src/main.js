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
gameBoard.addEventListener('click', showToken);




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
