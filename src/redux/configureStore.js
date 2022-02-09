import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import placeReducer from './place/placeReducer';
import weatherReducer from './weather/weatherReducer';
import autoCompleteReducer from './autoComplete/autoCompleteReducer';

const reducer = combineReducers({
  weatherReducer, placeReducer, autoCompleteReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
