import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { calculateColor } from '../../../helpers/pokemonHelperFunctions';
import {
	slot1Change,
	slot2Change,
	slot3Change,
	slot1Remove,
	slot2Remove,
	slot3Remove,
} from '../../../features/UserPokedex/userPokedexSlice';

import {
	Container,
	Title,
	SlotContainer,
	SlotItem,
	SlotTitle,
	SlotImgContainer,
	SlotImg,
	ButtonContainer,
	Button,
	NotSelected,
	SlotName,
	SlotTitleMobile,
} from './UserPokedex.Styles';

const UserPokedex: FC = () => {
	const dispatch = useDispatch();

	const selectedPokemon = useSelector(
		(state: RootState) => state.selectedPokemon.value
	);
	const userPokedex = useSelector(
		(state: RootState) => state.userPokedex.value
	);

	// dispatch(slot1Change(selectedPokemon));

	const addToPokedex = (slot: number) => {
		if (selectedPokemon.name === 'default') return;
		if (slot === 1) {
			dispatch(slot1Change(selectedPokemon));
			return;
		}

		if (slot === 2) {
			dispatch(slot2Change(selectedPokemon));
			return;
		}
		if (slot === 3) {
			dispatch(slot3Change(selectedPokemon));
			return;
		}
	};

	const removeFromPokedex = (slot: number) => {
		if (slot === 1) {
			dispatch(slot1Remove());
			return;
		}

		if (slot === 2) {
			dispatch(slot2Remove());
			return;
		}
		if (slot === 3) {
			dispatch(slot3Remove());
			return;
		}
	};
	console.log(userPokedex);
	return (
		<Container>
			<Title>Your Pokedex</Title>
			<SlotContainer>
				<SlotItem>
					<SlotTitle>Slot 1:</SlotTitle>
					<SlotTitleMobile>1:</SlotTitleMobile>
					{userPokedex.slot1 === null ? (
						<NotSelected>not selected</NotSelected>
					) : (
						<SlotImgContainer
							color={calculateColor(
								userPokedex.slot1.types[0].type.name
							)}
						>
							<SlotName>{userPokedex.slot1.name}</SlotName>
							<SlotImg
								src={userPokedex.slot1?.sprites.front_default}
							/>
						</SlotImgContainer>
					)}
					<ButtonContainer>
						<Button
							color="#528e4a"
							onClick={() => {
								addToPokedex(1);
							}}
						>
							Add
						</Button>
						<Button
							color="#cf4719"
							onClick={() => {
								removeFromPokedex(1);
							}}
						>
							Remove
						</Button>
					</ButtonContainer>
				</SlotItem>
				<SlotItem>
					<SlotTitle>Slot 2:</SlotTitle>
					<SlotTitleMobile>2:</SlotTitleMobile>
					{userPokedex.slot2 === null ? (
						<NotSelected>not selected</NotSelected>
					) : (
						<SlotImgContainer
							color={calculateColor(
								userPokedex.slot2.types[0].type.name
							)}
						>
							<SlotName>{userPokedex.slot2.name}</SlotName>
							<SlotImg
								src={userPokedex.slot2?.sprites.front_default}
							/>
						</SlotImgContainer>
					)}
					<ButtonContainer>
						<Button
							color="#528e4a"
							onClick={() => {
								addToPokedex(2);
							}}
						>
							Add
						</Button>
						<Button
							color="#cf4719"
							onClick={() => {
								removeFromPokedex(2);
							}}
						>
							Remove
						</Button>
					</ButtonContainer>
				</SlotItem>
				<SlotItem>
					<SlotTitle>Slot 3:</SlotTitle>
					<SlotTitleMobile>3:</SlotTitleMobile>
					{userPokedex.slot3 === null ? (
						<NotSelected>not selected</NotSelected>
					) : (
						<SlotImgContainer
							color={calculateColor(
								userPokedex.slot3.types[0].type.name
							)}
						>
							<SlotName>{userPokedex.slot3.name}</SlotName>
							<SlotImg
								src={userPokedex.slot3?.sprites.front_default}
							/>
						</SlotImgContainer>
					)}
					<ButtonContainer>
						<Button
							color="#528e4a"
							onClick={() => {
								addToPokedex(3);
							}}
						>
							Add
						</Button>
						<Button
							color="#cf4719"
							onClick={() => {
								removeFromPokedex(3);
							}}
						>
							Remove
						</Button>
					</ButtonContainer>
				</SlotItem>
			</SlotContainer>
		</Container>
	);
};

export default UserPokedex;
