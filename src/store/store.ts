import { configureStore } from '@reduxjs/toolkit';
import currentPageReducer from '../features/CurrentPage/currentPageSlice';
import pokemonsReducer from '../features/Pokemons/pokemonsSlice';

export const store = configureStore({
	reducer: {
		currentPage: currentPageReducer,
		pokemons: pokemonsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
export type RootState = ReturnType<typeof store.getState>;
