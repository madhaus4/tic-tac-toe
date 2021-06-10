class Game {
  constructor() {
    this.player1 = new Player('player1', 'X');
    this.player2 = new Player('player2', 'O');
    this.currentPlayer = null;
    this.hasWinner = false;
    this.isDraw = false;
    this.gameBoard = ['sq1', 'sq2', 'sq3', 'sq4', 'sq5', 'sq6', 'sq7', 'sq8', 'sq9'];
  }

  winConditions() {
    // winning combinations
      // 123
        ['sq1', 'sq2', 'sq3']
      // 456
        ['sq4', 'sq5', 'sq6']
      // 789
        ['sq7', 'sq8', 'sq9']
      // 147
        ['sq1', 'sq4', 'sq7']
      // 258
        ['sq2', 'sq5', 'sq8']
      // 369
        ['sq3', 'sq6', 'sq9']
      // 159 or 951
        ['sq1', 'sq5', 'sq9']
        ['sq9', 'sq5', 'sq1']
      // 357 or 753
        ['sq3', 'sq5', 'sq7']
        ['sq7', 'sq5', 'sq3']

  }
}


// whose turn is it



// what data do you want to keep track of
  // whose turn is it
  // whats the score

// what o's are out and where are they
// what x's are out and where are they

// game board data
// what is my approach

//
