const db = require('../db');
const { INTEGER, STRING } = require('sequelize');

const Match = db.define('match', {
  gameId: {
    type: INTEGER,
    unique: true,
  },
  mapId: {
    type: INTEGER,
  },
  gameMode: {
    type: STRING,
  },
  gameDuration: {
    type: INTEGER,
  },
  queueId: {
    type: STRING,
  },
  serverId: {
    type: STRING,
  },
});

module.exports = Match;
