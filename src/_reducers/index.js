import { combineReducers } from 'redux';
import kanbanReducer from './kanbanReducer';
import users from './users';

const rootReducer = combineReducers({ kanbanReducer, users });

export default rootReducer;
