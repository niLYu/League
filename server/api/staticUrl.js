const axios = require('axios');
// eslint-disable-next-line global-require
if (process.env.NODE_ENV !== 'production') require('../../secrets');

const { LEAGUE_API_KEY } = process.env;

const apiRoute = 'https://na1.api.riotgames.com/lol/static-data/v3';
const apiValidation = `?api_key=${LEAGUE_API_KEY}`;

const getDDragonVersion = () => axios.get(`${apiRoute}/versions${apiValidation}`)
  .then((response) => {
    console.log('Latest DDversion: ', response.data[0]);
    return response.data[0];
  })
  .catch(e => console.log('Error updating DDVersion: ', e));

module.exports = getDDragonVersion;

