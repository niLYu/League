const Champion = require('./Champion');
const Match = require('./Match');
const Player = require('./Player');
const TeamStats = require('./TeamStats');

Champion.belongsTo(Player);
Player.hasMany(Match);

TeamStats.belongsTo(Match);
Match.hasMany(TeamStats);

module.exports = {
  Champion,
  Match,
  Player,
  TeamStats,
};
