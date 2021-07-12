import { combineReducers } from 'redux';
import kanbanReducer from './kanbanReducer';

const rootReducer = combineReducers({ kanbanReducer });

export default rootReducer;
