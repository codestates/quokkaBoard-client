import React from 'react';
import styles from './sections/label.module.css';

const LabelLi = ({ taskLabels, label, handleAddTaskLabel }) => {
	const handleAddLabel = () => {
		handleAddTaskLabel(label);
	};

	return (
		<li className={styles.li}>
			<button className={styles.add_tag}>
				{taskLabels.find((taskLabel) => {
					return taskLabel.id === label.id;
				}) ? (
					<span className={styles.selected_label} style={{ backgroundColor: `${label.hex}` }}>
						{label.content}
					</span>
				) : (
					<span className={styles.label_tag} style={{ backgroundColor: `${label.hex}` }} onClick={handleAddLabel}>
						{label.content}
					</span>
				)}
			</button>
		</li>
	);
};

export default LabelLi;
