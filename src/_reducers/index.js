import { combineReducers } from 'redux';
import kanban from './kanban';
import member from './member';
import project from './project';

const rootReducer = combineReducers({ kanban, member, project });

export default rootReducer;
