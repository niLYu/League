const router = require('express').Router();
const { News } = require('../../db/models/index');

router.get('/', (req, res, next) => {
  News.findAll()
    .then((articles) => {
      res.json(articles);
    })
    .catch(next);
});

module.exports = router;
