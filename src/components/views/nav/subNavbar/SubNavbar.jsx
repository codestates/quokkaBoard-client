import React, { useCallback, useState } from 'react';
// import { useSelector } from 'react-redux';
import styles from './sections/subNavbar.module.css';
import profileImg from './sections/profile_img.png';
import mainLogo2 from './sections/main_logo2.png';
import ProjectList from '../../modal/projectList/ProjectList';
import CreateProject from '../../modal/createProject/CreateProject';
import Search from '../../modal/search/Search';
import UserProfile from '../../modal/userProfile/UserProfile';

const SubNavbar = () => {
	const [projects, setProjects] = useState([]);
	const [isProjectClicked, setProjectClick] = useState(false);
	const [isNewProjectClicked, setNewProjectClick] = useState(false);
	const [isSearchClicked, setSearchClick] = useState(false);
	const [isProfileClicked, setProfileClick] = useState(false);

	// const { projectMember } = useSelector((state) => state.project);
	// console.log(projectMember);

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

	const isProfileModalOpen = useCallback(() => {
		setProfileClick(true);
	}, [isProfileClicked]);

	const isProfileModalClose = useCallback(() => {
		setProfileClick(false);
	}, [isProfileClicked]);

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
						<button className={styles.sign_out_button}>
							<i className="fas fa-sign-out-alt"></i>
						</button>
					</div>
					<div onClick={isProfileModalOpen}>
						<img className={styles.profile_img} src={profileImg} alt="profile_img" />
					</div>
				</div>
			</div>
			{isProjectClicked ? (
				<ProjectList
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
			{isProfileClicked ? (
				<UserProfile isProfileClicked={isProfileClicked} isProfileModalClose={isProfileModalClose} />
			) : (
				''
			)}
		</nav>
	);
};

export default SubNavbar;
