import React from 'react';
import style from './sections/taskEditConfirm.module.css';

const TaskEditConfirm = (props) => {
	return (
		<section className={style.container}>
			<div className={style.close_btn} onClick={props.handleModalClose}>
				<i className="fas fa-times"></i>
			</div>
		</section>
	);
};

export default TaskEditConfirm;
