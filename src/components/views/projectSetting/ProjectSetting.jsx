import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './sections/projectSetting.module.css';
import ProjectMember from './ProjectMember';
import Nav from '../nav/Nav';
import LoadingPage from '../loading/Loading';

import { actionProjectMember } from '../../../_actions';

const ProjectSetting = (props) => {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(true);

	const { projectMember } = useSelector((state) => {
		return state.project;
	});

	const { currentProject } = useSelector((state) => {
		return state.project;
	});

	const handleLoadingClose = () => {
		setIsLoading(false);
	};

	useEffect(() => {
		const projectId = '30b1cc56-3e6a-4732-8dba-c6178fbd27b5';
		actionProjectMember(dispatch, projectId, handleLoadingClose);
	}, []);

	return isLoading ? (
		<LoadingPage />
	) : (
		<>
			<Nav />
			<div className={styles.box}></div>
			<div className={styles.box}></div>
			<div className={styles.box}></div>
			<div className={styles.box}></div>
			<div className={styles.box}></div>
			<div className={styles.box}></div>
			<div className={styles.container}>
				<h2 className={styles.h2}>프로젝트 설정 창</h2>
				<div className={styles.name}>
					<h3 className={styles.h3}>{currentProject?.title}</h3>
					<span className={styles.name_btn}>프로젝트 이름 수정하기</span>
				</div>
				<ul className={styles.ul}>
					{projectMember?.map((user) => {
						return <ProjectMember key={user.id} user={user} />;
					})}
				</ul>
			</div>
		</>
	);
};

export default ProjectSetting;
