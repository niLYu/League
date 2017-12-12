const router = require('express').Router();
const axios = require('axios');
if (process.env.NODE_ENV !== 'production') require('../../secrets');
const { LEAGUE_API_KEY } = process.env;
const Promise = require('bluebird');

const apiRoute = 'https://na1.api.riotgames.com/lol/match/v3';
const apiValidation = `?api_key=${LEAGUE_API_KEY}`;

// gets matches by summonerId, optional championId and season
router.get('/summoner/:summonerId', (req, res, next) => {
  const { summonerId } = req.params;
  let requestPath = `${apiRoute}/matchlists/by-account/${summonerId}${apiValidation}`;
  // console.log(requestPath);
  // allow for optional parameters -> season andOr champion
  const { championId, seasonId } = req.query;
  if (championId) requestPath += `&champion=${championId}`;
  if (seasonId) requestPath += `&season=${seasonId}`;
  // console.log(requestPath);
  // requestPath += `api_key=${LEAGUE_API_KEY}`;
  axios.get(requestPath)
    .then((championSeasonData) => { // grabs a matchList matching parameters
      const { matches } = championSeasonData.data;
      if (!championId && !seasonId) res.json(matches);
      return Promise.mapSeries(matches, (match) => {
        // fetches match info for all matches in the list
        const matchRequest = `${apiRoute}/matches/${match.gameId}${apiValidation}`;
        return axios.get(matchRequest)
          .then(({ data }) => data);
      });
    })
    .then((populatedMatches) => {
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
        const { participantId } = match.participantIdentities.find(({ player }) => player.accountId === +summonerId);
        const summonerMatchInfo = match.participants[participantId];
        const summonerTeam = match.teams[(summonerMatchInfo.teamId / 100) - 1];
        // console.log(summonerMatchInfo)
        const wonGameBool = (summonerTeam.win === 'Win');
        const { kills, deaths } = summonerMatchInfo.stats;

        if (wonGameBool) wonGames += 1;
        else lostGames += 1;

        if (kills > maxKills) maxKills = kills;
        if (deaths > maxDeaths) maxDeaths = deaths;

        Object.keys(total).map(key => total[key] += summonerMatchInfo.stats[key]);
      });
      const aggregateChampionInfo = { totalGames, lostGames, wonGames, ...total };
      res.json(aggregateChampionInfo);
    })
    .catch(next);
});

module.exports = router;
