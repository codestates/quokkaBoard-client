import React, { Component } from 'react';
import style from './sections/columnTitle.module.css';

class ColumnTitle extends Component {
	render() {
		return (
			<div className={style.title}>
				<button onClick={this.props.handleTitleModalOpen} className={style.update_btn}>
					<i className="fas fa-pencil-alt"></i>
				</button>
				<button onClick={this.props.handleColumnDeleteModalOpen} className={style.remove_btn}>
					<i className="fas fa-trash-alt"></i>
				</button>
			</div>
		);
	}
}

export default ColumnTitle;
