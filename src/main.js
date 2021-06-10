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

function showToken() {
  if (event.target.id === 'sq1') {
    square1.innerHTML = 'YES!';
  } else
  if (event.target.id === 'sq2') {
    square2.innerHTML = 'YES!';
  } else
  if (event.target.id === 'sq3') {
    square3.innerHTML = 'YES!';
  } else
  if (event.target.id === 'sq4') {
    square4.innerHTML = 'YES!';
  } else
  if (event.target.id === 'sq5') {
    square5.innerHTML = 'YES!';
  } else
  if (event.target.id === 'sq6') {
    square6.innerHTML = 'YES!';
  } else
  if (event.target.id === 'sq7') {
    square7.innerHTML = 'YES!';
  } else
  if (event.target.id === 'sq8') {
    square8.innerHTML = 'YES!';
  } else
  if (event.target.id === 'sq9') {
    square9.innerHTML = 'YES!';
  }

}
