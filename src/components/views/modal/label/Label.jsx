import React from 'react';
import styles from './sections/label.module.css';
import labels from '../label/sections/label';
import LabelLi from './LabelLi';

const Label = ({ handleAddLabelModalClose, taskLabels, handleAddTaskLabel }) => {
	return (
		<section className={styles.container}>
			<div className={styles.close_btn} onClick={handleAddLabelModalClose}>
				<i className="fas fa-times"></i>
			</div>
			<h2 className={styles.h2}>Task에 추가할 태그 선택</h2>
			<label className={styles.label} htmlFor="username">
				추가할 태그를 선택해 주세요 :)
			</label>
			<ul className={styles.ul}>
				{labels.map((label) => {
					return (
						<LabelLi key={label.id} taskLabels={taskLabels} label={label} handleAddTaskLabel={handleAddTaskLabel} />
					);
				})}
			</ul>
		</section>
	);
};

export default Label;
