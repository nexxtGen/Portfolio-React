import { combineReducers } from 'redux';
import portfolioReducer from './portfolio-reducer';
import appReducer from './app-reducer';

//Plik w którym scalam zdefiniowane reducery
const reducers = combineReducers({
    portfolioReducer,
    appReducer
});

export default reducers;