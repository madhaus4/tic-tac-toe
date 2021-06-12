class Player {
  constructor(id, token, turn) {
    this.id = id
    this.token = token;
    this.selections = [];
    this.wins = 0;
    this.turn = turn;
  }

  saveWinsToStorage() {
    localStorage.setItem();
    JSON.stringify();
  }

  retrieveWinsFromStorage() {
    JSON.parse();
    localStorage.getItem();
  }
}
