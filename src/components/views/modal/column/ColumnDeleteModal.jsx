import React, { Component } from 'react';
import style from './sections/columnDeleteModal.module.css';

class ColumnDeleteModal extends Component {
	render() {
		return (
			<div className={style.div}>
				<div className={style.title}>정말 ⟪ {this.props.title} ⟫ Board를 삭제하시겠습니까?</div>
				<div className={style.confirm_btn}>
					<button className={style.cancel} onClick={this.props.handleColumnDeleteModalClose}>
						취소
					</button>
					<button className={style.confirm} onClick={this.props.handleColumnDelete}>
						확인
					</button>
				</div>
			</div>
		);
	}
}

export default ColumnDeleteModal;
