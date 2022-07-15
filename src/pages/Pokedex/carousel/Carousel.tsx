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
} from './Carousel.Styles';
import CarouselItem from '../carouselItem/CarouselItem';
interface PokedexComponentProps {
	type: string;
}
interface PokemonUrl {
	pokemon: {
		name: string;
		url: string;
	};
}

const Carousel: FC<PokedexComponentProps> = ({ type }) => {
	const dispatch = useDispatch();
	const [allPokemons, setAllPokemons] = useState<[] | PokemonUrl[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const wrapperRef = useRef<HTMLDivElement | null>(null);

	const [url, setUrl] = useState<string>(
		`https://pokeapi.co/api/v2/type/${type}`
	);
	const fetchPokemonData = async (str: string) => {
		try {
			const rawData = await axios.get(str);
			setAllPokemons(rawData.data.pokemon);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
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
					<AllPokemonsContainer drag="x" dragConstraints={wrapperRef}>
						{allPokemons
							.filter((el, i) => {
								return i < 10;
							})
							.map((el, i) => (
								<CarouselItem key={i} pokemon={el} />
							))}
					</AllPokemonsContainer>
				</Wrapper>
			)}
		</Container>
	);
};

export default Carousel;
