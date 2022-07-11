import React from 'react';
import './App.css';
import PageRoutes from './pages/PageRoutes';

import { useSelector, useDispatch } from 'react-redux';
import { currentPageChange } from './features/CurrentPage/currentPageSlice';
import { RootState } from '../src/store/store';

function App() {
	const dispatch = useDispatch();
	dispatch(currentPageChange('New'));
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
