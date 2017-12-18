const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const db = require('../db');
const { CronJob } = require('cron');

const newsScraper = require('./cronJobs/newsScraper');

newsScraper();

const jobs = new CronJob({
  cronTime: '00 00 */1 * * *',
  onTick() {
    newsScraper();
  },
  start: false,
  timeZone: 'America/New_York',
});

jobs.start();

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
