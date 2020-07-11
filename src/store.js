import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from 'reducers';

const rootReducer = combineReducers({
  ...reducers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* create store and export */
export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
