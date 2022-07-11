import React, { FC } from 'react';
import {
	Container,
	LogoContainer,
	NavigationContainer,
	NavItem,
	PokeballImg,
} from './Nav.Styles';
import pokeballLogo from '../../assets/pokeballLogo.png';

const Nav: FC = () => {
	return (
		<Container>
			<LogoContainer>
				<PokeballImg src={pokeballLogo} />
			</LogoContainer>
			<NavigationContainer>
				<NavItem>Home</NavItem>
				<NavItem>Rules</NavItem>
				<NavItem>Pokedex</NavItem>
				<NavItem>Tournament</NavItem>
			</NavigationContainer>
		</Container>
	);
};

export default Nav;
