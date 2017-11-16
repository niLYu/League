const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../db');

const PORT = process.env.PORT || 3000

module.exports = app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, '../public')))
  .use('/api', require('./api'))
  .get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

db.sync({
  logging: false,
  force: true,
});

if (module === require.main) {
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}!`);
  });
}
