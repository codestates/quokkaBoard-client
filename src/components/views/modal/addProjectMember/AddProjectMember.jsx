import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './sections/addProjectMember.module.css';
import searchResult from '../search/sections/searchResult';
import SearchResultPerson from './SearchResultPerson';

import { actionSearchUser } from '../../../../_actions';

const AddProjectMember = (props) => {
	const dispatch = useDispatch();
	const searchInputRef = useRef();

	// const [searchPerson, setSearchPerson] = useState(searchResult);
	// const [searchUsers, setSearchUsers] = useState([]);

	const { searchUser } = useSelector((state) => state.member);

	// useEffect(() => {
	// console.log(searchUser);
	// console.log(projectMember);
	// });

	const handleSearchUser = () => {
		const searchWord = searchInputRef.current.value;
		actionSearchUser(dispatch, searchWord);
		// handleSearchUsers(searchUser);
	};

	// // searchUser state update
	// const handleSearchUsers = (value) => {
	// 	setSearchUsers(value);
	// };

	return (
		<section className={styles.container}>
			<div className={styles.close_btn} onClick={props.isNewProjectMemberModalClose}>
				<i className="fas fa-times"></i>
			</div>
			<h2 className={styles.h2}>프로젝트 멤버 추가 검색</h2>
			<label className={styles.label} htmlFor="username">
				추가할 멤버 닉네임 또는 이메일을 입력해주세요 :)
			</label>
			<div className={styles.div}>
				<input ref={searchInputRef} className={styles.input} type="text" id="username" />
				<button className={styles.btn} onClick={handleSearchUser}>
					검색
				</button>
			</div>
			<ul className={styles.ul}>
				{searchUser?.map((result) => {
					return (
						<SearchResultPerson
							key={result.id}
							result={result}
							handleSelectUsers={props.handleSelectUsers}
							selectUsers={props.selectUsers}
						/>
					);
				})}
			</ul>
		</section>
	);
};

export default AddProjectMember;
