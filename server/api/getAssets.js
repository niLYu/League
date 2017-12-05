const router = require('express').Router();
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const util = require('util');
const summonerSpells = require('../../summonerSpells.js');
// eslint-disable-next-line global-require
if (process.env.NODE_ENV !== 'production') require('../../secrets');

const { LEAGUE_API_KEY } = process.env;
const champList = require('../../seed.jsx');

/* This file contains routes used to get static-data using RIOT's Data Dragon tool
   Data Dragon is a web service tool that stores game data and assets for LoL
   More information can be found at https://developer.riotgames.com/static-data.html */

const apiRoute = 'https://na1.api.riotgames.com/lol/static-data/v3';

// Api route to get static data - no rate limit
const ddragonApiRoute = 'http://ddragon.leagueoflegends.com/cdn';

const apiValidation = `?api_key=${LEAGUE_API_KEY}`;
let latestDDVersion = '7.22.1';
const champListArray = Object.values(champList.Heroes);

const saveImageAssets = (filePath, name, image) => {
  fs.writeFile(`${filePath}/${name}.png`, image, (err) => {
    if (err) {
      fs.appendFile(`${filePath}/errorlog.txt`, `${name}: ${err}\n`);
      console.log(`Error saving data for ${name}`);
    } else {
      console.log(`The data for ${name} has been saved`);
    }
  });
};

/* An example of how to use (pass in these arguments)
  url: http://ddragon.leagueoflegends.com/cdn/7.22.1/img/spell
  name: SummonerFlash
  filePath: location where you want to save the assets */

const fetchAndSave = (url, name, filePath) => {
  const srcUrl = `${url}/${name}.png`;
  axios.get(srcUrl, { responseType: 'arraybuffer' })
    .then((response) => {
      const image = Buffer.from(response.data);
      saveImageAssets(filePath, name, image);
    })
    .catch((e) => { console.log(e); });
};

// Gets and assigns the latest DDVersion
router.use('/', async (req, res, next) => {
  try {
    const response = await axios.get(`${apiRoute}/versions${apiValidation}`);
    [latestDDVersion] = response.data;
  } catch (e) {
    console.log('Error updating DDVersion: ', e);
  } finally {
    next();
  }
});

// Gets all champion icons
router.get('/champions', (req, res, next) => {
  const url = `${ddragonApiRoute}/${latestDDVersion}/img/champion`;
  const filePath = path.resolve(__dirname, '../../public/images/champions');
  champListArray.forEach((champ) => {
    fetchAndSave(url, champ.key, filePath);
  });
  next();
});

// Gets champion icon for one champion
router.get('/champion/:name', (req, res, next) => {
  // Champion's first and last name needs to start capitalized with no spaces
  const url = `${ddragonApiRoute}/${latestDDVersion}/img/champion`;
  const filePath = path.resolve(__dirname, '../../public/images/champions');
  const champion = req.params.name.split(' ')
    .map(name => name[0].toUpperCase() + name.slice(1).toLowerCase()).join('');
  fetchAndSave(url, champion, filePath);
  next();
});

// Gets and saves summonerSpellsData object into the root directory
router.get('/summonerSpellsData', (req, res, next) => {
  const url = `${ddragonApiRoute}/${latestDDVersion}/data/en_US/summoner.json`;
  axios.get(url)
    .then(response => response.data)
    .then((spells) => {
      const filePath = path.resolve(__dirname, '../..');
      const file = `module.exports = ${util.inspect(spells, { depth: null })}`;
      fs.writeFileSync(`${filePath}/summonerSpells.js`, file, 'utf-8');
      res.json(spells);
    })
    .catch(next);
});

// Gets and saves all summoner spell icons in the public directory
router.get('/summonerSpellsIcons', (req, res, next) => {
  const url = `${ddragonApiRoute}/${latestDDVersion}/img/spell`;
  const filePath = path.resolve(__dirname, '../../public/images/summonerSpells');
  const allSpells = Object.keys(summonerSpells.data);
  allSpells.forEach((spell) => {
    fetchAndSave(url, spell, filePath);
  });
  next();
});

module.exports = router;

