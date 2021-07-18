import React, { useCallback } from 'react';
import { actionDeleteUser } from '../../../../_actions';
import styles from './sections/deleteUserAlert.module.css';
import { useDispatch } from 'react-redux';

const DeleteUserAlert = (props) => {
	const dispatch = useDispatch();
	const handleDeleteUser = useCallback(() => {
		actionDeleteUser(dispatch, props.userId, props.handleDeleteUserOff);
	}, [props.userId]);

	return (
		<div className={styles.container}>
			<h1>탈퇴시 칸반보드에 기록 및 모든 정보가 소멸됩니다.</h1>
			<p>정말 탈퇴하시겠습니까?</p>
			<div>
				<button onClick={handleDeleteUser}>탈퇴</button>
				<button onClick={props.handleDeleteUserOff}>취소</button>
			</div>
		</div>
	);
};

export default DeleteUserAlert;
