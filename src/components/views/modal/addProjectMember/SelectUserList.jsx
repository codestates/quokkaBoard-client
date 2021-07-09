import React from 'react';
import styles from './sections/selectUserList.module.css';

const SelectUserList = ({ handleSelectUserCancel, user }) => {
	const handleSelectMemberCancel = () => {
		handleSelectUserCancel(user);
	};

	return (
		<li className={styles.li} onClick={handleSelectMemberCancel}>
			{user.nickname}
		</li>
	);
};

export default SelectUserList;
