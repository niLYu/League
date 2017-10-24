const db = require('../db');
const { INTEGER } = require('sequelize');

const Champion = db.define('champion', {
  championId: {
    type: INTEGER,
  },
  numberOfGames: {
    type: INTEGER,
  },
  numberOfWins: {
    type: INTEGER,
  },
  numberOfLosses: {
    type: INTEGER,
  },
  totalKills: {
    type: INTEGER,
  },
  totalDeaths: {
    type: INTEGER,
  },
  totalAssist: {
    type: INTEGER,
  },
  creepScore: {
    type: INTEGER,
  },
});

module.exports = Champion;
