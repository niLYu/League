import { data } from './summonerSpells';

const summonerSpells = {};
const summonerSpellNames = Object.keys(data);

// create an object where each key represents the id(number) for the summoner spell object
for (let i = 0; i < summonerSpellNames.length; i += 1) {
  summonerSpells[data[summonerSpellNames[i]].key] = data[summonerSpellNames[i]];
}

export default summonerSpells;
