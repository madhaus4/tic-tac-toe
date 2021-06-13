class Player {
  constructor(id, token, turn) {
    this.id = id
    this.token = token;
    this.selections = [];
    this.wins = 0;
    this.turn = turn;
  }

  saveWinsToStorage() {
    localStorage.setItem('winStorage', JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
    JSON.parse();
    localStorage.getItem('winStorage');
    currentGame = new Game();
  }
}
