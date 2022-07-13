export enum PokeType {
	normal = '#a8a77b',
	fight = '#af3e2b',
	flying = '#a493ec',
	poison = '#934a9d',
	ground = '#DAC070',
	rock = '#b3a044',
	bug = '#cfd55f',
	ghost = '#6c5b95',
	steel = '#b8b8cf',
	fire = '#df863b',
	water = '#7291ec',
	grass = '#8cc45c',
	electric = '#f0d048',
	psychic = '#e46687',
	ice = '#a7d6d8',
	dragon = '#6945f2',
	dark = '#6c5949',
	fairy = '#e6b9bc',
}

export const calculateColor = (type: string): string => {
	if (type === 'bug') return PokeType.bug;
	if (type === 'dark') return PokeType.dark;
	if (type === 'flying') return PokeType.flying;
	if (type === 'dragon') return PokeType.dragon;
	if (type === 'electric') return PokeType.electric;
	if (type === 'grass') return PokeType.grass;
	if (type === 'poison') return PokeType.poison;
	if (type === 'ice') return PokeType.ice;
	if (type === 'ground') return PokeType.ground;
	if (type === 'water') return PokeType.water;
	if (type === 'fairy') return PokeType.fairy;
	if (type === 'fighting') return PokeType.fight;
	if (type === 'fire') return PokeType.fire;
	if (type === 'psychic') return PokeType.psychic;
	if (type === 'normal') return PokeType.normal;
	if (type === 'ghost') return PokeType.ghost;
	if (type === 'rock') return PokeType.rock;
	if (type === 'steel') return PokeType.steel;
	return '';
};

export const changeStatName = (str: string) => {
	if (str === 'hp') return 'HP';
	if (str === 'attack') return 'ATT';
	if (str === 'defense') return 'DEF';
	if (str === 'special-attack') return 'SATK';
	if (str === 'special-defense') return 'SDEF';
	if (str === 'speed') return 'SPD';
};
export const determineStatColor = (str: string): string => {
	if (str === 'hp') return '#bb423e';
	if (str === 'attack') return '#eea235';
	if (str === 'defense') return '#3f88e5';
	if (str === 'special-attack') return '#9e6e23';
	if (str === 'special-defense') return '#27568d';
	if (str === 'speed') return '#8da7bd';
	return '';
};
