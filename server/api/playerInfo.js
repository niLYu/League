const router = require('express').Router();
if (process.env.NODE_ENV !== 'production') require('../../secrets');
const LEAGUE_API_KEY = process.env.LEAGUE_API_KEY;

const { Player } = require('../../db/models');
const axios = require('axios');

const apiBase = 'https://na1.api.riotgames.com/lol';
const apiVerification = `?api_key=${LEAGUE_API_KEY}`;

// gets basic profile by player name
router.get('/player/:name', (req, res, next) => {
  // console.log(req.params.name);
  const name = req.params.name.toString();
  console.log(`WHY YOU DO THIS`,`${apiBase}/summoner/v3/summoners/by-name/${name}${apiVerification}`);
  axios.get(`${apiBase}/summoner/v3/summoners/by-name/${name}${apiVerification}`)
    .then(response => response.data)
    .then(playerInfo => res.json(playerInfo))
    .catch(err => {
      // console.log(err)
      next(err)
    });
});

// post player into database by name
router.post('/player/:name', (req, res, next) => {
  Player.findOrCreate({
    where: {
      name: req.params.name,
    },
    defaults: req.body,
  })
    .spread((user, created) => {
      res.json(created);
    })
    .catch(next);
});

// gets mastery pages by id
router.get('/accountMasteries/:id', (req, res, next) => {
  axios.get(`${apiBase}/platform/v3/masteries/by-summoner/${req.params.id}${apiVerification}`)
    .then(response => response.data)
    .then(accountMasteries => res.json(accountMasteries))
    .catch(next);
});

// gets rune pages by id
router.get('/accountRunes/:id', (req, res, next) => {
  axios.get(`${apiBase}/platform/v3/runes/by-summoner/${req.params.id}${apiVerification}`)
    .then(response => response.data)
    .then(matchInfo => res.json(matchInfo))
    .catch(next);
});

// gets champion masteries by acccount id
router.get('/championMastery/:accountId', (req, res, next) => {
  axios.get(`${apiBase}/champion-mastery/v3/champion-masteries/by-summoner/${req.params.accountId}${apiVerification}`)
    .then(response => response.data)
    .then(masteryInfo => res.json(masteryInfo))
    .catch(next);
});

// gets recent 20 games by account id
router.get('/recent/:accountId', (req, res, next) => {
  axios.get(`${apiBase}/match/v3/matchlists/by-account/${req.params.accountId}/recent${apiVerification}`)
    .then(response => response.data)
    .then(recentMatchInfo => res.json(recentMatchInfo))
    .catch(next);
});

// gets matches by filter
router.get('/games/:name', (req, res, next) => {
  axios.get(`${apiBase}/summoner/v3/summoners/by-name/${req.params.name}${apiVerification}`)
    .then(response => response.data)
    .then(playerInfo => axios.get(`${apiBase}/match/v3/matchlists/by-account/${playerInfo.accountId}?champion=jarvan${apiVerification}`))
    .then(response => response.data)
    .then(matchInfo => res.json(matchInfo))
    .catch(next);
});

// gets challenger solo queue players
router.get('/soloChallengers', (req, res, next) => {
  axios.get(`${apiBase}/league/v3/challengerleagues/by-queue/RANKED_SOLO_5x5${apiVerification}`)
    .then(response => response.data)
    .then((matchInfo) => {
      matchInfo.entries.sort((a, b) => b.leaguePoints - a.leaguePoints);
      res.json(matchInfo);
    })
    .catch(next);
});

// gets live game by summonerId
router.get('/liveGame/:summonerId', (req, res, next) => {
  axios.get(`${apiBase}/spectator/v3/active-games/by-summoner/${req.params.summonerId}${apiVerification}`)
    .then(response => response.data)
    .then(matchInfo => res.json(matchInfo))
    .catch(next);
});

// get basic profile
router.get('/profile/:summonerId', (req, res, next) => {
  axios.get(`${apiBase}/league/v3/positions/by-summoner/${req.params.summonerId}${apiVerification}`)
    .then(response => response.data)
    .then((playerInfo) => {
      res.json(playerInfo);
    })
    .catch(next);
});

module.exports = router;
