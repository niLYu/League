const db = require('../db');
const { INTEGER, STRING, BIGINT } = require('sequelize');

const Match = db.define('match', {
  seasonId: {
    type: INTEGER,
  },
  queueId: {
    type: INTEGER,
  },
  gameId: {
    type: INTEGER,
    unique: true,
  },
  gameVersion: {
    type: STRING,
  },
  platformId: {
    type: INTEGER,
  },
  gameMode: {
    type: INTEGER,
  },
  mapId: {
    type: INTEGER,
  },
  gameType: {
    type: STRING,
  },
  gameDuration: {
    type: BIGINT,
  },
});

//so a match also has another list of things...I don't really know how to include these just yet
module.exports = Match;
