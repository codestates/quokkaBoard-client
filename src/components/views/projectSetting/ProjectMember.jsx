import React, { useRef } from 'react';
import axios from 'axios';
import env from 'react-dotenv';
import styles from './sections/projectSetting.module.css';

const ProjectMember = (props) => {
	let authority = '';
	const selectRef = useRef();

	const handleSelectOption = (e) => {
		if (e.target.value) {
			authority = e.target.value;
		}
	};

	const handleAuthUpdate = (e) => {
		const projectId = props.projectId;
		const email = props.user.email;
		console.log(authority);
		console.log(email);
		console.log(projectId);

		axios
			.patch(`${env.REACT_APP_SERVER_URI}/project/modify-authority`, {
				authority,
				email,
				projectId,
			})
			.then((response) => {
				console.log(response);
				props.handleMemberAuthUpdate();
			});
	};

	const handleMemberDelete = () => {
		props.handleProjectMemberDelete(props.user.id);
		props.handleProjectMemberDelModalOpen();
	};

	return (
		<li className={styles.li}>
			<span className={styles.nickname}>{props.user.nickname}</span>
			<span className={styles.email}>{props.user.email}</span>
			<span className={styles.auth}>{props.user.authority}</span>
			<select className={styles.select} name="authority" onChange={handleSelectOption}>
				<option value="" ref={selectRef}>
					권한 선택
				</option>
				<option value="master">master</option>
				<option value="admin">admin</option>
				<option value="write">write</option>
				<option value="read">read</option>
			</select>
			<button className={styles.auth_btn} onClick={handleAuthUpdate}>
				<span className={styles.update_btn}>권한 변경</span>
			</button>
			<button className={styles.del_btn} onClick={() => handleMemberDelete()}>
				<span className={styles.remove_btn}>팀원 삭제</span>
			</button>
		</li>
	);
};

export default ProjectMember;
