import React from 'react';
import style from './sections/taskEdit.module.css';

const TaskEdit = (props) => {
	return (
		<section className={style.container}>
			<div className={style.close_btn} onClick={props.handleTaskModalClose}>
				<i className="fas fa-times"></i>
			</div>
			<h3 className={style.title}>{props.task.content}</h3>
			<div className={style.member__title}>배정된 멤버</div>
			<div className={style.members}>
				{props.task.members.map((user) => {
					return (
						<h5 className={style.member__name} key={user}>
							{user}
						</h5>
					);
				})}
			</div>
		</section>
	);
};

export default TaskEdit;
