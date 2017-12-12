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
  item1: {
    type: INTEGER,
  },
  quadraKills: {
    type: INTEGER,
  },
  teamObjective: {
    type: INTEGER,
  },
  totalTimeCrowdControlDealt: {
    type: INTEGER,
  },
  longestTimeSpentLiving: {
    type: INTEGER,
  },
  wardsKilled: {
    type: INTEGER,
  },
  firstTowerAssist: {
    type: BOOLEAN,
  },
  firstTowerKill: {
    type: BOOLEAN,
  },
  item2: {
    type: INTEGER,
  },
  item3: {
    type: INTEGER,
  },
  item0: {
    type: INTEGER,
  },
  firstBloodAssist: {
    type: BOOLEAN,
  },
  visionScore: {
    type: BIGINT,
  },
  wardsPlaced: {
    type: INTEGER,
  },
  item4: {
    type: INTEGER,
  },
  item5: {
    type: INTEGER,
  },
  item6: {
    type: INTEGER,
  },
  turretKills: {
    type: INTEGER,
  },
  tripleKills: {
    type: INTEGER,
  },
  damageSelfMitigated: {
    type: BIGINT,
  },
  champLevel: {
    type: INTEGER,
  },
  nodeNeutralizeAssist: {
    type: INTEGER,
  },
  firstInhibitorKill: {
    type: INTEGER,
  },
  goldEarned: {
    type: INTEGER,
  },
  magicalDamageTaken: {
    type: INTEGER,
  },
  kills: {
    type: INTEGER,
  },
  doubleKills: {
    type: INTEGER,
  },
  nodeCaptureAssist: {
    type: INTEGER,
  },
  trueDamageTaken: {
    type: INTEGER,
  },
  nodeNeutralize: {
    type: INTEGER,
  },
  firstInhibitorAssist: {
    type: BOOLEAN,
  },
  assists: {
    type: INTEGER,
  },
  unrealKills: {
    type: INTEGER,
  },
  neutralMinionsKilled: {
    type: INTEGER,
  },
  objectivePlayerScore: {
    type: INTEGER,
  },
  combatPlayerScore: {
    type: INTEGER,
  },
  damageDealtToTurrets: {
    type: BIGINT,
  },
  altarsNeutralized: {
    type: INTEGER,
  },
  physcialDamageDealtToChampions: {
    type: BIGINT,
  },
  goldSpent: {
    type: INTEGER,
  },
  trueDamageDealt: {
    type: BIGINT,
  },
  trueDamageDealtToChampions: {
    type: BIGINT,
  },
  participantId: {
    type: INTEGER,
  },
  pentaKills: {
    type: INTEGER,
  },
  totalHeal: {
    type: INTEGER,
  },
  totalMinionsKilled: {
    type: INTEGER,
  },
  firstBloodKill: {
    type: BOOLEAN,
  },
  nodeCapture: {
    type: INTEGER,
  },
  largestMultiKill: {
    type: INTEGER,
  },
  sightWardsBoughtInGame: {
    type: INTEGER,
  },
  totalDamageDealtToChampions: {
    type: INTEGER,
  },
  totalUnitsHealed: {
    type: INTEGER,
  },
  inhibitorKills: {
    type: INTEGER,
  },
  totalScoreRank: {
    type: INTEGER,
  },
  totalDamageTaken: {
    type: BIGINT,
  },
  killingSprees: {
    type: INTEGER,
  },
  timeCCingOthers: {
    type: BIGINT,
  },
  physicalDamageTaken: {
    type: BIGINT,
  },
});



module.exports = ParticipantStats;
