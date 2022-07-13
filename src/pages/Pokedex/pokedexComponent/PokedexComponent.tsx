import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '../pokedexComponent/PokedexComponent.Styles';

const PokedexComponent: FC = () => {
	const [pokemons, setPokemons] = useState<[]>([]);
	const [url, setUrl] = useState<string>(
		`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${1000}`
	);
	const fetchPokemonData = async (str: string) => {
		const rawData = await axios.get(str);
		const refinedData: any = rawData.data.results.map((el: any) => {
			return (async () => {
				const { data } = await axios.get(el.url);
			})();
		});

		const resolvedData = await Promise.all(refinedData);

		console.log(rawData);
	};

	useEffect(() => {
		fetchPokemonData(url);
	}, []);
	return <Container>{}</Container>;
};

export default PokedexComponent;
