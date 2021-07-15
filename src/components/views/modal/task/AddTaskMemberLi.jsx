import React from 'react';
import styles from './sections/addTaskMember.module.css';

const addTaskMemberLi = ({ result, taskMembers, handleAddTaskMember }) => {
	const handleAddMember = () => {
		handleAddTaskMember(result);
	};

	return (
		<li className={styles.li}>
			<span>{result.nickname}</span>
			<span>{result.email}</span>
			<button className={styles.plus_btn}>
				{taskMembers.find((user) => {
					return user.id === result.id;
				}) ? (
					<i className="fas fa-check"></i>
				) : (
					<span className={styles.plus} onClick={handleAddMember}>
						추가
					</span>
				)}
			</button>
		</li>
	);
};

export default addTaskMemberLi;
