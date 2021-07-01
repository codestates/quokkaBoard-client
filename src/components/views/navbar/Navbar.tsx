import React, { useState } from 'react';
import styles from './sections/navbar.module.css';
import profileImg from './sections/profile_img.png';
import mainLogo2 from './sections/main_logo2.png';

const Navbar = () => {
	const [project, setProject] = useState();
	const [isClicked, setIsClick] = useState();

	const isClickedProject = (e: any) => {
		console.log(e.target);
	};

	return (
		<nav className={styles.container}>
			<div className={styles.sub_menu}>
				<div className={styles.sub_menu_left}>
					<div className={styles.logo}>
						<img src={mainLogo2} alt="main_logo" />
					</div>
					<div className={styles.project}>
						<button className={styles.project_button} onClick={isClickedProject}>
							프로젝트 목록 보기
							{/* <i className="fas fa-caret-down"></i> */}
						</button>
					</div>
				</div>
				<div className={styles.sub_menu_right}>
					<div className={styles.search}>
						<button className={styles.button}>검색</button>
					</div>
					<div>
						<img className={styles.img} src={profileImg} alt="profile_img" />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
