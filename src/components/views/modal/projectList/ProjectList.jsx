import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './sections/projectList.module.css';
import ProjectListLi from './ProjectListLi';

import { actionProjectList } from '../../../../_actions';

const ProjectListModal = (props) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => {
		return state.projectList;
	});

	useEffect(() => {
		const userId = '73f416fc-e7d6-42c1-8150-ed1906337460';
		actionProjectList(dispatch, userId);
	}, []);

	const modalClose = useCallback(() => {
		props.isProjectModalClose();
		props.isNewProjectModalOpen();
	}, []);

	return (
		<section className={styles.container}>
			<div className={styles.close_btn} onClick={props.isProjectModalClose}>
				<i className="fas fa-times"></i>
			</div>
			<ul className={styles.ul}>
				{state
					? state.map((project, idx) => {
							return <ProjectListLi key={idx} project={project} />;
					  })
					: ''}
			</ul>
			<div className={styles.div} onClick={modalClose}>
				<button className={styles.project_add_btn}>
					<i className="fas fa-folder-plus"></i>
				</button>
				<span>새 프로젝트 만들기</span>
			</div>
		</section>
	);
};

export default ProjectListModal;
