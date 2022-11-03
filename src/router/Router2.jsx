import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { NavBar } from '../components/NavBar';
import { Content1 } from '../pages/Content1';
import { Content2 } from '../pages/Content2';
import { Content3 } from '../pages/Content3';

export const Router2 = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/content1' element={<Content1 />} />
				<Route path='/content2' element={<Content2 />} />
				<Route path='/content3' element={<Content3 />} />
				<Route path='/' element={<Navigate to={'/content1'} />} />
			</Routes>
		</>
	);
};
