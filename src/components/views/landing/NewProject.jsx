import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './sections/project.module.css';
import { actionCreateProject } from '../../../_actions';

const NewProject = (props) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.users);

	const handleCreateProject = (e) => {
		e.preventDefault();
		const title = e.target[0].value;
		const description = e.target[1].value;
		const startDate = e.target[2].value;
		const dueDate = e.target[3].value;
		const userId = userInfo?.id;

		title &&
			description &&
			startDate &&
			dueDate &&
			userId &&
			actionCreateProject(dispatch, { title, description, startDate, dueDate, userId }, props.projectModalClose);
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleCreateProject}>
				<h1>프로젝트 생성</h1>
				<input type="text" placeholder="프로젝트 이름" />
				<input type="text" placeholder="프로젝트 설명" />
				<label htmlFor="">시작일</label>
				<input type="date" />
				<label htmlFor="">종료일</label>
				<input type="date" />
				<div>
					<button>생성</button>
					<button onClick={props.projectModalClose}>취소</button>
				</div>
			</form>
		</div>
	);
};

export default NewProject;
