import axios from 'axios';
import logo from '../../../assets/spinner.gif';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	PokemonObject,
	calculateColor,
} from '../../../helpers/pokemonHelperFunctions';

import {
	Wrapper,
	Container,
	PositionIndicator,
	TypeCircle,
	Name,
	Image,
	ImgHolder,
	WeightContainer,
	HeightContainer,
	ParameterValue,
	ParametersContainer,
	ParameterName,
	TypesContainer,
	TypeTitle,
	TypeName,
	Separator,
} from './CarouselItem.Styles';
import { selectedPokemonChange } from '../../../features/SelectedPokemon/SelectedPokemonSlice';

interface PokedexCardProps {
	pokemon: PokemonObject;
}
interface PokemonUrl {
	pokemon: {
		pokemon: {
			name: string;
			url: string;
		};
	};
}

const CarouselItem: FC<PokemonUrl> = ({ pokemon }) => {
	const [pokemonData, setPokemonData] = useState<null | PokemonObject>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [backgroundColor, setBackgroundColor] = useState<string>('');
	const dispatch = useDispatch();

	const capitalizeFirstLetter = (str: string): string => {
		const result = str.charAt(0).toUpperCase() + str.slice(1);

		return result;
	};

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const rawData = await axios.get(pokemon.pokemon.url);
				setPokemonData(rawData.data);
			} catch (error) {
				console.log(error);
			} finally {
				if (pokemonData?.types[0].type.name) {
					setBackgroundColor(
						calculateColor(pokemonData?.types[0].type.name)
					);
				}
				setLoading(false);
			}
		})();
	}, []);

	const containerRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		if (pokemonData) {
			setBackgroundColor(calculateColor(pokemonData?.types[0].type.name));
		}
	}, [pokemonData]);

	return (
		<Wrapper>
			{loading || !pokemonData?.types ? (
				<img
					style={{ maxWidth: '50%', maxHeight: '30%' }}
					src={logo}
				></img>
			) : (
				<Container
					bcolor={backgroundColor}
					ref={containerRef}
					onClick={(e) => {
						dispatch(selectedPokemonChange(pokemonData));
					}}
				>
					<PositionIndicator>
						# {`${pokemonData?.id}`.padStart(3, '0')}
					</PositionIndicator>
					<TypeCircle bcolor={backgroundColor} />
					<ImgHolder>
						<Image src={pokemonData?.sprites.front_default} />
					</ImgHolder>
					<Name>{pokemonData?.name}</Name>
					<ParametersContainer>
						<WeightContainer>
							<ParameterName>{'Weight'}</ParameterName>
							<ParameterValue>
								{pokemonData ? pokemonData?.weight / 10 : ''} KG
							</ParameterValue>
						</WeightContainer>
						<HeightContainer>
							<ParameterName>{'Height'}</ParameterName>
							<ParameterValue>
								{pokemonData ? pokemonData?.height / 10 : ''} M
							</ParameterValue>
						</HeightContainer>
					</ParametersContainer>
					<TypesContainer>
						<TypeTitle>Type: </TypeTitle>
						{pokemonData?.types.length === 1 ? (
							<TypeName>
								{pokemonData?.types[0]?.type.name
									? capitalizeFirstLetter(
											pokemonData?.types[0]?.type.name
									  )
									: ''}
							</TypeName>
						) : (
							<>
								<TypeName>
									{pokemonData?.types[0]?.type.name
										? capitalizeFirstLetter(
												pokemonData?.types[0]?.type.name
										  )
										: ''}
								</TypeName>
								<Separator> / </Separator>
								<TypeName>
									{pokemonData?.types[1]?.type.name
										? capitalizeFirstLetter(
												pokemonData?.types[1]?.type.name
										  )
										: ''}
								</TypeName>{' '}
							</>
						)}
					</TypesContainer>
				</Container>
			)}
		</Wrapper>
	);
};

export default CarouselItem;
