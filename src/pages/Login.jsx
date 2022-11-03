import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { LoginD } from '../reducer/loginCheck/LoginSlice';

export const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [input, setInput] = useState('');

	const LOGIN = (e) => {
		if (input.trim().length < 1) {
			alert('Ingresa algo pls');
			return;
		}
		e.preventDefault();
		localStorage.setItem('logedTrue', JSON.stringify({ status: true, user: input }));
		navigate('/', { replace: true });
		dispatch(LoginD(input));
	};

	const HANDLE_CHANGE = (e) => {
		setInput(e.target.value);
	};

	return (
		<>
			<div className='login_contain'>
				<h2>LOGIN</h2>
				<form>
					<input type='text' onChange={HANDLE_CHANGE} />
					<button onClick={LOGIN}>Login</button>
				</form>
			</div>
		</>
	);
};
