const Champion = require('./Champion');
const Match = require('./Match');
const Player = require('./Player');

Champion.belongsTo(Player);
Player.hasMany(Match);

module.exports = {
  Champion,
  Match,
  Player,
};
