import React from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app.jsx';
import { reducer1 }  from './reducers/reducer.js';

//const store = createStore(combineReducers(reducer1));
const store = createStore(reducer1);

render(
	<Provider store={store}>
	<App />
	</Provider>	,
	document.getElementById('root')
);
