const router = require('express').Router();


router
  .use('/matchInfo', require('./match'))
  .use('/playerInfo', require('./playerInfo'))
  .use('/riotScraper', require('./riotScraper'));

router.use((req, res) => res.status(404).end());

module.exports = router;
