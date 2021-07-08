import React, { useState, useRef } from 'react';
import styles from './sections/addProjectMember.module.css';
import searchResult from '../../modal/search/sections/searchResult';
import SearchResultPerson from './SearchResultPerson';

const AddProjectMember = (props: any) => {
	interface SearchUser {
		id: any;
		nickname: string;
		email: string;
	}

	const [searchPerson, setSearchPerson] = useState(searchResult);
	const [searchUsers, setSearchUsers] = useState<SearchUser[]>([]);

	// searchUser state update
	const handleSearchUsers = (value: SearchUser[]) => {
		setSearchUsers(value);
	};

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
				<input className={styles.input} type="text" id="username" />
				<button className={styles.btn}>검색</button>
			</div>
			<ul className={styles.ul}>
				{searchPerson.map((result) => {
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
