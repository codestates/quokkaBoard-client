import React from 'react';
import { withRouter } from 'react-router';
import { actionCurrentProject } from '../../../../_actions';
import { useDispatch } from 'react-redux';

const ProjectListLi = (props) => {
	const dispatch = useDispatch();
	const handleCurrentProject = () => {
		dispatch(actionCurrentProject(props.project, props));
	};

	return <li onClick={handleCurrentProject}>{props.project.title}</li>;
};
export default withRouter(ProjectListLi);
