import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedPokemonChange } from '../../../features/SelectedPokemon/SelectedPokemonSlice';
import { RootState } from '../../../store/store';
import { RelationsObject } from '../../../helpers/pokemonHelperFunctions';
import UserPokedex from '../userPokedex/UserPokedex';
import {
	calculateColor,
	changeStatName,
	determineStatColor,
} from '../../../helpers/pokemonHelperFunctions';
import {
	Container,
	TypeCircle,
	TypeName,
	TypeTitle,
	TypesContainer,
	ImgHolder,
	StatsContainer,
	RelationsContainer,
	Image,
	ParameterName,
	ParameterValue,
	ParametersContainer,
	PositionIndicator,
	HeightContainer,
	WeightContainer,
	Name,
	CardContainer,
	Separator,
	BottomTitle,
	StatContainer,
	StatItem,
	StatName,
	StatValue,
	StatValueBackground,
	StatValueContainer,
	RelationsStatsContainer,
	RelationsTitle,
	RelationsItemType,
	RelationsItem,
	RelationsItemTitle,
	TypeVal,
} from './StatsInfo.Styles';
import axios from 'axios';

const StatsInfo = () => {
	const dispatch = useDispatch();
	const cardRef = useRef<null | HTMLDivElement>(null);
	const [animate, setAnimate] = useState<boolean>(false);
	const [index, setIndex] = useState<number>(1);
	const [relations, setRelations] = useState<null | RelationsObject>(null);
	// dispatch(selectedPokemon(data)
	const selectedPokemon = useSelector(
		(state: RootState) => state.selectedPokemon.value
	);
	const capitalizeFirstLetter = (str: string): string => {
		const result = str.charAt(0).toUpperCase() + str.slice(1);

		return result;
	};

	useEffect(() => {
		setAnimate(true);

		setTimeout(() => {
			setAnimate(false);
		}, 1000);
	}, [selectedPokemon]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(
				`https://pokeapi.co/api/v2/type/${selectedPokemon.types[0].type.name}`
			);
			setRelations(response.data.damage_relations);
			// console.log(response.data);
			console.log(relations?.double_damage_from);
		})();
	}, [selectedPokemon]);

	return (
		<Container>
			<CardContainer
				animate={animate}
				ref={cardRef}
				bcolor={calculateColor(selectedPokemon.types[0].type.name)}
			>
				<PositionIndicator>
					# {`${selectedPokemon?.id}`.padStart(3, '0')}
				</PositionIndicator>
				<TypeCircle
					bcolor={calculateColor(selectedPokemon.types[0].type.name)}
				/>
				<ImgHolder>
					<Image src={selectedPokemon?.sprites.front_default} />
				</ImgHolder>
				<Name>{selectedPokemon?.name}</Name>
				<ParametersContainer>
					<WeightContainer>
						<ParameterName>{'Weight'}</ParameterName>
						<ParameterValue>
							{selectedPokemon
								? selectedPokemon?.weight / 10
								: ''}{' '}
							KG
						</ParameterValue>
					</WeightContainer>
					<HeightContainer>
						<ParameterName>{'Height'}</ParameterName>
						<ParameterValue>
							{selectedPokemon
								? selectedPokemon?.height / 10
								: ''}{' '}
							M
						</ParameterValue>
					</HeightContainer>
				</ParametersContainer>
				<TypesContainer>
					<TypeTitle>Type: </TypeTitle>
					{selectedPokemon?.types.length === 1 ? (
						<TypeName>
							{selectedPokemon?.types[0]?.type.name
								? capitalizeFirstLetter(
										selectedPokemon?.types[0]?.type.name
								  )
								: ''}
						</TypeName>
					) : (
						<>
							<TypeName
								color={calculateColor(
									selectedPokemon?.types[0]?.type.name
								)}
							>
								{selectedPokemon?.types[0]?.type.name
									? capitalizeFirstLetter(
											selectedPokemon?.types[0]?.type.name
									  )
									: ''}
							</TypeName>
							<Separator> / </Separator>
							<TypeName>
								{selectedPokemon?.types[1]?.type.name
									? capitalizeFirstLetter(
											selectedPokemon?.types[1]?.type.name
									  )
									: ''}
							</TypeName>
						</>
					)}
				</TypesContainer>
			</CardContainer>
			<StatsContainer
				bcolor={calculateColor(selectedPokemon.types[0].type.name)}
			>
				<BottomTitle>Base Stats</BottomTitle>
				<StatContainer>
					{selectedPokemon.stats.map((stat, i) => (
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
			</StatsContainer>
			<RelationsContainer
				bcolor={calculateColor(selectedPokemon.types[0].type.name)}
			>
				<RelationsTitle>Type Relations</RelationsTitle>
				<RelationsStatsContainer>
					{relations === null ? (
						''
					) : (
						<>
							<RelationsItem>
								<RelationsItemTitle>
									{relations === null
										? ''
										: 'Double Damage from:'}
								</RelationsItemTitle>

								{relations &&
								relations.double_damage_from.length > 1 ? (
									<RelationsItemType>
										{relations.double_damage_from.map(
											(el) => (
												<TypeVal
													bcolor={calculateColor(
														el.name
													)}
												>
													{el.name}
												</TypeVal>
											)
										)}
									</RelationsItemType>
								) : (
									'No Data'
								)}
							</RelationsItem>
							<RelationsItem>
								<RelationsItemTitle>
									{relations === null
										? ''
										: 'Double Damage to:'}
								</RelationsItemTitle>
								{relations &&
								relations.double_damage_to.length > 1 ? (
									<RelationsItemType>
										{relations.double_damage_to.map(
											(el) => (
												<TypeVal
													bcolor={calculateColor(
														el.name
													)}
												>
													{el.name}
												</TypeVal>
											)
										)}
									</RelationsItemType>
								) : (
									'No Data'
								)}
							</RelationsItem>
							<RelationsItem>
								<RelationsItemTitle>
									{relations === null
										? ''
										: 'Half Damage from:'}
								</RelationsItemTitle>
								{relations &&
								relations?.half_damage_from.length > 1 ? (
									<RelationsItemType>
										{' '}
										{relations?.half_damage_from.map(
											(el) => (
												<TypeVal
													bcolor={calculateColor(
														el.name
													)}
												>
													{el.name}
												</TypeVal>
											)
										)}{' '}
									</RelationsItemType>
								) : (
									'No Data'
								)}
							</RelationsItem>
							<RelationsItem>
								<RelationsItemTitle>
									{relations === null
										? ''
										: 'Half Damage to:'}
								</RelationsItemTitle>
								{relations &&
								relations?.half_damage_to.length > 1 ? (
									<RelationsItemType>
										{' '}
										{relations?.half_damage_to.map((el) => (
											<TypeVal
												bcolor={calculateColor(el.name)}
											>
												{el.name}
											</TypeVal>
										))}{' '}
									</RelationsItemType>
								) : (
									'No Data'
								)}
							</RelationsItem>
							<RelationsItem>
								<RelationsItemTitle>
									{relations === null
										? ''
										: 'No Damage from:'}
								</RelationsItemTitle>
								{relations &&
								relations.no_damage_from.length > 1 ? (
									<RelationsItemType>
										{' '}
										{relations?.no_damage_from.map((el) => (
											<TypeVal
												bcolor={calculateColor(el.name)}
											>
												{el.name}
											</TypeVal>
										))}{' '}
									</RelationsItemType>
								) : (
									'No Data'
								)}
							</RelationsItem>
							<RelationsItem>
								<RelationsItemTitle>
									{relations === null ? '' : 'No Damage to:'}
								</RelationsItemTitle>
								{relations &&
								relations?.no_damage_to.length > 1 ? (
									<RelationsItemType>
										{' '}
										{relations?.no_damage_to.map((el) => (
											<TypeVal
												bcolor={calculateColor(el.name)}
											>
												{el.name}
											</TypeVal>
										))}{' '}
									</RelationsItemType>
								) : (
									'No Data'
								)}
							</RelationsItem>
						</>
					)}
				</RelationsStatsContainer>
			</RelationsContainer>
			<UserPokedex />
		</Container>
	);
};

export default StatsInfo;
