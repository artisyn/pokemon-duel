import React, { FC } from 'react';
import logo from '../../assets/flyingLogo.png';

import {
	Container,
	ButtonContainer,
	Title,
	FlyingLogo,
	Wrapper,
	DecorationTop,
	DecorationBottom,
} from './TournamentBanner.Styles';

const PokemonInfo: FC = () => {
	return (
		<Container>
			<DecorationTop />
			<Wrapper>
				<FlyingLogo src={logo} />
				<ButtonContainer>
					<Title>Participate In Tournament</Title>
				</ButtonContainer>
			</Wrapper>
			<DecorationBottom />
		</Container>
	);
};

export default PokemonInfo;
