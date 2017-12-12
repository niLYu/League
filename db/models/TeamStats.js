const db = require('../db');
const { INTEGER, STRING, BIGINT, BOOLEAN } = require('sequelize');

const TeamStats = db.define('teamStats', {
  firstDragon: {
    type: BOOLEAN,
  },
  firstInhibitor: {
    type: BOOLEAN,
  },
  baronKills: {
    type: INTEGER,
  },
  firstRiftHerald: {
    type: BOOLEAN,
  },
  firstBaron: {
    type: BOOLEAN,
  },
  riftHeraldKills: {
    type: INTEGER,
  },
  firstBlood: {
    type: BOOLEAN,
  },
  teamId: {
    type: INTEGER,
  },
  firstTower: {
    type: BOOLEAN,
  },
  vilernawKills: {
    type: INTEGER,
  },
  inhibitorKills: {
    type: INTEGER,
  },
  towerKills: {
    type: INTEGER,
  },
  dominionVictoryScore: {
    type: INTEGER,
  },
  win: {
    type: BOOLEAN,
    set(val){
      const won = (val === 'Win');
      this.setDataValue('win', won);
    },
  },
  dragonKills: {
    type: INTEGER,
  },
});



module.exports = TeamStats;
