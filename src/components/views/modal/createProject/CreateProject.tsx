import React from 'react';
import styles from './sections/createProject.module.css';

const CreateProject = (props: any) => {
	return (
		<div className={styles.container}>
			<section>
				<div className={styles.close_btn} onClick={props.isNewProjectModalClose}>
					<i className="fas fa-times"></i>
				</div>
				<h2 className={styles.project__title}>새 프로젝트</h2>
				<div className={styles.div}>
					<label className={styles.subject} htmlFor="subject">
						제목
					</label>
					<input className={styles.subject__input} type="text" name="" id="subject" />
				</div>
				<div className={styles.div}>
					<label htmlFor="discription">설명</label>
					<input className={styles.discription__input} type="text" name="" id="discription" />
				</div>
				<div className={styles.div}>
					<p className={styles.p}>
						프로젝트 멤버 <span className={styles.span}>(선택사항)</span>
					</p>
					<button className={styles.project_member_add_btn} onClick={props.isNewProjectModalClose}>
						<i className="fas fa-plus"></i>
					</button>
				</div>
			</section>
			<div className={styles.buttons}>
				<button className={styles.cancel_btn} onClick={props.isNewProjectModalClose}>
					취소
				</button>
				<button className={styles.make_btn}>만들기</button>
			</div>
		</div>
	);
};

export default CreateProject;
