import React, { Component } from 'react';
import { createRef } from 'react';
import style from './sections/columnTitleModifyModal.module.css';

class ColumnTitleModal extends Component {
	inputRef = createRef();
	render() {
		return (
			<div className={style.div}>
				<div className={style.title}>수정할 제목 입력</div>
				<input ref={this.inputRef} className={style.input} type="text" />
				<div className={style.confirm_btn}>
					<button className={style.cancel} onClick={this.props.handleTitleModalClose}>
						취소
					</button>
					<button
						className={style.confirm}
						onClick={() => this.props.handleColumnTitleUpdate(this.inputRef.current.value)}
					>
						확인
					</button>
				</div>
			</div>
		);
	}
}

export default ColumnTitleModal;
