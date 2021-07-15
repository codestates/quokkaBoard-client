import React from 'react';
import styles from './sections/addTaskMember.module.css';
import projectMemberResult from './sections/projectMemberResult';
import AddTaskMemberLi from './AddTaskMemberLi';

const AddTaskMember = (props) => {
	// useEffect로 projectId가 같은 사람들 가져오기

	return (
		<section className={styles.container}>
			<div className={styles.close_btn} onClick={props.handleAddTaskMemberModalClose}>
				<i className="fas fa-times"></i>
			</div>
			<h2 className={styles.h2}>프로젝트에 추가할 멤버 선택</h2>
			<label className={styles.label} htmlFor="username">
				추가할 멤버를 선택해 주세요 :)
			</label>

			<ul className={styles.ul}>
				{projectMemberResult.map((result) => {
					return (
						<AddTaskMemberLi
							key={result.id}
							result={result}
							taskMembers={props.taskMembers}
							handleAddTaskMember={props.handleAddTaskMember}
						/>
					);
				})}
			</ul>
		</section>
	);
};

export default AddTaskMember;
