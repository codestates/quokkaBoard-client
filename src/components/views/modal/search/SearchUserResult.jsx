import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './sections/search.module.css';
import axios from 'axios';
import env from 'react-dotenv';

import { actionInviteMember } from '../../../../_actions';
import { useEffect } from 'react';

const SearchUserResult = ({ result }) => {
	const dispatch = useDispatch();
	const userEmailREf = useRef();

	const { searchUser } = useSelector((state) => state.member);
	const { userInfo } = useSelector((state) => state.users);
	const { currentProject } = useSelector((state) => state.project);
	const { projectMember } = useSelector((state) => state.project);
	const projectId = currentProject.projectId;

	// 프로젝트에 팀원 추가
	const handleProjectAddMember = (e) => {
		let email = userEmailREf.current.innerHTML;
		actionInviteMember(dispatch, email, projectId);
	};

	return (
		<li className={styles.li}>
			<span className={styles.nickname}>{result.nickname}</span>
			<span className={styles.email} ref={userEmailREf}>
				{result.email}
			</span>
			{projectMember?.find((user) => {
				return user.nickname === result.nickname;
			}) ? (
				<button className={styles.plus_btn} style={{ paddingRight: '13px', paddingLeft: '13px' }}>
					<i className="fas fa-check" style={{ color: 'red', cursor: 'not-allowed' }}></i>
				</button>
			) : (
				<button
					className={styles.plus_btn}
					onClick={() => {
						handleProjectAddMember();
					}}
				>
					<span className={styles.plus}>추가</span>
				</button>
			)}
		</li>
	);
};
export default SearchUserResult;
