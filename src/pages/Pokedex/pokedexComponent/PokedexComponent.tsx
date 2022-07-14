import React, { FC, useEffect, useState, useRef } from 'react';
import { pokemonsChange } from '../../../features/Pokemons/pokemonsSlice';
import { PokemonObject } from '../../../helpers/pokemonHelperFunctions';
import {
	PokeType,
	calculateColor,
	calculateLightColor,
} from '../../../helpers/pokemonHelperFunctions';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
	Container,
	AllPokemonsContainer,
	Wrapper,
	Title,
} from '../pokedexComponent/PokedexComponent.Styles';
import PokedexCard from '../pokedexCard/PokedexCard';
interface PokedexComponentProps {
	type: string;
}

const PokedexComponent: FC<PokedexComponentProps> = ({ type }) => {
	const dispatch = useDispatch();
	const [allPokemons, setAllPokemons] = useState<[] | PokemonObject[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [maxWidth, setMaxWidth] = useState<number>(0);

	const wrapperRef = useRef<HTMLDivElement | null>(null);

	const [url, setUrl] = useState<string>(
		`https://pokeapi.co/api/v2/type/${type}`
	);
	const fetchPokemonData = async (str: string) => {
		try {
			const rawData = await axios.get(str);
			console.log(rawData.data);
			setAllPokemons(rawData.data.pokemons);
			const refinedData: any = rawData.data.pokemon.map((el: any) => {
				return (async () => {
					const { data } = await axios.get(el.pokemon.url);
					return data;
				})();
			});

			const resolvedData: PokemonObject[] = await Promise.all(
				refinedData
			);
			setAllPokemons(resolvedData);

			// console.log(resolvedData);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
			setMaxWidth(calculateWidth());
		}
	};

	const calculateWidth = (): number => {
		let max: number = 0;
		if (wrapperRef.current?.scrollWidth !== undefined) {
			max =
				wrapperRef.current?.scrollWidth -
				wrapperRef.current?.offsetWidth;
		}
		return max;
	};

	useEffect(() => {
		fetchPokemonData(url);
	}, []);

	return (
		<Container bcolor={calculateLightColor(type)}>
			<Title bcolor={calculateColor(type)}>{type.toUpperCase()}</Title>
			{loading ? (
				'Loading Please wait'
			) : (
				<Wrapper ref={wrapperRef}>
					<AllPokemonsContainer
						drag="x"
						dragConstraints={{
							right: 0,
							left: -maxWidth,
						}}
					>
						{allPokemons.map((el, i) => (
							<PokedexCard key={i} pokemon={el} />
						))}
					</AllPokemonsContainer>
				</Wrapper>
			)}
		</Container>
	);
};

export default PokedexComponent;
