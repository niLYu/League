const router = require('express').Router();
// const request = require('request')
const axios = require('axios');
if (process.env.NODE_ENV !== 'production') require('../../secrets');
const LEAGUE_API_KEY = process.env.LEAGUE_API_KEY;


const saveChampInfo = (string) => {
    const filePath = path.resolve(__dirname, '../../public/images/champions');
    const image = Buffer.from(response.data);
    fs.writeFile(`${filePath}/${champion}.png`, image, (err) => {
      if (err) {
        fs.appendFile(`${filePath}/errorlog.txt`, `${champion}: ${err}\n`);
        console.log(`Error saving data for ${champion}`);
      } else {
        console.log(`The data for ${champion} has been saved`);
      }
    });
  }


router.get('/', (req, res, next) => {
  axios.get(`https://na1.api.riotgames.com/lol/static-data/v3/champions?api_key=${LEAGUE_API_KEY}`)
  .then(response => {
      const championByName = response.data.data;
      const championById = {};
      console.log(championByName);
      Object.keys(championByName).slice(0, 10).forEach((name) => {
        const championInfo = championByName[name];
        championById[championInfo.id] = championInfo;
      });
      res.json(championById);
    });
});


module.exports = router;
