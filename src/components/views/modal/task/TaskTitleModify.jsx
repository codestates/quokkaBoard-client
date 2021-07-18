import React from 'react';
import style from './sections/taskTitleModify.module.css';

const TaskTitleModify = (props) => {
	return (
		<div className={style.div}>
			<div className={style.title}>정말 ⟪ {props.taskTitle} ⟫ Task를 제목을 변경하시겠습니까?</div>
			<input className={style.input} type="text" />
			<div className={style.confirm_btn}>
				<button className={style.cancel} onClick={props.handleTaskTitleModalClose}>
					취소
				</button>
				<button className={style.confirm} onClick={props.handleTaskTitleModify}>
					확인
				</button>
			</div>
		</div>
	);
};
export default TaskTitleModify;
