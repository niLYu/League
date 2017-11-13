const router = require('express').Router();
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const secrets = require('../../secrets');
const champList = require('../../seed.jsx');

/* This file contains routes used to get static-data using RIOT's Data Dragon tool
   Data Dragon is a web service tool that stores game data and assets for LoL
   More information can be found at https://developer.riotgames.com/static-data.html */

const apiRoute = 'https://na1.api.riotgames.com/lol/static-data/v3';

// Api route to get static data - no rate limit
const ddragonApiRoute = 'http://ddragon.leagueoflegends.com/cdn';

const apiValidation = `?api_key=${secrets.LEAGUE_API_KEY}`;
let latestDDVersion = '7.22.1';
const champListArray = Object.values(champList.Heroes);

const saveChampIcon = (champion, srcUrl) => {
  axios.get(srcUrl, { responseType: 'arraybuffer' })
    .then((response) => {
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
    })
    .catch((e) => { console.log(e); });
};

// Gets and assigns the latest DDVersion
router.use('/', (req, res, next) => {
  axios.get(`${apiRoute}/versions${apiValidation}`)
    .then((response) => {
      [latestDDVersion] = response.data;
    })
    .catch(next);
  next();
});

// Gets all champion icons
router.get('/all', (req, res, next) => {
  const url = `${ddragonApiRoute}/${latestDDVersion}/img/champion`;
  champListArray.forEach((champ) => {
    saveChampIcon(champ.key, `${url}/${champ.key}.png`);
  });
  next();
});

// Gets champion icon for one champion
router.get('/champion/:name', (req, res, next) => {
  // Champion first and last name needs to start capitalized with no spaces
  const champion = req.params.name.split(' ')
    .map(name => name[0].toUpperCase() + name.slice(1).toLowerCase()).join('');
  const url = `${ddragonApiRoute}/${latestDDVersion}/img/champion/${champion}.png`;
  saveChampIcon(champion, url);
  next();
});

module.exports = router;

