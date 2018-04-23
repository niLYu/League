const db = require('../db');
const { TEXT } = require('sequelize');

const News = db.define('news', {
  title: {
    type: TEXT,
  },
  content: {
    type: TEXT,
  },
  url: {
    type: TEXT,
  },
  imageUrl: {
    type: TEXT,
  },
  time: {
    type: TEXT,
  },
});

module.exports = News;
