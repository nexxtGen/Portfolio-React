import { createStore, combineReducers } from 'redux';
import DevTools from '../DevTools';
import reducers from  '../Reducers/index';

//const logger = createLogger();
const store = createStore(reducers, DevTools.instrument());

export default store;