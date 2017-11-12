const router = require('express').Router();
const axios = require('axios');
const secrets = require('../../secrets');

// This file contains routes used to get all static-data from RIOT Games Data Dragon

const apiRoute = 'https://na1.api.riotgames.com/lol/static-data/v3';
const apiValidation = `?api_key=${secrets.LEAGUE_API_KEY}`;
let latestDDVersion = '';

// Gets and assigns the latest DDVersion
router.get('/', (req, res, next) => {
  axios.get(`${apiRoute}/versions${apiValidation}`)
    .then((response) => {
      [latestDDVersion] = response.data;
    })
    .catch(next);
  next();
});

module.exports = router;
