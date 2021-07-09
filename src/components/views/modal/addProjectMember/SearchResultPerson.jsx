import React from 'react';
import styles from './sections/addProjectMember.module.css';

const SearchResultPerson = ({ result, handleSelectUsers, selectUsers }) => {
	const handleSelectUser = () => {
		// 검색 목록에서 유저 한명을 클릭했을때 일어남
		// 유저의 아이디와 닉네임과 이메일 주소를 가져옴
		// SelectUsers에 업데이트 해줘야함
		const id = result.id;
		const email = result.email;
		const nickname = result.nickname;

		// SelectUsers에 업데이트 해줘야함
		const user = { id, email, nickname };
		handleSelectUsers(user);
	};

	return (
		<li className={styles.li}>
			<span className={styles.nickname}>{result.nickname}</span>
			<span className={styles.email}>{result.email}</span>
			<button className={styles.plus_btn}>
				{selectUsers.find((user) => {
					return user.id === result.id;
				}) ? (
					<i className="fas fa-check "></i>
				) : (
					<span className={styles.plus} onClick={handleSelectUser}>
						추가
					</span>
				)}
			</button>
		</li>
	);
};

export default SearchResultPerson;
