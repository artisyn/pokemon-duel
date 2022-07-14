import React, { FC, useRef } from 'react';
import {
	PokemonObject,
	calculateColor,
} from '../../../helpers/pokemonHelperFunctions';

import {
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
} from './PokedexCard.Styles';

interface PokedexCardProps {
	pokemon: PokemonObject;
}

const PokedexCard: FC<PokedexCardProps> = ({ pokemon }) => {
	const backgroundColor = calculateColor(pokemon.types[0].type.name);
	const containerRef = useRef<HTMLDivElement | null>(null);

	return (
		<Container
			bcolor={backgroundColor}
			ref={containerRef}
			onClick={(e) => {
				// console.log(pokemon);
			}}
		>
			<PositionIndicator>
				# {`${pokemon.id}`.padStart(3, '0')}
			</PositionIndicator>
			<TypeCircle bcolor={backgroundColor} />
			<ImgHolder>
				<Image src={pokemon.sprites.front_default} />
			</ImgHolder>
			<Name>{pokemon.name}</Name>
			<ParametersContainer>
				<WeightContainer>
					<ParameterName>{'Weight'}</ParameterName>
					<ParameterValue>{pokemon.weight / 10} KG</ParameterValue>
				</WeightContainer>
				<HeightContainer>
					<ParameterName>{'Height'}</ParameterName>
					<ParameterValue>{pokemon.height / 10} M</ParameterValue>
				</HeightContainer>
			</ParametersContainer>
		</Container>
	);
};

export default PokedexCard;
