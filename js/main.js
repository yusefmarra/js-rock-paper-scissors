var Game = function(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.winner = function() {
  if (this.player1.choice === this.player2.choice) {
    return null;
  }
  switch (this.player1.choice) {
    case 'scissors':
      if (this.player2.choice === 'rock') {
        return this.player2
      } else {
        return this.player1;
      }
    case 'rock':
      if (this.player2.choice === 'scissors') {
        return this.player1;
      } else {
        return this.player2;
      }
    case 'paper':
      if (this.player2.choice === 'scissors') {
        return this.player2;
      } else {
        return this.player1
      }
    default:
      break;
  }
}

var Player = function() {
  this.choice;
}

Player.prototype.picks = function(str) {
  this.choice = str;
  return this.choice;
}

module.exports = {
  Game: Game,
  Player: Player
}
