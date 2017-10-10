const router = require('express').Router()
const request = require('request')


router.get('/player/:name', (req, res, next) => {
  request(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.params.name}?api_key=RGAPI-52b455a3-662a-4d6f-a53f-44f335df34fb`, function (error, response, body) {
    res.json(body)
  })
})


router.get('/match/:name', (req, res, next) => {
  request(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.params.name}?api_key=RGAPI-52b455a3-662a-4d6f-a53f-44f335df34fb`, function (error, response, body) {

    let playerInfo = JSON.parse(body)
    console.log(playerInfo.id)
    // let id = body.slice(6,14)
    request(`https://na1.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/${playerInfo.id}?api_key=RGAPI-52b455a3-662a-4d6f-a53f-44f335df34fb`, function (error, response, body) {
      let matchInfo = JSON.parse(body)
      // console.log(matchInfo.gameId)
      res.json(matchInfo)
    })

  })
})

module.exports = router
