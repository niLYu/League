const router = require('express').Router();


router
  .use('/matchInfo', require('./match'))
  .use('/playerInfo', require('./playerInfo'))
  .use('/champions', require('./champions'))
  .use('/getAssets', require('./getAssets'))
  .use('/news', require('./news'));

router.use((req, res) => res.status(404).end());

module.exports = router;
