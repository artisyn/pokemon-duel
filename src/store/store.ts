import { configureStore } from '@reduxjs/toolkit';
import currentPageReducer from '../features/CurrentPage/currentPageSlice';
import pokemonsReducer from '../features/Pokemons/pokemonsSlice';
import selectedPokemonReducer from '../features/SelectedPokemon/SelectedPokemonSlice';
import userPokedexReducer from '../features/UserPokedex/userPokedexSlice';

export const store = configureStore({
	reducer: {
		currentPage: currentPageReducer,
		pokemons: pokemonsReducer,
		selectedPokemon: selectedPokemonReducer,
		userPokedex: userPokedexReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
export type RootState = ReturnType<typeof store.getState>;
