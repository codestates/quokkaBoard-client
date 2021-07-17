const project = (state = {}, action) => {
	switch (action.type) {
		case 'PROJECT_LIST':
			return { ...state, projectList: action.payload };
		default:
			return state;
	}
};

export default project;
