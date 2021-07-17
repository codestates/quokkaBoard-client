import { combineReducers } from 'redux';
import kanban from './kanban';
import member from './member';
import project from './project';
import users from './users';

const rootReducer = combineReducers({ kanban, member, project, users });

export default rootReducer;
