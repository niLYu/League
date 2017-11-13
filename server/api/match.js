const router = require('express').Router();
const axios = require('axios');
const secrets = require('../../secrets');
const Promise = require('bluebird');

const apiRoute = 'https://na1.api.riotgames.com/lol/match/v3';
const apiValidation = `?api_key=${secrets.LEAGUE_API_KEY}`;

// gets matches by summonerId, optional championId and season
router.get('/summoner/:summonerId', (req, res, next) => {
  const { summonerId } = req.params;
  let requestPath = `${apiRoute}/matchlists/by-account/${summonerId}?`;
  // allow for optional parameters -> season andOr champion
  const { championId, seasonId } = req.query;
  if (championId) requestPath += `champion=${championId}&`;
  if (seasonId) requestPath += `season=${seasonId}&`;
  requestPath += `api_key=${secrets.LEAGUE_API_KEY}`;
  axios.get(requestPath)
    .then((championSeasonData) => { // grabs a matchList matching parameters
      let { matches } = championSeasonData.data;
      // matches = matches.slice(0, 4);
      // matches = matches.slice(0, 20);
      if (!championId && !seasonId) res.json(matches);
      return Promise.mapSeries(matches, (match) => {
        // fetches match info for all matches in the list
        const matchRequest = `${apiRoute}/matches/${match.gameId}${apiValidation}`;
        return axios.get(matchRequest)
          .then(({ data }) => data);
      });
    })
    .then((populatedMatches) => {
      // too much info....only want the bet about this particular user....
      const totalGames = populatedMatches.length;
      let [lostGames, wonGames, maxKills, maxDeaths] = [0, 0, 0, 0]; // initialize all to 0;
      const total = {
        kills: 0,
        deaths: 0,
        assists: 0,
        goldEarned: 0,
        totalDamageDealt: 0,
        doubleKills: 0,
        tripleKills: 0,
        quadraKills: 0,
        pentaKills: 0,
      };
      populatedMatches.map((match) => {
        const summonerMatchId = match.participantIdentities.find(({ player }) => player.accountId === +summonerId).participantId;
        const summonerMatchInfo = match.participants[summonerMatchId];
        const summonerTeam = match.teams[(summonerMatchInfo.teamId / 100) - 1];
        const wonGameBool = (summonerTeam.win === 'Win');
        if (wonGameBool) wonGames += 1;
        else lostGames += 1;
        const { kills, deaths } = summonerMatchInfo.stats;
        if (kills > maxKills) maxKills = kills;
        if (deaths > maxDeaths) maxDeaths = deaths;
        Object.keys(total).map(key => total[key] += summonerMatchInfo.stats[key]);
      });
      res.json({
        totalGames, lostGames, wonGames, ...total,
      });
    })
    .catch(next);
});

module.exports = router;
