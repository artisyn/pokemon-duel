import React, { FC } from 'react';
import styled from 'styled-components';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/navigation/Nav';
import TournamentBanner from '../../components/tournamentBanner/TournamentBanner';
import Slider from '../../components/slider/Slider';
import { Container } from './Home.Styles';

const Home: FC = () => {
	return (
		<Container>
			<Nav />
			<Banner />
			<Slider />
			<TournamentBanner />
			<Footer />
		</Container>
	);
};

export default Home;
