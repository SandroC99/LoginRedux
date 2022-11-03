import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from '../reducer/loginCheck/LoginSlice';

export default configureStore({
	reducer: {
		LoginSlice: LoginSlice,
	},
});
