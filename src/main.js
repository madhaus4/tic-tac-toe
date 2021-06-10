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

var newGame = new Game();
// BUTTONS

// EVENTLISTENERS
gameBoard.addEventListener('click', showToken);
