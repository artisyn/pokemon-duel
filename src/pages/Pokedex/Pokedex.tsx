import React, { FC } from 'react';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/navigation/Nav';
import {
	Container,
	PokedexContainer,
	TitleContainer,
	Title,
} from './Pokedex.Styles';
import PokedexComponent from './pokedexComponent/PokedexComponent';

const Pokedex: FC = () => {
	return (
		<Container>
			<Nav />
			<Banner />
			<PokedexContainer>
				<TitleContainer>
					<Title>Welcome To Pokedex</Title>
				</TitleContainer>
				<PokedexComponent type={'flying'} />
				<PokedexComponent type={'normal'} />
				<PokedexComponent type={'fighting'} />
				<PokedexComponent type={'poison'} />
				<PokedexComponent type={'ground'} />
				<PokedexComponent type={'rock'} />
				<PokedexComponent type={'bug'} />
				<PokedexComponent type={'ghost'} />
				<PokedexComponent type={'steel'} />
				<PokedexComponent type={'fire'} />
				<PokedexComponent type={'water'} />
				<PokedexComponent type={'grass'} />
				<PokedexComponent type={'electric'} />
				<PokedexComponent type={'psychic'} />
				<PokedexComponent type={'ice'} />
				<PokedexComponent type={'dragon'} />
				<PokedexComponent type={'dark'} />
				<PokedexComponent type={'fairy'} />
			</PokedexContainer>
			<Footer />
		</Container>
	);
};

export default Pokedex;
