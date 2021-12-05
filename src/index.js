import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const reviewFeedback = (state = [], action) =>    {
    switch(action.type) {
        case 'SET_FEELING': 
            console.log(action);
            return {...state, ...action.payload};
        
        case 'SET_UNDERSTANDING': 
            console.log(action);
            return {...state, ...action.payload};
        
        case 'SET_SUPPORT': 
            console.log(action);
            return {...state, ...action.payload};
        
        case 'SET_COMMENT':
            console.log(action);
            return {...state, ...action.payload};
        
        default:
        }

    return state;
}


const reduxStore = createStore(
    combineReducers({
        reviewFeedback
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
