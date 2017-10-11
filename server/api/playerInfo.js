const router = require('express').Router()
const request = require('request')
const secrets = require('../../secrets')



//gets basic profile by player name
router.get('/player/:name', (req, res, next) => {
  request(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.params.name}?api_key=${secrets.LEAGUE_API_KEY}`, function (error, response, body) {
    res.json(body)
  })
})

//gets mastery pages by summoner name
router.get('/accountMasteries/:name', (req, res, next) => {
  request(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.params.name}?api_key=${secrets.LEAGUE_API_KEY}`, function (error, response, body) {
    let playerInfo = JSON.parse(body)
    request(`https://na1.api.riotgames.com/lol/platform/v3/masteries/by-summoner/${playerInfo.id}?api_key=${secrets.LEAGUE_API_KEY}`, function (error, response, body) {
      let matchInfo = JSON.parse(body)
      res.json(matchInfo)
    })
  })
})

//gets rune pages by summoner name
router.get('/accountRunes/:name', (req, res, next) => {
  request(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.params.name}?api_key=${secrets.LEAGUE_API_KEY}`, function (error, response, body) {
    let playerInfo = JSON.parse(body)
    request(`https://na1.api.riotgames.com/lol/platform/v3/runes/by-summoner/${playerInfo.id}?api_key=${secrets.LEAGUE_API_KEY}`, function (error, response, body) {
      let matchInfo = JSON.parse(body)
      res.json(matchInfo)
    })
  })
})

//gets champion masteries by summoner name
router.get('/championMastery/:name', (req, res, next) => {
  request(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.params.name}?api_key=${secrets.LEAGUE_API_KEY}`, function (error, response, body) {
    let playerInfo = JSON.parse(body)
    request(`https://na1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/${playerInfo.id}?api_key=${secrets.LEAGUE_API_KEY}`, function (error, response, body) {
      let matchInfo = JSON.parse(body)
      res.json(matchInfo)
    })
  })
})

//gets recent 20 games by summoner name
router.get('/recent/:name', (req, res, next) => {
  request(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.params.name}?api_key=${secrets.LEAGUE_API_KEY}`, function (error, response, body) {
    let playerInfo = JSON.parse(body)
    request(`https://na1.api.riotgames.com//lol/match/v3/matchlists/by-account/${playerInfo.accountId}/recent?api_key=${secrets.LEAGUE_API_KEY}`, function (error, response, body) {
      let matchInfo = JSON.parse(body)
      res.json(matchInfo)
    })
  })
})
//gets matches by filter
router.get('/games/:name', (req, res, next) => {
  console.log(req.query)
  // Object.keys() Object.values()
  request(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.params.name}?api_key=${secrets.LEAGUE_API_KEY}`, function (error, response, body) {
    let playerInfo = JSON.parse(body)
    request(`https://na1.api.riotgames.com//lol/match/v3/matchlists/by-account/${playerInfo.accountId}?champion=jarvan?api_key=${secrets.LEAGUE_API_KEY}`, function (error, response, body) {
      let matchInfo = JSON.parse(body)
      res.json(matchInfo)
    })
  })
})




module.exports = router
