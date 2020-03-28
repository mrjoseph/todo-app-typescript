import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { reducer } from '../reducers/reducers';
const rootReducer = combineReducers({reducer});
const store = createStore(rootReducer,  applyMiddleware(logger)); 
export default store