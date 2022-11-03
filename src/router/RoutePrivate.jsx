import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const RoutePrivate = ({ children }) => {
	const state = useSelector((state) => state.LoginSlice);
	return <>{state.status == true ? children : <Navigate to={'/Login'} />}</>;
};
