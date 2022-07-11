import { createSlice } from '@reduxjs/toolkit';

const initialState: string = 'Home';
export const currentPageSlice = createSlice({
	name: 'currentPage',
	initialState: { value: initialState },
	reducers: {
		currentPageChange(state, actions) {
			if (state.value === actions.payload) return;

			state.value = actions.payload;
		},
	},
});

export const { currentPageChange } = currentPageSlice.actions;
export default currentPageSlice.reducer;
