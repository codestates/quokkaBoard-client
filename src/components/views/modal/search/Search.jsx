import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './sections/search.module.css';
import FollowerUserResult from './FollowerUserResult';
import SearchUserResult from './SearchUserResult';

import { actionSearchUser } from '../../../../_actions';

const Search = (props) => {
	const dispatch = useDispatch();
	const { searchUser } = useSelector((state) => state.member);
	const { projectMember } = useSelector((state) => state.project);
	const [searchResult, setSearchResult] = useState('');
	const [isSearchListClicked, setSearchList] = useState(false);
	const searchInputRef = useRef();

	const handleSearchUser = () => {
		const searchWord = searchInputRef.current.value;
		actionSearchUser(dispatch, searchWord);
		handleSearchListUpdate();
		// setSearchResult(!searchResult);
	};

	const handleSearchListUpdate = () => {
		setSearchList(true);
	};

	const handleSearchListReset = () => {
		setSearchList(false);
	};

	// const SearchResultUpdate = (user) => {
	// 	setSearchResult({ ...user });
	// };

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
					<input ref={searchInputRef} className={styles.search_name_input} id="search_name" />
					<button className={styles.search_btn} onClick={handleSearchUser}>
						검색
					</button>
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
				{isSearchListClicked && searchUser?.length
					? searchUser.map((result) => {
							console.log(result);
							return <SearchUserResult key={result.id} result={result} /* SearchResultUpdate={SearchResultUpdate} */ />;
					  })
					: ''}
			</ul>
			{searchResult ? '' : ' '}
		</section>
	);
};

export default Search;
