import React, { useState } from 'react';
import styles from './sections/search.module.css';
import searchResult from './sections/searchResult';

const Search = (props: any) => {
	const [searchPerson, setSearchPerson] = useState(searchResult);

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
				<input className={styles.search_name_input} id="search_name" />
			</div>
			<div className={styles.div_btn}>
				<button className={styles.search_btn}>검색</button>
				<button className={styles.friends_btn}>친구 목록</button>
			</div>

			<ul className={styles.ul}>
				{searchPerson.map((result) => {
					return (
						<li key={result.id} className={styles.li}>
							<span className={styles.nickname}>{result.nickname}</span>
							<span className={styles.email}>{result.email} </span>
							<button className={styles.plus_btn}>
								<i className="fas fa-plus"></i>
							</button>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Search;
