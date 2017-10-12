const Sequelize = require('sequelize')
const { FLOAT, INTEGER, STRING, BOOLEAN, TEXT, DataTypes } = require('sequelize')

var db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/league')

const Player = db.define('player', {

  accountId: {
    type: INTEGER,
    unique: true
  },
  name: {
    type: STRING,
    unique: true
  },
  profileIconId: {
    type: INTEGER
  },
  summonerLevel: {
    type: INTEGER
  }
})

const Match = db.define('match', {
  gameId: {
    type: INTEGER,
    unique: true
  },
  mapId: {
    type: INTEGER
  },
  gameMode: {
    type: STRING
  },
  gameDuration: {
    type: INTEGER
  },
  queueId: {
    type: STRING
  },
  serverId: {
    type: STRING
  }
})

const Champion = db.define('champion', {
  championId: {
    type: INTEGER
  },
  numberOfGames: {
    type: INTEGER
  },
  numberOfWins: {
    type: INTEGER
  },
  numberOfLosses: {
    type: INTEGER
  },
  totalKills: {
    type: INTEGER
  },
  totalDeaths: {
    type: INTEGER
  },
  totalAssist: {
    type: INTEGER
  },
  creepScore:{
    type: INTEGER
  }
})

Champion.belongsTo(Player)
Player.hasMany(Match)

module.exports = db
