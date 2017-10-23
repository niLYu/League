const db = require('../db');
const { INTEGER, STRING } = require('sequelize');

const Player = db.define('player', {
  accountId: {
    type: INTEGER,
    unique: true,
  },
  name: {
    type: STRING,
    unique: true,
  },
  profileIconId: {
    type: INTEGER,
  },
  summonerLevel: {
    type: INTEGER,
  }
});

module.exports = Player;
