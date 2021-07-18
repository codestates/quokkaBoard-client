import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './sections/addColumn.module.css';

import { actionCreateColumn } from '../../../../_actions';

const AddColumn = (props) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => {
		return state.users;
	});

	const boardTitleRef = useRef();

	const handleNewColumn = () => {
		const projectId = '30b1cc56-3e6a-4732-8dba-c6178fbd27b5';
		const boardTitle = boardTitleRef.current.value;
		actionCreateColumn(dispatch, projectId, boardTitle);
	};

	return (
		<div className={style.background}>
			<section className={style.container}>
				<div className={style.close_btn} onClick={props.handleColumnModalClose}>
					<i className="fas fa-times"></i>
				</div>
				<h2 className={style.column_title}>새 Board 만들기</h2>
				<label htmlFor="task__name" className={style.column__name}>
					이름
				</label>
				<input ref={boardTitleRef} className={style.input} type="text" id="task__name" />
				<div className={style.buttons}>
					<button className={style.cancel_btn} onClick={props.handleColumnModalClose}>
						취소
					</button>
					<button className={style.make_btn} onClick={handleNewColumn}>
						만들기
					</button>
				</div>
			</section>
		</div>
	);
};

export default AddColumn;
