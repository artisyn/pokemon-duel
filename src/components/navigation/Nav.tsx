import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Container,
	LogoContainer,
	NavigationContainer,
	NavItem,
	PokeballImg,
} from './Nav.Styles';
import pokeballLogo from '../../assets/pokeballLogo.png';

const Nav: FC = () => {
	const navigate = useNavigate();
	return (
		<Container>
			<LogoContainer>
				<PokeballImg src={pokeballLogo} />
			</LogoContainer>
			<NavigationContainer>
				<NavItem
					onClick={() => {
						navigate('/Home');
					}}
				>
					Home
				</NavItem>
				<NavItem>Rules</NavItem>
				<NavItem
					onClick={() => {
						navigate('/Pokedex');
					}}
				>
					Pokedex
				</NavItem>
				<NavItem>Tournament</NavItem>
			</NavigationContainer>
		</Container>
	);
};

export default Nav;
