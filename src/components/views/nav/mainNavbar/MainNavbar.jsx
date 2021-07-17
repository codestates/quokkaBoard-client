import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sections/mainNavbar.module.css';
import ProjectSetting from '../../projectSetting/ProjectSetting';

const MainNavbar = () => {
	return (
		<nav className={styles.container}>
			<ul className={styles.ul}>
				<Link to="/dash-board">
					<li className={styles.li}>
						<i className="fas fa-tachometer-alt"></i>
						<div className={styles.explanation}>대쉬보드</div>
					</li>
				</Link>
				<Link to="/kanban-board">
					<li className={styles.li}>
						<i className="fas fa-clipboard-list"></i>
						<div className={styles.explanation}>칸반보드</div>
					</li>
				</Link>
				<Link to="/project-setting">
					<li className={styles.li}>
						<i className="fas fa-cogs"></i>
						<div className={styles.explanation}>프로젝트 설정</div>
					</li>
				</Link>
			</ul>
		</nav>
	);
};

export default MainNavbar;
