import React from 'react';
import styles from './sections/projectListModal.module.css';

const ProjectListModal = (props: any) => {
	return (
		<section className={styles.container}>
			<div className={styles.close_btn} onClick={props.isProjectModalClose}>
				<i className="fas fa-times"></i>
			</div>
			<ul className={styles.ul}>
				<li>내 프로젝트</li>
				<li>팀 프로젝트</li>
			</ul>
			<div className={styles.div}>
				<button className={styles.project_add_btn}>
					<i className="fas fa-folder-plus"></i>
				</button>
				<span>새 프로젝트 만들기</span>
			</div>
		</section>
	);
};

export default ProjectListModal;
