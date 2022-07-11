import { configureStore } from '@reduxjs/toolkit';
import currentPageReducer from '../features/CurrentPage/currentPageSlice';

export const store = configureStore({
	reducer: {
		currentPage: currentPageReducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
