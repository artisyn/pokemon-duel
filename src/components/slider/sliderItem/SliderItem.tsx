import React, { FC, useState } from 'react';
import logo from '../../../assets/111.jpg';
import { PokeType } from '../../../helpers/pokemonTypes';
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
	const calculateColor = (type: string): string => {
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
		if (type === 'fight') return PokeType.fight;
		if (type === 'fire') return PokeType.fire;
		if (type === 'psychic') return PokeType.psychic;
		if (type === 'normal') return PokeType.normal;
		if (type === 'ghost') return PokeType.ghost;
		if (type === 'rock') return PokeType.rock;
		if (type === 'steel') return PokeType.steel;
		return '';
	};

	const changeStatName = (str: string) => {
		if (str === 'hp') return 'HP';
		if (str === 'attack') return 'ATT';
		if (str === 'defense') return 'DEF';
		if (str === 'special-attack') return 'SATK';
		if (str === 'special-defense') return 'SDEF';
		if (str === 'speed') return 'SPD';
	};
	const determineStatColor = (str: string): string => {
		if (str === 'hp') return '#bb423e';
		if (str === 'attack') return '#eea235';
		if (str === 'defense') return '#3f88e5';
		if (str === 'special-attack') return '#9e6e23';
		if (str === 'special-defense') return '#27568d';
		if (str === 'speed') return '#8da7bd';
		return '';
	};

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
