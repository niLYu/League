const router = require('express').Router();

// eslint-disable-next-line global-require
if (process.env.NODE_ENV !== 'production') require('../../secrets');

const { LEAGUE_API_KEY } = process.env;
const { Player } = require('../../db/models');
const axios = require('axios');

const apiBase = 'https://na1.api.riotgames.com/lol';
const apiVerification = `?api_key=${LEAGUE_API_KEY}`;

// gets basic profile by player name and
router.get('/player/:name', (req, res, next) => {
  // need to encodeURI to handle different characters
  const encodedParam = encodeURI(req.params.name);
  axios.get(`${apiBase}/summoner/v3/summoners/by-name/${encodedParam}${apiVerification}`)
    .then(response => response.data)
    .then((results) => {
      Player.findOrCreate({
        where: {
          name: req.params.name,
        },
        defaults: results,
      });
      res.json(results);
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
  let recentGames;
  const recentMatchURL = `${apiBase}/match/v3/matchlists/by-account/${req.params.accountId}/recent`;
  axios.get(`${recentMatchURL}${apiVerification}`)
    .then(response => response.data)
    .then((recentMatchInfo) => {
      recentGames = recentMatchInfo.matches.slice(0, 10);
      const allGames = recentGames.map(game => axios.get(`${apiBase}/match/v3/matches/${game.gameId}${apiVerification}`));
      return Promise.all(allGames).catch((e) => { console.log(e); });
    }).then((games) => {
      // adding each individual match data to every recent match
      games.forEach((game, index) => {
        recentGames[index].details = game.data;
      });
      res.json(recentGames);
    })
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
    .then((matchInfo) => {
      const allPlayers = matchInfo.participants.map(player =>
        axios.get(`${apiBase}/league/v3/positions/by-summoner/${player.summonerId}${apiVerification}`));
      return Promise.all(allPlayers).catch(err => console.error(err))
        .then((totalPlayers) => {
          matchInfo.playerData = [];
          totalPlayers.forEach((game) => {
            matchInfo.playerData.push(game.data);
          });
          res.json(matchInfo);
        })
        .catch(next);
    })
    .catch(next);
});

// get queue ranks with summonerId
router.get('/profile/:summonerId', (req, res, next) => {
  axios.get(`${apiBase}/league/v3/positions/by-summoner/${req.params.summonerId}${apiVerification}`)
    .then(response => response.data)
    .then((playerInfo) => {
      res.json(playerInfo);
    })
    .catch(next);
});

module.exports = router;
