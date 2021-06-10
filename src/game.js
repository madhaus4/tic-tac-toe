class Game {
  constructor() {
    this.player1 = new Player('player1', 'assets/player1-icon.png');
    this.player2 = new Player('player2', 'O');
    this.currentPlayer = null;
    this.hasWinner = false;
    this.isDraw = false;
    this.gameBoard = ['sq1', 'sq2', 'sq3', 'sq4', 'sq5', 'sq6', 'sq7', 'sq8', 'sq9'];
  }

  winConditions() {
    if (['sq1', 'sq2', 'sq3'] || ['sq4', 'sq5', 'sq6'] ||
      ['sq7', 'sq8', 'sq9'] || ['sq1', 'sq4', 'sq7'] ||
      ['sq2', 'sq5', 'sq8'] || ['sq3', 'sq6', 'sq9'] ||
      ['sq1', 'sq5', 'sq9'] || ['sq3', 'sq5', 'sq7']) {
      this.hasWinner = true;
    }

  }
}

// *****  I AM A PLAYER  *****
  // who goes first???
    // new games start with player1 but if its a persisting game, whoever has won the previous?

  // I click a square, my token appears
      // board title changes to say it's the other player's   turn
      // then other user selects a square
        // board title changes to say it's the other player's turn
        // repeat until game is won or there is a draw

    // when a game is won, 'it's ___ turn!', will display 'it's "winners" turn!'
      // 'wins' will update on player who won
      // game board will automatically reset after a few seconds

    // if game is a draw, no one wins,  board title will say it's a draw, then reset after a frew seconds

// *****  DETERMINING A WINNER  *****


// ***** WHOE TURN IS IT?  *****


// *****  KEEPING TRACK OF SCORE  *****


// *****  HOW MANY TOKENS ARE ON THE BOARD  *****
  // what o's are out and where are they
  // what x's are out and where are they


// game board data

// *****  WHAT IS MY APPROACH?????  *****
