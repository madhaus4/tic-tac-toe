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

// *****  DETERMINING A WINNER  *****
  collectSquares(player) {
    // this adds a square ID into the player's selections array
    for (var i = 0; i < this.gameBoard.length; i ++) {
      if (this.gameBoard[i] === event.target.id) {
        player.selections.push(this.gameBoard[i]);
      }
    }
  }

  checkforWin() {
    // this checks if the player's selections includes a winning combination & updates hasWinner to true & increases players wins
    for (var i = 0; i < this.winCombinations.length; i++) {
      var combinations = this.winCombinations[i];
      if (combinations.every(elem => this.currentPlayer.selections.includes(elem))) {
        this.hasWinner = true;
        this.currentPlayer.wins += 1;
        event.preventDefault();
        console.log(this.hasWinner);
        console.log(this.currentPlayer.wins);
      }
    }
  }

  // >>>YOU CHECK FOR PLAYER WINS
// each time a player selects a square, compare the player selections array to the win combos array
// to win: 3 of the values in the selections array need to equal one array in the winCombinations array

// player1 selects sq5, sq5 is now in their selections and appears 4X in winCombinations
// player2 selects sq3, sq3 is now in their selections and appears 3X in winCombinations
// player1 selects sq9, sq9 is now in their selections and appears 3X in winCombinations
    // >> player1.selections now is sq5, sq9
    // >> of winCombinations they only appear together once
// player2 selects sq1, sq1 is now in their selections and appears 3X in winCombinations
    // >> player2.selections now is sq3, sq1
    // >> of winCombinations they only appear together once
// player1 selects sq2, and that appears 2X in winCombinations
    // >> player1.selections now is sq5, sq9, sq2
    // >>
// player2 selects sq4, appears 2X in winCombinations
    // >> player2.selections now is sq3, sq1, sq4
    // >>
// player1 selects sq8 appears 2X in winCombinations
    // >> player1.selections is now sq5, sq9, sq2, sq8
    // >>of winCombinations, we have a match!!  [sq2, sq5, sq8]


// loop through winCombinations
// then loop through winCombinations index

// .every();

  //   for (var i = 0; i < this.winCombinations.length; i++) {
  //     var combo = this.winCombinations[i];
  //     // console.log('win', combo);
  //     for (var i = 0; i < combo.length; i++) {
  //       console.log('win index', combo[i], combo[(i + 1)], combo[(i + 2)]);
  //       if (this.currentPlayer.selections.includes(combo[i]) && this.currentPlayer.selections.includes(combo[(i + 1)]) &&
  //       this.currentPlayer.selections.includes(combo[(i + 2)])) {
  //         this.hasWinner = true;
  //         console.log('YO');
  //         return;
  //       }
  //     }
  //     return;
  //   }
  // }

        // if (!combo.includes(this.currentPlayer.selections[i])) {
        //   console.log('one', this.currentPlayer.selections[i]);
        //   this.counter = 0;
        //   console.log('1A', this.counter);
        // } else
  //       if (combo.includes(this.currentPlayer.selections[i])) {
  //          // && this.counter === 2) {
  //         console.log('two', this.currentPlayer.selections[i]);
  //         this.counter ++;
  //         console.log(this.counter);
  //         // this.hasWinner = true;
  //       }
  //       // else
  //       if (this.counter === 3) {
  //         this.counter = 0;
  //         console.log('something');
  //         // console.log('three', this.currentPlayer.selections[i]);
  //         // console.log('1C', this.counter);
  //       }
  //     }
  //     return;
  //   }
  // }

      // var stringedSquares = this.currentPlayer.selections
      // .toString();
      // I think I really want the reverse logic >> if selections includes a win combo...
      // console.log(stringedSquares);
      // if (stringedSquares.includes(combo)) {
      //   console.log('YO', stringedSquares);
      //   this.hasWinner = true;
      //   this.currentPlayer.wins += 1;
      // console.log(this.winCombinations[i]); {

// check each player's selection string
// if that string is included in winning combo
// if yes, is player's second selection string in winning combo
// if no, return



// ***** WHOSE TURN IS IT?  *****
  updatePlayerTurn() {
    // this changes players turn from true to false and false to true
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

  // *****  KEEPING TRACK OF SCORE  *****
  updateScore(player) {
    if (this.hasWinner) {
      player.wins += 1;
    }
  }

  // *****  HOW MANY TOKENS ARE ON THE BOARD  *****
  // what o's are out and where are they
  // what x's are out and where are they

}
// game board data

// *****  WHAT IS MY APPROACH?????  *****


// *****  I AM THE GAME  *****
  // on page load, I am visible to the user
  // when a user selects a square, I need to add the ID of that square into an array, maybe? >> this saves it until one of the player's arrays include a winning combination

  // when a user selects a square, I increment turn's taken by each player and tell the other player it's their turn

  // when a player has a winning combination, trigger some DOM shit, then reset the board & update player wins
