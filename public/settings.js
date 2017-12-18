// static route data for images, easier to update when DDVersion changes
const ddragonApiRoute = 'https://ddragon.leagueoflegends.com/cdn';
const latestDDVersion = '7.24.2';
const url = `${ddragonApiRoute}/${latestDDVersion}/img`;

const assets = {
  champion: `${url}/champion`,
  item: `${url}/item`,
  summonerSpell: `${url}/spell`,
};

export default assets;
