import React, { FC, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { currentPageChange } from '../../features/CurrentPage/currentPageSlice';
import { RootState } from '../../store/store';
import styled from 'styled-components';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/navigation/Nav';
import TournamentBanner from '../../components/tournamentBanner/TournamentBanner';
import Slider from '../../components/slider/Slider';
import { Container } from './Home.Styles';

const Home: FC = () => {
	const currentPage = useSelector(
		(state: RootState) => state.currentPage.value
	);
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
