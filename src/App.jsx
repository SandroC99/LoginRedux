import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter } from 'react-router-dom';
import { Router1 } from './router/Router1';
import './css/style.css'

export const App = () => {
	return (
		<>
			<Provider store={store}>
                <BrowserRouter>
                    <div className='App'>
                        <Router1 />
                    </div>
                </BrowserRouter>
			</Provider>
		</>
	);
};
