import React from 'react';
import styles from './sections/projectList.module.css';

const ProjectListLi = ({ project }) => {
	return <li>{project.id}</li>;
};
export default ProjectListLi;
