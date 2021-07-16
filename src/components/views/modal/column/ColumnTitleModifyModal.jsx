import React, { Component } from 'react';
import style from './sections/columnTitleModifyModal.module.css';

class ColumnTitleModal extends Component {
	render() {
		return (
			<div className={style.div}>
				<div className={style.title}>수정할 제목 입력</div>
				<input className={style.input} type="text" />
				<div className={style.confirm_btn}>
					<button className={style.cancel} onClick={this.props.handleTitleModalClose}>
						취소
					</button>
					<button className={style.confirm} onClick={this.props.handleColumnTitleUpdate}>
						확인
					</button>
				</div>
			</div>
		);
	}
}

export default ColumnTitleModal;
