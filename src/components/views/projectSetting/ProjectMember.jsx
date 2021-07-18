import React, { useRef } from 'react';
import styles from './sections/projectSetting.module.css';

const ProjectMember = ({ user }) => {
	const authRef = useRef();

	const handleSelectOption = (e) => {
		if (e.target.value) {
			console.dir(e.target.value);
		}
	};

	return (
		<li className={styles.li}>
			<span className={styles.nickname}>{user.nickname}</span>
			<span className={styles.email}>{user.email}</span>
			<span className={styles.auth}>{user.authority}</span>
			<select className={styles.select} name="authority" onChange={handleSelectOption}>
				<option value="" /* ref={authRef}  */>권한 선택</option>
				<option value="master">master</option>
				<option value="admin">admin</option>
				<option value="write">write</option>
				<option value="read">read</option>
			</select>
			<button className={styles.auth_btn}>
				<span className={styles.update_btn}>권한 변경</span>
			</button>
			<button className={styles.del_btn}>
				<span className={styles.remove_btn}>팀원 삭제</span>
			</button>
		</li>
	);
};

export default ProjectMember;
