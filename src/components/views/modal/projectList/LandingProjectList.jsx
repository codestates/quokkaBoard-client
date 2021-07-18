import React, { useEffect, useState, useCallback } from 'react';
import styles from './sections/landingProjectList.module.css';

// component
import ProjectListLi from './ProjectListLi';

// image
import QuokkaImg from './sections/quokkaListImg.png';
import { useDispatch, useSelector } from 'react-redux';
import { actionProjectList } from '../../../../_actions';
import CreateProject from '../createProject/CreateProject';

const LandingProjectList = (props) => {
	const { userInfo } = useSelector((state) => state.users);
	const { projectList } = useSelector((state) => state.project);
	const dispatch = useDispatch();

	const [isNewProject, setIsNewProject] = useState(false);

	const projectModalOpen = useCallback(() => setIsNewProject(true), [isNewProject]);
	const projectModalClose = useCallback(() => setIsNewProject(false), [isNewProject]);

	useEffect(() => {
		const userId = userInfo?.id;
		console.log(userId);
		if (userId) {
			// actionProjectList(dispatch, userInfo?.id);
			console.log('userInfo 있음');
			actionProjectList(dispatch, userId);
		} else {
			console.log('userInfo 없음');
		}
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.close} onClick={props.handleIsStartClose}>
				<i className="fas fa-times"></i>
			</div>
			<div className={styles.container__img}>
				<img src={QuokkaImg} alt="img" />
			</div>
			<h1>프로젝트 리스트</h1>
			<ul>
				{projectList?.length
					? projectList?.map((project, idx) => <ProjectListLi key={idx} project={project} />)
					: '생성된 프로젝트가 없습니다.'}
			</ul>
			<div className={styles.div}>
				<button className={styles.project_add_btn} onClick={projectModalOpen}>
					<i className="fas fa-folder-plus"></i>
					<span>새 프로젝트 만들기</span>
				</button>
			</div>
			{isNewProject ? <CreateProject projectModalClose={projectModalClose} userInfo={userInfo} /> : ''}
		</div>
	);
};

export default LandingProjectList;
