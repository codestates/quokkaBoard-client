import React from 'react';
import style from './sections/taskMemberModify.module.css';

const TaskMemberModify = ({ selectDelMember, handleDeleteMemberModalClose }) => {
	return (
		<section className={style.container}>
			<div className={style.close_btn} onClick={handleDeleteMemberModalClose}>
				<i className="fas fa-times"></i>
			</div>
			<div>
				<div className={style.title}>⟪ {selectDelMember} ⟫ 를 삭제하시겠습니까?</div>
			</div>
			<div className={style.confirm_btn}>
				<button className={style.cancel} onClick={handleDeleteMemberModalClose}>
					취소
				</button>
				<button className={style.confirm}>확인</button>
			</div>
		</section>
	);
};

export default TaskMemberModify;
