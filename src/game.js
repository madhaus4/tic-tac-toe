class Game {
  constructor() {
    this.player1 = new Player('1', 'X', true);
    this.player2 = new Player('2', 'O', false);
    this.currentPlayer = this.player1;
    this.counter = 0;
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

  collectSquares(player) {
    this.counter += 1;
    for (var i = 0; i < this.gameBoard.length; i ++) {
      if (this.gameBoard[i] === event.target.id) {
        player.selections.push(this.gameBoard[i]);
      }
    }
  }

  checkforWin() {
    for (var i = 0; i < this.winCombinations.length; i++) {
      var combination = this.winCombinations[i];
      if (combination.every(elem => this.currentPlayer.selections.includes(elem))) {
        this.hasWinner = true;
        this.currentPlayer.wins += 1;
        console.log(this.hasWinner);
      }
    }
  }

  checkForDraw() {
    if (!this.hasWinner && this.counter === 9) {
      this.isDraw = true;
    }
    // this.resetGameBoard();
  }

  resetGameBoard() {
    this.player1.selections = [];
    this.player2.selections = [];
    this.currentPlayer = this.player1;
    this.hasWinner = false;
    this.isDraw = false;
    this.counter = 0;
  }

  updatePlayerTurn() {
    if (this.player1.turn) {
      this.player1.turn = false;
      this.player2.turn = true;
      this.updateCurrentPlayer(this.player2);
    } else if (this.player2.turn) {
      this.player1.turn = true;
      this.player2.turn = false;
      this.updateCurrentPlayer(this.player1);
    }
  }

  updateCurrentPlayer(player) {
    this.currentPlayer = player;
  }
}


  // *****  HOW MANY TOKENS ARE ON THE BOARD  *****
  // what o's are out and where are they
  // what x's are out and where are they

// *****  WHAT IS MY APPROACH?????  *****


// *****  I AM THE GAME  *****
  // on page load, I am visible to the user
  // when a user selects a square, I need to add the ID of that square into an array, maybe? >> this saves it until one of the player's arrays include a winning combination

  // when a user selects a square, I increment turn's taken by each player and tell the other player it's their turn

  // when a player has a winning combination, trigger some DOM shit, then reset the board & update player wins





    //   for (var i = 0; i < this.winCombinations.length; i++) {
    //     var combo = this.winCombinations[i];
    //     for (var i = 0; i < combo.length; i++) {
    //       if (this.currentPlayer.selections.includes(combo[i]) && this.currentPlayer.selections.includes(combo[(i + 1)]) &&
    //       this.currentPlayer.selections.includes(combo[(i + 2)])) {
    //         this.hasWinner = true;
    //       }
    //     }
    //     return;
    //   }
    // }
          // if (!combo.includes(this.currentPlayer.selections[i])) {
          // } else
    //       if (combo.includes(this.currentPlayer.selections[i])) {
    //          // && this.counter === 2) {
    //         // this.hasWinner = true;
    //       }
    //       // else
    //       if (this.counter === 3) {
    //         this.counter = 0;
    //       }
    //     }
    //     return;
    //   }
    // }
        // var stringedSquares = this.currentPlayer.selections
        // .toString();
        // I think I really want the reverse logic >> if selections includes a win combo...
        // if (stringedSquares.includes(combo)) {
        //   this.hasWinner = true;
        //   this.currentPlayer.wins += 1;
