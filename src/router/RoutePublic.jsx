import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const RoutePublic = ({ children }) => {
	const state = useSelector((state) => state.LoginSlice);
	return <>{state.status == false ? children : <Navigate to={'/'} />}</>;
};
