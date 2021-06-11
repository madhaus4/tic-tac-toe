class Player {
  constructor(player, token) {
    this.id = player
    this.token = token;
    this.choice = [];
    this.wins = 0;
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
