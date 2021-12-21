import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import stockReducer from './stocks/stocks';

const reducer = combineReducers({
  stocks: stockReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
