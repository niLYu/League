const db = require('../db');
const { INTEGER, STRING, BOOLEAN } = require('sequelize');

const TeamStats = db.define('teamstats', {
  firstDragon: {
    type: BOOLEAN,
  },
  firstInhibitor: {
    type: BOOLEAN
  },
  baronKills: {
    type: INTEGER,
  },
  firstRiftHerold: {
    type: BOOLEAN,
  },
  riftHeraldKills: {
    type: INTEGER,
  },
  firstBlood: {
    type: INTEGER,
  },
  teamId: {
    type: INTEGER,
  },
  firstTower: {
    type: BOOLEAN,
  },
  vilemawKills: {
    type: INTEGER,
  },
  inhibitorKills: {
    type: INTEGER,
  },
  towerKills: {
    type: INTEGER,
  },
  dominionVictoryScore: {
    type: INTEGER
  },
  win: {
    type: BOOLEAN
  }

});

module.exports = TeamStats;
