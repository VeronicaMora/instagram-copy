import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from 'redux-starter-kit'
import { Provider } from 'react-redux'
import { reducer } from './reducers/index'

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
})

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
    document.getElementById('root')
);