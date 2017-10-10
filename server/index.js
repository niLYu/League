const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

module.exports = app
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, '../public')))
  .use('/api', require('./api'))
  .get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  });

if (module === require.main) {
  app.listen(3000, function () {
    console.log('App is listening on port 3000!')
  })
}
