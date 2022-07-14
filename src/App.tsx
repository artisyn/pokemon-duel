import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PageRoutes from './pages/PageRoutes';
import { pokemonsChange } from './features/Pokemons/pokemonsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { currentPageChange } from './features/CurrentPage/currentPageSlice';
import { RootState } from '../src/store/store';

function App() {
	const dispatch = useDispatch();
	const currentPage = useSelector(
		(state: RootState) => state.currentPage.value
	);

	return (
		<div>
			<PageRoutes />
		</div>
	);
}

export default App;
