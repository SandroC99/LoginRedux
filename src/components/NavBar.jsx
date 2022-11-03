import React, { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutD } from '../reducer/loginCheck/LoginSlice';

export const NavBar = () => {
	const state = useSelector((state) => state.LoginSlice);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const ref_nav = useRef();
	const ref_butt = useRef();

	const LOGOUT = () => {
		navigate('/Login', { replace: true });
		localStorage.removeItem('logedTrue');
		dispatch(LogoutD());
	};

	const HANDLE_NAV = () => {
		ref_nav.current.classList.toggle('active');
		ref_butt.current.classList.toggle('active');
	};

	return (
		<>
			<nav className='nav_Bar'>
				<div className='nav_button' onClick={HANDLE_NAV}>
					<div className='contain_icon' ref={ref_butt}>
						<div className='icon1'></div>
						<div className='icon2'></div>
					</div>
				</div>
				<ul className='nav_List' ref={ref_nav}>
					<NavLink to={'/content1'}>Contenido1</NavLink>
					<NavLink to={'/content2'}>Contenido2</NavLink>
					<NavLink to={'/content3'}>Contenido3</NavLink>
				</ul>
				<div className='nav_user'>
					<h1 className='user'>{state.user}</h1>
					<button onClick={LOGOUT}>Logout</button>
				</div>
			</nav>
		</>
	);
};
