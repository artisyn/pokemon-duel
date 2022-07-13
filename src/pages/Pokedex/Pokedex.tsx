import React, { FC } from 'react';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/navigation/Nav';
import { Container, PokedexContainer } from './Pokedex.Styles';
import PokedexComponent from './pokedexComponent/PokedexComponent';

const Pokedex: FC = () => {
	return (
		<Container>
			<Nav />
			<Banner />
			<PokedexContainer>
				<PokedexComponent />
			</PokedexContainer>
			<Footer />
		</Container>
	);
};

export default Pokedex;
