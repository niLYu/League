const router = require('express').Router();
const request = require('request');
const secrets = require('../../secrets');
const Player = require('../../db').models.player;


// gets basic profile by player name
router.get('/player/:name', (req, res, next) => {
  console.log('got here', secrets.LEAGUE_API_KEY)
  request(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.params.name}?api_key=${secrets.LEAGUE_API_KEY}`, (error, response, body) => {
    if (error)console.log('error', error);
    const info = JSON.parse(body);
    res.json(info);
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
    .catch(error => console.log(error));
});

// gets mastery pages by id
router.get('/accountMasteries/:id', (req, res, next) => {
  request(`https://na1.api.riotgames.com/lol/platform/v3/masteries/by-summoner/${req.params.id}?api_key=${secrets.LEAGUE_API_KEY}`, (error, response, body) => {
    if (error)console.log('error', error);
    const matchInfo = JSON.parse(body);
    res.json(matchInfo);
  });
});

// gets rune pages by id
router.get('/accountRunes/:id', (req, res, next) => {
  request(`https://na1.api.riotgames.com/lol/platform/v3/runes/by-summoner/${req.params.id}?api_key=${secrets.LEAGUE_API_KEY}`, (error, response, body) => {
    if (error)console.log('error', error);
    const matchInfo = JSON.parse(body);
    res.json(matchInfo);
  });
});

// gets champion masteries by acccount id
router.get('/championMastery/:accountId', (req, res, next) => {
  request(`https://na1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/${req.params.accountId}?api_key=${secrets.LEAGUE_API_KEY}`, (error, response, body) => {
    if (error)console.log('error', error);
    const matchInfo = JSON.parse(body);
    res.json(matchInfo);
  });
});

// gets recent 20 games by account id
router.get('/recent/:accountId', (req, res, next) => {
  request(`https://na1.api.riotgames.com//lol/match/v3/matchlists/by-account/${req.params.accountId}/recent?api_key=${secrets.LEAGUE_API_KEY}`, (error, response, body) => {
    if (error)console.log('error', error);
    const matchInfo = JSON.parse(body);
    res.json(matchInfo);
  });
});

// gets matches by filter
router.get('/games/:name', (req, res, next) => {
  request(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.params.name}?api_key=${secrets.LEAGUE_API_KEY}`, (error, response, body) => {
    if (error)console.log('error', error);
    const playerInfo = JSON.parse(body);
    request(`https://na1.api.riotgames.com//lol/match/v3/matchlists/by-account/${playerInfo.accountId}?champion=jarvan?api_key=${secrets.LEAGUE_API_KEY}`, (error, response, body) => {
      if (error)console.log('error', error);
      const matchInfo = JSON.parse(body);
      res.json(matchInfo);
    });
  });
});

// gets challenger solo queue players
router.get('/soloChallengers', (req, res, next) => {
  request(`https://na1.api.riotgames.com/lol/league/v3/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=${secrets.LEAGUE_API_KEY}`, (error, response, body) => {
    if (error)console.log('error', error);
    const matchInfo = JSON.parse(body);
    matchInfo.entries.sort((a, b) => b.leaguePoints - a.leaguePoints);
    res.json(matchInfo);
  });
});

// gets live game by summonerId
router.get('/liveGame/:summonerId', (req, res, next) => {
  request(`https://na1.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/${req.params.summonerId}?api_key=${secrets.LEAGUE_API_KEY}`, (error, response, body) => {
    if (error)console.log('error', error);
    const matchInfo = JSON.parse(body);
    res.json(matchInfo);
  });
});

router.get('/liveGame/:summonerId', (req, res, next) => {
  request(`https://na1.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/${req.params.summonerId}?api_key=${secrets.LEAGUE_API_KEY}`, (error, response, body) => {
    if (error)console.log('error', error);
    const matchInfo = JSON.parse(body);
    res.json(matchInfo);
  });
});
module.exports = router;
