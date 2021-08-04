import React from 'react';
import style from './sections/taskComplete.module.css';

const TaskComplete = ({ handleTaskCompleteModalModal }) => {
	return (
		<section className={style.container}>
			<div className={style.close_btn} onClick={handleTaskCompleteModalModal}>
				<i className="fas fa-times"></i>
			</div>
			<div>
				<div className={style.title}>
					업무를 완료하시겠습니까? <br />
					보드에서 해당 태스크가 지워집니다.
				</div>
			</div>
			<div className={style.confirm_btn}>
				<button className={style.cancel} onClick={handleTaskCompleteModalModal}>
					취소
				</button>
				<button className={style.confirm}>확인</button>
			</div>
		</section>
	);
};

export default TaskComplete;
