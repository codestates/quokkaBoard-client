import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './sections/projectList.module.css';
import ProjectListLi from './ProjectListLi';

import { actionProjectList } from '../../../../_actions';

const ProjectListModal = (props) => {
	const dispatch = useDispatch();
	const { projectList } = useSelector((state) => {
		return state.project;
	});
	const { userInfo } = useSelector((state) => {
		return state.users;
	});

	useEffect(() => {
		const userId = userInfo?.id;
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
				{projectList
					? projectList.map((project, idx) => {
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
