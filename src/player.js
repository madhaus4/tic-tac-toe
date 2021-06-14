class Player {
  constructor(id, token, turn) {
    this.id = id
    this.token = token;
    this.selections = [];
    this.wins = 0;
    this.turn = turn;
  }

  saveWinsToStorage() {
    localStorage.setItem(this.id, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
    var retrievedWins = JSON.parse(localStorage.getItem(this.id));
    this.wins = retrievedWins || 0;
  }
}
