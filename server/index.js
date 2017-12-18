const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const db = require('../db');
const { CronJob } = require('cron');

// Starts the cron job for news scraping
const riotScraper = require('./api/riotScraper');

const checkDDVersion = require('./api/staticUrl');

let latestDDVersion = '7.24.1';

const getDDVers = new CronJob({
  cronTime: '00 00 */1 * * *',
  onTick() {
    checkDDVersion()
      .then((version) => {
        console.log('Setting latestDDVersion: ', version);
        latestDDVersion = version;
      });
  },
  start: false,
  timeZone: 'America/New_York',
});

getDDVers.start();

const PORT = process.env.PORT || 3000;

module.exports = app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, '../public')))
  .use('/api', require('./api'))
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

db.sync({
  logging: false,
  force: false,
});

if (module === require.main) {
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}!`);
  });
}
