class Player {
  constructor(player, token) {
    this.id = player
    this.token = token;
    this.selections = [];
    this.wins = 0;
    this.turn = false;
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
