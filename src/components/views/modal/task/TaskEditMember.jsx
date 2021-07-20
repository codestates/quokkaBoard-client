import React from 'react';
import style from './sections/taskEdit.module.css';

const TaskEditMember = ({ member, handleSelectDelMember, handleDeleteMemberModalOpen, updateTaskMember, taskId }) => {
	const handleMemberClick = (delMember) => {
		handleSelectDelMember(delMember);
		handleDeleteMemberModalOpen();
	};

	return (
		<>
			<li className={style.member}>
				{member}
				<button className={style.member_delete_btn} onClick={() => updateTaskMember(member, taskId)}>
					<i className="fas fa-times"></i>
				</button>
			</li>
		</>
	);
};

export default TaskEditMember;
