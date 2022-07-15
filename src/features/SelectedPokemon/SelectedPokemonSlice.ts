import { createSlice } from '@reduxjs/toolkit';
import { PokemonObject } from '../../helpers/pokemonHelperFunctions';

const initialState: PokemonObject = {
	name: 'default',
	id: 111,
	sprites: { front_default: '', front_shiny: '' },
	types: [{ slot: 1, type: { name: '', url: '' } }],
	species: { name: '' },
	weight: 1,
	height: 1,
	stats: [
		{
			base_stat: 1,
			effort: 1,
			stat: { name: '' },
		},
	],
	abilities: [{ name: '' }],
};

export const selectedPokemonSlice = createSlice({
	name: 'selectedPokemon',
	initialState: { value: initialState },
	reducers: {
		selectedPokemonChange(state, actions) {
			if (state.value === actions.payload) return;

			state.value = actions.payload;
		},
	},
});

export const { selectedPokemonChange } = selectedPokemonSlice.actions;
export default selectedPokemonSlice.reducer;
