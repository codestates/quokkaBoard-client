import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from '../_reducers/index';
import thunk from 'redux-thunk';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
	: compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
