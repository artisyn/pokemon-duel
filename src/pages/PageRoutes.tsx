import React, { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home/Home';

const PageRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/Home" element={<Home />} />
			{/* <Route path="/Home" element={} />
			<Route path="/Home" element={} />
			<Route path="/Home" element={} /> */}
			<Route path="*" element={<Navigate to="/Home" />} />{' '}
			{/* redirect  */}
		</Routes>
	);
};

export default PageRoutes;
