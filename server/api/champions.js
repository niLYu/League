const router = require('express').Router();
// const request = require('request')
const axios = require('axios');
if (process.env.NODE_ENV !== 'production') require('../../secrets');

const LEAGUE_API_KEY = process.env.LEAGUE_API_KEY;

router.get('/', (req, res, next) => {
  axios.get(`https://na1.api.riotgames.com/lol/static-data/v3/champions?api_key=${LEAGUE_API_KEY}`)
    .then((response) => {
      const championByName = response.data.data;
      const championById = {};
      Object.keys(championByName).slice(0, 10).forEach((name) => {
        const championInfo = championByName[name];
        championById[championInfo.id] = championInfo;
      });
      res.json(championById);
    });
});


module.exports = router;
