import { PROJECT_LIST, PROJECT_MEMBER } from '../_actions/type';

const project = (state = {}, action) => {
	switch (action.type) {
		case PROJECT_LIST:
			return { ...state, projectList: action.payload };
		case PROJECT_MEMBER:
			return { ...state, projectMember: action.payload };
		default:
			return state;
	}
};

export default project;
