import axios from 'axios';

const fetchAllChampions = () => {
	return axios.get(
		'http://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/champion.json',
	);
};

const fetchChampionByName = name => {};

const ChampionService = {
	fetchAllChampions,
	fetchChampionByName,
};

export default ChampionService;
