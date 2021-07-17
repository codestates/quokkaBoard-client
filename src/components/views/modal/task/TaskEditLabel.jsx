import React from 'react';
import style from './sections/taskEdit.module.css';

const TaskEditMember = ({ label, handleSelectDelLabel, handleLabelDeleteModalOpen }) => {
	const handleLabelClick = (delLabel) => {
		handleSelectDelLabel(delLabel);
		handleLabelDeleteModalOpen();
	};

	return (
		<>
			<li style={{ backgroundColor: `${label.hex}` }} className={style.label}>
				{label.content}
				<button className={style.label_delete_btn} onClick={() => handleLabelClick(label)}>
					<i className="fas fa-times"></i>
				</button>
			</li>
		</>
	);
};

export default TaskEditMember;
