import React from 'react';
import styles from './sections/projectSetting.module.css';

const ProjectMember = ({ user }) => {
	return (
		<li className={styles.li}>
			<span className={styles.span_nickname}>{user.nickname}</span>
			<span className={styles.span_email}>{user.email}</span>
			<select className={styles.select} name="authority">
				<option value="">권한 선택</option>
				<option value="admin">admin</option>
				<option value="write">write</option>
				<option value="read">read</option>
			</select>
			<button className={styles.btn}>
				<span className={styles.remove_btn}>팀원 삭제</span>
			</button>
		</li>
	);
};

export default ProjectMember;
