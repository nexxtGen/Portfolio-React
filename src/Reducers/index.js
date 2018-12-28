import { combineReducers } from 'redux';
import portfolioReducer from './portfolio-reducer';

// plik w którym scalam zdefiniowane reducery (choć jest tylko jeden to jest to dobra praktyka.)
const reducers = combineReducers({
    portfolioReducer
});

export default reducers;