import React from 'react';
import styles from './sections/projectSetting.module.css';
import searchResult from '../modal/search/sections/searchResult';
import ProjectMember from './ProjectMember';

const ProjectSetting = (props: any) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.h2}>프로젝트 설정 창</h2>
			<h3 className={styles.h3}>프로젝트 이름</h3>
			<ul className={styles.ul}>
				{searchResult.map((user) => {
					return <ProjectMember key={user.id} user={user} />;
				})}
			</ul>
		</div>
	);
};

export default ProjectSetting;
