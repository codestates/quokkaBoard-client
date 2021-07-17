import React from 'react';
import style from './sections/taskDueDateModify.module.css';

const TaskDueDateModify = ({ handleUpdateDateModalClose }) => {
	return (
		<section className={style.container}>
			<div className={style.close_btn} onClick={handleUpdateDateModalClose}>
				<i className="fas fa-times"></i>
			</div>
			<div>
				<div className={style.title}>마감일을 변경 하시겠습니까?</div>
			</div>
			<div className={style.confirm_btn}>
				<button className={style.cancel} onClick={handleUpdateDateModalClose}>
					취소
				</button>
				<button className={style.confirm}>확인</button>
			</div>
		</section>
	);
};

export default TaskDueDateModify;
