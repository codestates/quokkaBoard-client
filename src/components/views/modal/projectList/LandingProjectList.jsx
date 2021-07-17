import React, { useEffect } from 'react';
import styles from './sections/landingProjectList.module.css';

// component
import ProjectListLi from './ProjectListLi';

// image
import QuokkaImg from './sections/quokkaListImg.png';
import { useDispatch, useSelector } from 'react-redux';
import { actionProjectList } from '../../../../_actions';

const LandingProjectList = (props) => {
	const { userInfo } = useSelector((state) => state.users);
	const { projectList } = useSelector((state) => state.project);
	const dispatch = useDispatch();
	// useEffect(() => {
	// 	const userId = 'c8f8c19b-fb4e-4ff2-8dc5-7d91d31f4675';
	// 	if (userId) {
	// 		// actionProjectList(dispatch, userInfo?.id);
	// 		actionProjectList(dispatch, userId);
	// 	} else {
	// 		console.log('userInfo 없음');
	// 	}
	// }, []);
	return (
		<div className={styles.container}>
			<div className={styles.container__img}>
				<img src={QuokkaImg} alt="img" />
			</div>
			<ul>
				{/* {console.log(projectList)}
				{projectList?.length
					? projectList?.map((project) => {
							return <ProjectListLi project={project} />;
					  })
					: ''} */}
			</ul>
		</div>
	);
};

export default LandingProjectList;
