import React, { useRef } from 'react';
import style from './sections/addColumn.module.css';

const AddColumn = (props) => {
	const columnTitleRef = useRef();

	return (
		<div className={style.background}>
			<section className={style.container}>
				<div className={style.close_btn} onClick={props.handleColumnModalClose}>
					<i className="fas fa-times"></i>
				</div>
				<h2 className={style.column_title}>새 Column 만들기</h2>
				<label htmlFor="task__name" className={style.column__name}>
					이름
				</label>
				<input ref={columnTitleRef} className={style.input} type="text" id="task__name" />
				<div className={style.buttons}>
					<button className={style.cancel_btn} onClick={props.handleColumnModalClose}>
						취소
					</button>
					<button className={style.make_btn}>만들기</button>
				</div>
			</section>
		</div>
	);
};

export default AddColumn;
