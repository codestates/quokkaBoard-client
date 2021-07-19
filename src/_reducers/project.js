import {
	PROJECT_LIST,
	PROJECT_MEMBER,
	INVITE_MEMBER,
	CURRENT_PROJECT,
	MODIFY_PROJECT,
	CREATE_PROJECT,
} from '../_actions/type';

const project = (state = {}, action) => {
	switch (action.type) {
		case PROJECT_LIST:
			return { ...state, projectList: action.payload };
		case CREATE_PROJECT:
			return { ...state, projectList: [...state.projectList, action.payload] };
		case PROJECT_MEMBER:
			return { ...state, projectMember: action.payload };
		case INVITE_MEMBER:
			return { ...state, projectMember: [...state.projectMember, action.payload] };
		case CURRENT_PROJECT:
			return { ...state, currentProject: action.payload };
		case MODIFY_PROJECT:
			return { ...state, currentProject: { ...state.currentProject, title: action.payload } };
		default:
			return state;
	}
};

export default project;
