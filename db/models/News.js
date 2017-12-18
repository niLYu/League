const db = require('../db');
const { STRING } = require('sequelize');

const News = db.define('news', {
  title: {
    type: STRING,
  },
  content: {
    type: STRING,
  },
  url: {
    type: STRING,
  },
  imageUrl: {
    type: STRING,
  },
  time: {
    type: STRING,
  },
});

module.exports = News;
