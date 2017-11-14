const router = require('express').Router();
const axios = require('axios');
const cheerio = require('cheerio');

router.get('/news', (req, res) => {
  const url = 'http://na.leagueoflegends.com';

  axios.get(`${url}/en/news`).then((response) => {
    const $ = cheerio.load(response.data);
    const newsInfo = [];
    let counter = 0;

    $('.gs-container').filter(function () {
      const news = {};
      const data = $(this);
      if (counter < 8) {
        news.title = $('.lol-core-file-formatter', data)[0].attribs.title;
        news.content = $('.teaser-content', data).children().text();
        news.url = `${url}${$('.lol-core-file-formatter', data)[0].attribs.href}`;
        news.imageUrl = `${url}${$('.file-image', data).children()[0].attribs.src}`;
        news.time = $('.time-ago', data).text();
        newsInfo.push(news);
      }
      counter += 1;
    });
    res.json(newsInfo);
  });
});

module.exports = router;
