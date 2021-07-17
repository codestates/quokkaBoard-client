import React from 'react';
import style from './sections/taskLabelModify.module.css';

const TaskLabelModify = ({ selectDelLabel, handleLabelDeleteModalClose }) => {
	return (
		<section className={style.container}>
			<div className={style.close_btn} onClick={handleLabelDeleteModalClose}>
				<i className="fas fa-times"></i>
			</div>
			<div>
				<div className={style.title}>정말 ⟪ {selectDelLabel.content} ⟫ 를 삭제하시겠습니까?</div>
			</div>
			<div className={style.confirm_btn}>
				<button className={style.cancel} onClick={handleLabelDeleteModalClose}>
					취소
				</button>
				<button className={style.confirm}>확인</button>
			</div>
		</section>
	);
};

export default TaskLabelModify;
