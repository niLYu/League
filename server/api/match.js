const router = require('express').Router()
const request = require('request')
const secrets = require('../../secrets')



//gets live game by summoner name
router.get('/match/:name', (req, res, next) => {
  request(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.params.name}?api_key=${secrets.LEAGUE_API_KEY}`, function (error, response, body) {
    let playerInfo = JSON.parse(body)
    console.log('error', error)
    request(`https://na1.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/${playerInfo.id}?api_key=${secrets.LEAGUE_API_KEY}`, function (error, response, body) {
      console.log('error', error)
      let matchInfo = JSON.parse(body)
      res.json(matchInfo)
    })
  })
})




module.exports = router
