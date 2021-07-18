import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { actionCurrentProject } from '../../../../_actions';

const ProjectListLi = (props) => {
	const dispatch = useDispatch();

	const handleCurrentProject = () => {
		actionCurrentProject(dispatch, props.project);
		props.history.push('/dash-board');
	};

	return <li onClick={handleCurrentProject}>{props.project.title}</li>;
};
export default withRouter(ProjectListLi);
