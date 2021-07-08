import React, { useState } from 'react';
import styles from './sections/search.module.css';
import searchResult from './sections/searchResult';
import followerResult from './sections/followerResult';
import FollowerUserResult from './FollowerUserResult';
import SearchUserResult from './SearchUserResult';

const Search = (props: any) => {
	const [searchUser, setSearchPerson] = useState(searchResult);
	const [followerUser, setFollowerUser] = useState(followerResult);
	const [isSearchListClicked, setSearchList] = useState(true);

	const handleSearchListUpdate = () => {
		setSearchList(true);
	};

	const handleSearchListReset = () => {
		setSearchList(false);
	};

	return (
		<section className={styles.container}>
			<div className={styles.close_btn} onClick={props.isSearchModalClose}>
				<i className="fas fa-times"></i>
			</div>
			<h3 className={styles.title}>프로젝트에 추가할 팀원 검색</h3>
			<div className={styles.div}>
				<label className={styles.label} htmlFor="search_name">
					검색할 닉네임 또는 이메일을 적어주세요 :)
				</label>
				<div className={styles.search_div}>
					<input className={styles.search_name_input} id="search_name" />
					<button className={styles.search_btn}>검색</button>
				</div>
			</div>
			<div className={styles.div_btn}>
				<button className={styles.search_list} onClick={handleSearchListUpdate}>
					검색 목록
				</button>
				<button className={styles.friends_list} onClick={handleSearchListReset}>
					친구 목록
				</button>
			</div>

			<ul className={styles.ul}>
				{isSearchListClicked
					? searchUser.map((result) => {
							return <SearchUserResult result={result} />;
					  })
					: followerUser.map((result) => {
							return <FollowerUserResult result={result} />;
					  })}
			</ul>
		</section>
	);
};

export default Search;
