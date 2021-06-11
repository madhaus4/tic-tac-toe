class Game {
  constructor() {
    this.player1 = new Player('player1', 'X');
    this.player2 = new Player('player2', 'O');
    // this.currentPlayer = null;
    this.hasWinner = false;
    this.isDraw = false;
    this.gameBoard = ['sq1', 'sq2', 'sq3', 'sq4', 'sq5', 'sq6', 'sq7', 'sq8', 'sq9'];
    this.winCombinations = [
      ['sq1', 'sq2', 'sq3'], ['sq4', 'sq5', 'sq6'],
      ['sq7', 'sq8', 'sq9'], ['sq1', 'sq4', 'sq7'],
      ['sq2', 'sq5', 'sq8'], ['sq3', 'sq6', 'sq9'],
      ['sq1', 'sq5', 'sq9'], ['sq3', 'sq5', 'sq7']
    ];
  }

// *****  DETERMINING A WINNER  *****
  checkforWin(player) {
    // this adds a square ID into the player's selections array
    for (var i = 0; i < this.gameBoard.length; i ++) {
      if (this.gameBoard[i] === event.target.id) {
        player.selections.push(this.gameBoard[i]);
      }
    }
    // this updates winner to true if one of the player's selections includes a winning combination
    for (var i = 0; i < this.winCombinations.length; i++) {
      if (player.selections.includes(this.winCombinations[i])) {
        this.hasWinner = true;
      }
    }
  }
}
// ***** WHOSE TURN IS IT?  *****
  updatePlayerTurn() {
    if (this.player1.turn) {
      this.player1.turn = true;
      this.player2.turn = false;
    } else if (this.player2.turn) {
      this.player1.turn = false;
      this.player2.turn = true;
    }
  }
}


// *****  KEEPING TRACK OF SCORE  *****


// *****  HOW MANY TOKENS ARE ON THE BOARD  *****
  // what o's are out and where are they
  // what x's are out and where are they

// game board data

// *****  WHAT IS MY APPROACH?????  *****


// *****  I AM THE GAME  *****
  // on page load, I am visible to the user
  // when a user selects a square, I need to add the ID of that square into an array, maybe? >> this saves it until one of the player's arrays include a winning combination

  // when a user selects a square, I increment turn's taken by each player and tell the other player it's their turn

  // when a player has a winning combination, trigger some DOM shit, then reset the board & update player wins
