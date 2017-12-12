const router = require('express').Router();


router
  .use('/matchInfo', require('./matchInfo'))
  .use('/playerInfo', require('./playerInfo'))
  .use('/riotScraper', require('./riotScraper'))
  .use('/champions', require('./champions'))
  .use('/getAssets', require('./getAssets'));

router.use((req, res) => res.status(404).end());

module.exports = router;
