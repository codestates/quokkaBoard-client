import React from 'react';
import styles from './sections/search.module.css';

const FollowerUserResult = ({ result }: any) => {
	return (
		<li className={styles.li}>
			<span className={styles.nickname}>{result.nickname}</span>
			<span className={styles.email}>{result.email} </span>
			<button className={styles.plus_btn}>
				<span className={styles.plus}>추가</span>
			</button>
		</li>
	);
};

export default FollowerUserResult;
