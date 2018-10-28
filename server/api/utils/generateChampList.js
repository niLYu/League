const generateChampion = (rawChampion) => {
  const parsedChampion = {
    name: rawChampion.name,
    title: rawChampion.title,
  };
  return parsedChampion;
};

const generateChampionList = (rawChampions) => {
  const champList = {};
  const championNames = Object.keys(rawChampions);
  championNames.forEach((champion) => {
    champList[rawChampions[champion].key] = generateChampion(rawChampions[champion]);
  });
  return champList;
};

module.exports = generateChampionList;
