import React from 'react';
import styles from './sections/ProjectListModal.module.css';

const ProjectListModal = () => {
	return (
		<section className={styles.modal}>
			<ul>
				<li>내 프로젝트</li>
				<li>팀 프로젝트</li>
			</ul>
			<div>
				<button>새 프로젝트 만들기</button>
			</div>
		</section>
	);
};

export default ProjectListModal;
