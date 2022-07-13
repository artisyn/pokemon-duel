import React, { FC, useState } from 'react';
import logo from '../../../assets/111.jpg';
import {
	calculateColor,
	changeStatName,
	determineStatColor,
} from '../../../helpers/pokemonHelperFunctions';
import {
	Container,
	PokemonImage,
	TypesContainer,
	Type,
	Title,
	TopPicture,
	MiddleInfo,
	BottomInfo,
	ParametersContainer,
	WeightContainer,
	HeightContainer,
	ParameterName,
	ParameterValue,
	BottomTitle,
	StatContainer,
	StatItem,
	StatName,
	StatValue,
	StatValueContainer,
	StatValueBackground,
} from '../sliderItem/SliderItem.Style';

interface SliderItemProps {
	pokemon: {
		name: string;
		sprites: {
			front_default: string;
			front_shiny?: string;
		};
		types: [{ slot: number; type: { name: string; url: string } }];
		species: { name: string };
		weight: number;
		height: number;
		stats: [{ base_stat: number; effort: number; stat: { name: string } }];
		abilities: [{ name: string }];
	};
}

const SliderItem: FC<SliderItemProps> = ({ pokemon }) => {
	return (
		<Container>
			<TopPicture color={calculateColor(pokemon.types[0].type.name)}>
				<PokemonImage src={pokemon.sprites.front_default} />
			</TopPicture>

			<MiddleInfo>
				<Title>{pokemon.name}</Title>
				<TypesContainer>
					{pokemon.types.map((type, i) => (
						<Type key={i} color={calculateColor(type.type.name)}>
							{type.type.name}
						</Type>
					))}
				</TypesContainer>
				<ParametersContainer>
					<WeightContainer>
						<ParameterValue>
							{pokemon.weight / 10} KG
						</ParameterValue>
						<ParameterName>{'Weight'}</ParameterName>
					</WeightContainer>
					<HeightContainer>
						<ParameterValue>{pokemon.height / 10} M</ParameterValue>
						<ParameterName>{'Height'}</ParameterName>
					</HeightContainer>
				</ParametersContainer>
			</MiddleInfo>
			<BottomInfo>
				<BottomTitle>Base Stats</BottomTitle>
				<StatContainer>
					{pokemon.stats.map((stat, i) => (
						<StatItem key={i}>
							<StatName>
								{changeStatName(stat.stat.name)}
							</StatName>{' '}
							<StatValueContainer>
								<StatValueBackground
									color={determineStatColor(stat.stat.name)}
									statwidth={stat.base_stat * 0.5}
								>
									<StatValue>{stat.base_stat}</StatValue>
								</StatValueBackground>
							</StatValueContainer>
						</StatItem>
					))}
				</StatContainer>
			</BottomInfo>
		</Container>
	);
};

export default SliderItem;
