import { createSlice } from '@reduxjs/toolkit';
import { PokemonObject } from '../../helpers/pokemonHelperFunctions';

interface initialInterface {
	slot1: null | PokemonObject;
	slot2: null | PokemonObject;
	slot3: null | PokemonObject;
}

const initialState: initialInterface = {
	slot1: null,
	slot2: null,
	slot3: null,
};

export const userPokedexSlice = createSlice({
	name: 'userPokedex',
	initialState: { value: initialState },
	reducers: {
		slot1Change(state, actions) {
			if (state.value.slot1 === actions.payload) return;

			state.value.slot1 = actions.payload;
		},
		slot1Remove(state) {
			state.value.slot1 = initialState.slot1;
		},
		slot2Change(state, actions) {
			if (state.value.slot2 === actions.payload) return;

			state.value.slot2 = actions.payload;
		},
		slot2Remove(state) {
			state.value.slot2 = initialState.slot2;
		},
		slot3Change(state, actions) {
			if (state.value.slot3 === actions.payload) return;

			state.value.slot3 = actions.payload;
		},
		slot3Remove(state) {
			state.value.slot3 = initialState.slot3;
		},
	},
});

export const {
	slot1Change,
	slot2Change,
	slot3Change,
	slot1Remove,
	slot2Remove,
	slot3Remove,
} = userPokedexSlice.actions;
export default userPokedexSlice.reducer;
