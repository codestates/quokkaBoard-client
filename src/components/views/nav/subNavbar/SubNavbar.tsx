import React, { useCallback, useState } from 'react';
import styles from './sections/navbar.module.css';
import profileImg from './sections/profile_img.png';
import mainLogo2 from './sections/main_logo2.png';
import ProjectListModal from '../../modal/projectListModal/ProjectListModal';
import CreateProject from '../../modal/createProject/CreateProject';
import Search from '../../modal/search/Search';

const SubNavbar = () => {
	const [projects, setProjects] = useState([]);
	const [isProjectClicked, setProjectClick] = useState(false);
	const [isNewProjectClicked, setNewProjectClick] = useState(false);
	const [isSearchClicked, setSearchClick] = useState(false);

	const isProjectModalOpen = useCallback(() => {
		setProjectClick(true);
	}, [isProjectClicked]);

	const isProjectModalClose = useCallback(() => {
		setProjectClick(false);
	}, [isProjectClicked]);

	const isNewProjectModalOpen = useCallback(() => {
		setNewProjectClick(true);
	}, [isNewProjectClicked]);

	const isNewProjectModalClose = useCallback(() => {
		setNewProjectClick(false);
	}, [isNewProjectClicked]);

	const isSearchModalOpen = useCallback(() => {
		setSearchClick(true);
	}, [isSearchClicked]);

	const isSearchModalClose = useCallback(() => {
		setSearchClick(false);
	}, [isSearchClicked]);

	return (
		<nav className={styles.container}>
			<div className={styles.sub_menu}>
				<div className={styles.sub_menu_left}>
					<div className={styles.logo}>
						<img className={styles.main_logo} src={mainLogo2} alt="main_logo" />
					</div>
					<div className={styles.project}>
						<button className={styles.project_button} onClick={isProjectModalOpen}>
							프로젝트 목록 보기
							{/* <i className="fas fa-caret-down"></i> */}
						</button>
					</div>
				</div>
				<div className={styles.sub_menu_right}>
					<div className={styles.search}>
						<button className={styles.button} onClick={isSearchModalOpen}>
							<i className="fas fa-search"></i>
						</button>
					</div>
					<div>
						<img className={styles.profile_img} src={profileImg} alt="profile_img" />
					</div>
				</div>
			</div>
			{/* Project Modal */}
			{isProjectClicked ? (
				<ProjectListModal
					isProjectModalClose={isProjectModalClose}
					isNewProjectModalOpen={isNewProjectModalOpen}
					isNewProjectModalClose={isNewProjectModalClose}
				/>
			) : (
				''
			)}
			{isNewProjectClicked ? (
				<CreateProject isNewProjectModalOpen={isNewProjectModalOpen} isNewProjectModalClose={isNewProjectModalClose} />
			) : (
				''
			)}
			{isSearchClicked ? <Search isSearchModalClose={isSearchModalClose} /> : ''}
		</nav>
	);
};

export default SubNavbar;
