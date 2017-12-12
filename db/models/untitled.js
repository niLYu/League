const db = require('../db');
const { INTEGER, STRING, BIGINT, BOOLEAN } = require('sequelize');

const ParticipantStats = db.define('teamStats', {
  physicalDamageDealt: {
    type: INTEGER,
  },
  neutralMinionsKilledTeamJungle: {
    type: INTEGER,
  },
  magicDamageDealt: {
    type: BIGINT,
  },
  totalPlayerScore: {
    type: INTEGER,
  },
  deaths: {
    type: INTEGER,
  },
  win: {
    type: BOOLEAN,
  },
  neutralMinionsKilledEnemyJungle: {
    type: INTEGER,
  },
  altarsCaptured: {
    type: INTEGER,
  },
  largestCriticalStrike: {
    type: INTEGER,
  },
  totalDamageDealt: {
    type: BIGINT,
  },
  magicDamageDealtToChampions: {
    type: BIGINT,
  },
  visionWardsBoughtInGame: {
    type: INTEGER,
  },
  damageDealtToObjectives: {
    type: BIGINT,
  },
  largestKillingSpree: {
    type: INTEGER,
  },
});



module.exports = ParticipantStats;
