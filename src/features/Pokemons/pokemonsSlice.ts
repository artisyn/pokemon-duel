import { createSlice } from '@reduxjs/toolkit';

const initialState: [] = [];

export const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState: { value: initialState },
	reducers: {
		pokemonsChange(state, actions) {
			// if (state.value === actions.payload) return;

			state.value = actions.payload;
		},
	},
});

export const { pokemonsChange } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
