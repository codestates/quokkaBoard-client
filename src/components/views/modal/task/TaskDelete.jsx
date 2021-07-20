import React from 'react';
import style from './sections/taskDelete.module.css';

const TaskDelete = (props) => {
	return (
		<div className={style.div}>
			<div className={style.title}>정말 ⟪ {props.taskTitle} ⟫ Task를 삭제하시겠습니까?</div>
			<div className={style.confirm_btn}>
				<button className={style.cancel} onClick={props.handleTaskDeleteModalClose}>
					취소
				</button>
				<button className={style.confirm} onClick={props.handleTaskDelete}>
					확인
				</button>
			</div>
		</div>
	);
};

export default TaskDelete;
