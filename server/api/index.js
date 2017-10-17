const router = require('express').Router();


router
  .use('/matchInfo', require('./match'))
  .use('/playerInfo', require('./playerInfo'));

router.use((req, res) => res.status(404).end());

module.exports = router;
