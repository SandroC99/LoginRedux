import { createSlice } from '@reduxjs/toolkit';

const ini = () => {
	let valor = localStorage.getItem('logedTrue');
	if (!!valor) {
		return JSON.parse(valor);
	}
	return { status: false };
};

export const loginSlicer = createSlice({
	name: 'loginSlicer',
	initialState: ini(),
	reducers: {
		LoginD: (state, action) => {
			state.status = true;
			state.user = action.payload;
		},
		LogoutD: (state) => {
			state.status = false;
		},
	},
});

export const { LoginD, LogoutD } = loginSlicer.actions;
export default loginSlicer.reducer;
