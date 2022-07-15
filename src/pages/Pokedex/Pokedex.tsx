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
import Carousel from './carousel/Carousel';
import StatsInfo from './statsInfo/StatsInfo';

const Pokedex: FC = () => {
	return (
		<Container>
			<Nav />
			<Banner />
			<PokedexContainer>
				<TitleContainer>
					<Title>Welcome To Pokedex</Title>
				</TitleContainer>
				<StatsInfo />
				<Carousel type={'flying'} />
				<Carousel type={'normal'} />
				<Carousel type={'fighting'} />
				<Carousel type={'poison'} />
				<Carousel type={'ground'} />
				<Carousel type={'rock'} />
				<Carousel type={'bug'} />
				<Carousel type={'ghost'} />
				<Carousel type={'steel'} />
				<Carousel type={'fire'} />
				<Carousel type={'water'} />
				<Carousel type={'grass'} />
				<Carousel type={'electric'} />
				<Carousel type={'psychic'} />
				<Carousel type={'ice'} />
				<Carousel type={'dragon'} />
				<Carousel type={'dark'} />
				<Carousel type={'fairy'} />
			</PokedexContainer>
			<Footer />
		</Container>
	);
};

export default Pokedex;
