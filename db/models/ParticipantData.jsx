const db = require('../db');
const { INTEGER, STRING } = require('sequelize');

const ParticipantData = db.define('participantdata', {
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
  name: {
    type: STRING,
  }
});

module.exports = ParticipantData;
