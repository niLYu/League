const router = module.exports = require('express').Router()


router
  .use('/test', require('./test'))


router.use((req, res) => res.status(404).end())

module.exports = router
