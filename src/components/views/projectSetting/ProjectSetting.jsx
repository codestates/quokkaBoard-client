import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './sections/projectSetting.module.css';
import ProjectMember from './ProjectMember';
import Nav from '../nav/Nav';
import LoadingPage from '../loading/Loading';

import { actionProjectMember, actionModifyProject } from '../../../_actions';

const ProjectSetting = (props) => {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(true);
	const [nameModifyBtn, setNameModifyBtn] = useState(false);
	const [nameSaveBtn, setNameSaveBtn] = useState(false);
	const nameInputRef = useRef();

	const { projectMember } = useSelector((state) => {
		return state.project;
	});

	const { currentProject } = useSelector((state) => {
		return state.project;
	});

	const { userInfo } = useSelector((state) => {
		return state.users;
	});

	useEffect(() => {
		const projectId = currentProject?.projectId;
		actionProjectMember(dispatch, projectId, handleLoadingClose);
	}, []);

	const handleProjectModify = () => {
		// userId, projectId, title
		const userId = userInfo?.id;
		const projectId = currentProject?.projectId;
		const title = nameInputRef.current.value; // currentProject?.title;

		console.log(userId);
		console.log(projectId);
		console.log(title);
		actionModifyProject(dispatch, { userId, projectId, title }, handleProjectNameUpdated, handleProjectNameSaved);
	};

	const handleProjectNameModify = () => {
		setNameModifyBtn(true);
	};

	const handleProjectNameUpdated = () => {
		setNameModifyBtn(false);
	};

	const handleProjectNameSave = () => {
		handleProjectNameUpdated();
		setNameSaveBtn(true);
	};

	const handleProjectNameSaved = () => {
		setNameSaveBtn(false);
	};

	const handleLoadingClose = () => {
		setIsLoading(false);
	};

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
				<div className={styles.modify}>
					<div className={styles.name}>
						{!nameModifyBtn ? (
							<h3 className={styles.h3}>{currentProject?.title}</h3>
						) : (
							<input ref={nameInputRef} type="text" className={styles.input} />
						)}
					</div>
					<div className={styles.project_btn}>
						{!nameModifyBtn ? (
							<button className={styles.name_modify} onClick={handleProjectNameModify}>
								프로젝트 이름 수정하기
							</button>
						) : (
							<button className={styles.name_save} onClick={handleProjectModify}>
								저장하기
							</button>
						)}
					</div>
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
