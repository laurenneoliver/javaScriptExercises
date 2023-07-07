const team = {
  _players: [
    { firstName: "Pete", lastName: "Wheeler", age: 54 },
    { firstName: "Chris", lastName: "Scott", age: 27 },
    { firstName: "Laurenne", lastName: "Oliver", age: 23 },
  ],
  _games: [
    { opponent: "bobcats", teamPoints: 9, opponentPoints: 15 },
    { opponent: "timberwolfs", teamPoints: 12, opponentPoints: 7 },
    { opponent: "rockers", teamPoints: 11, opponentPoints: 11 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(game);
  }
};
