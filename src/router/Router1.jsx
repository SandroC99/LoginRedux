import React from 'react';
import { Route, Routes } from 'react-router';
import { Login } from '../pages/Login';
import { RoutePrivate } from './RoutePrivate';
import { RoutePublic } from './RoutePublic';
import { Router2 } from './Router2';

export const Router1 = () => {
	return (
		<>
			<Routes>
				<Route
					path='/Login'
					element={
						<RoutePublic>
							<Login />
						</RoutePublic>
					}
				/>
				<Route
					path='/*'
					element={
						<RoutePrivate>
							<Router2 />
						</RoutePrivate>
					}
				/>
			</Routes>
		</>
	);
};
