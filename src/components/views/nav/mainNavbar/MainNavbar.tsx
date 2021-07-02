import React from 'react';
import styles from './sections/mainNavbar.module.css';

const MainNavbar = () => {
	return (
		<nav className={styles.container}>
			<ul className={styles.ul}>
				<li className={styles.li}>
					<i className="fas fa-tachometer-alt"></i>
					<div className={styles.explanation}>대쉬보드</div>
				</li>
				<li className={styles.li}>
					<i className="fas fa-clipboard-list"></i>
					<div className={styles.explanation}>칸반보드</div>
				</li>
				<li className={styles.li}>
					<i className="fas fa-cogs"></i>
					<div className={styles.explanation}>프로젝트 설정</div>
				</li>
			</ul>
		</nav>
	);
};

export default MainNavbar;
