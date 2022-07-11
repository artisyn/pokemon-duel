import React, { FC } from 'react';
import styled from 'styled-components';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/navigation/Nav';
import PokemonInfo from '../../components/pokemonInfo/PokemonInfo';
import Slider from '../../components/slider/Slider';
import { Container } from './Home.Styles';

const Home: FC = () => {
	return (
		<Container>
			<Nav />
			<Banner />
			<Slider />
			<PokemonInfo />
			<Footer />
		</Container>
	);
};

export default Home;
