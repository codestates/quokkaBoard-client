import React, { useEffect, useState, useCallback } from 'react';
import styles from './sections/landingProjectList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { actionProjectList } from '../../../../_actions';

// component
import ProjectListLi from './ProjectListLi';
import NewProject from '../../landing/NewProject';

// image
import QuokkaImg from './sections/quokkaListImg.png';

const LandingProjectList = (props) => {
	const { userInfo } = useSelector((state) => state.users);
	const { projectList } = useSelector((state) => state.project);
	console.log(projectList);
	const dispatch = useDispatch();

	const [isNewProject, setIsNewProject] = useState(false);

	const projectModalOpen = useCallback(
		(e) => {
			setIsNewProject(true);
		},
		[isNewProject],
	);
	const projectModalClose = useCallback(
		(e) => {
			setIsNewProject(false);
		},
		[isNewProject],
	);

	useEffect(() => {
		const userId = userInfo?.id;
		if (userId) {
			// actionProjectList(dispatch, userInfo?.id);
			actionProjectList(dispatch, userId);
		} else {
			console.log('userInfo 없음');
		}
	}, [isNewProject]);

	return (
		<>
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
				{isNewProject ? <NewProject projectModalClose={projectModalClose} userInfo={userInfo} /> : ''}
			</div>
		</>
	);
};

export default LandingProjectList;
