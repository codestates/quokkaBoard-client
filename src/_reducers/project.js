import { PROJECT_LIST, PROJECT_MEMBER, CURRENT_PROJECT } from '../_actions/type';

const project = (state = {}, action) => {
	switch (action.type) {
		case PROJECT_LIST:
			return { ...state, projectList: action.payload };
		case PROJECT_MEMBER:
			return { ...state, projectMember: action.payload };
		case CURRENT_PROJECT:
			return { ...state, currentProject: action.payload };
		default:
			return state;
	}
};

export default project;
