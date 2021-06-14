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

  updateGameBoard() {
    for (var i = 0; i < this.gameBoard.length; i ++) {
      if (this.gameBoard[i] === event.target.id) {
        this.gameBoard.splice(i, 1);
      }
    }
  }

  checkforWin() {
    var combination;
    for (var i = 0; i < this.winCombinations.length; i++) {
      combination = this.winCombinations[i];
      if (combination.every(elem => this.currentPlayer.selections.includes(elem))) {
        this.hasWinner = true;
        // this.currentPlayer.wins += 1;
      }
      this.updateWins();
    }
    // this.player1.saveWinsToStorage();
    // this.player2.saveWinsToStorage();
  }

  checkForDraw() {
    if (!this.hasWinner && this.counter === 9) {
      this.isDraw = true;
    }
  }
  updateWins() {
    if (this.hasWinner && !this.player1.turn) {
      this.player1.wins += 1;
      this.player1.saveWinsToStorage();
    } else if (this.hasWinner && !this.player2.turn) {
      this.player2.wins += 1;
      this.player2.saveWinsToStorage();
    }
  }

  // resetGameBoard() {
  //   this.player1.selections = [];
  //   this.player2.selections = [];
  //   this.currentPlayer = this.player1;
  //   this.gameBoard = ['sq1', 'sq2', 'sq3', 'sq4', 'sq5', 'sq6', 'sq7', 'sq8', 'sq9'];
  //   this.hasWinner = false;
  //   this.isDraw = false;
  //   this.counter = 0;
  // }

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
