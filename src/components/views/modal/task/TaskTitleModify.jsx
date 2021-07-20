import React from 'react';
import { useRef } from 'react';
import style from './sections/taskTitleModify.module.css';

const TaskTitleModify = (props) => {
	const inputRef = useRef(null);
	return (
		<div className={style.div}>
			<div className={style.title}>
				⟪ {props.taskTitle} ⟫ <br />
				제목을 변경하시겠습니까?
			</div>
			<input ref={inputRef} className={style.input} type="text" />
			<div className={style.confirm_btn}>
				<button className={style.cancel} onClick={props.handleTaskTitleModalClose}>
					취소
				</button>
				<button
					className={style.confirm}
					onClick={() => {
						props.handleTaskTitleModalClose();
						props.handleTaskTitleModify(inputRef.current.value);
					}}
				>
					확인
				</button>
			</div>
		</div>
	);
};
export default TaskTitleModify;
