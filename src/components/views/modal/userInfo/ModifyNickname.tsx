import React, { useState, useCallback, useRef } from 'react';
import styles from './sections/modifyNickname.module.css';
import axios from 'axios';
import env from 'react-dotenv';

const ModifyNickname = (props: any) => {
	const [nicknameCheck, setNicknameCheck] = useState(false);

	const nicknameValidMessage = useRef<HTMLSpanElement>(null);

	const handleCheckNickName = useCallback(
		(e) => {
			if (e.target.value.length >= 2) {
				// 닉네임 체크
				axios
					.post(`${env.REACT_APP_SERVER_URI}/user/exist-nickname`, {
						nickname: e.target.value,
					})
					.then((response) => {
						console.log(response.data);
						if (!response.data.success) {
							if (nicknameValidMessage.current) nicknameValidMessage.current.textContent = '';
							e.target.classList.remove('invalid-outline');
							setNicknameCheck(true);
						} else {
							if (nicknameValidMessage.current) nicknameValidMessage.current.textContent = response.data.message;
							e.target.classList.add('invalid-outline');
							setNicknameCheck(false);
						}
					})
					.catch((error) => {
						if (nicknameValidMessage.current) {
							nicknameValidMessage.current.textContent = '서버와 연결이 불안정합니다';
						}
						console.error(error);
					});
			} else {
				if (nicknameValidMessage.current) nicknameValidMessage.current.textContent = '2글자 이상 입력해주세요';
				e.target.classList.add('invalid-outline');
				setNicknameCheck(false);
			}
		},
		[nicknameCheck],
	);

	// 닉네임 변경 요청

	return (
		<section className={styles.container}>
			<span onClick={props.handleNicknameClose}>
				<i className="far fa-times-circle"></i>
			</span>
			<h1>변경할 닉네임을 입력해 주세요</h1>
			<form>
				<input type="text" onChange={handleCheckNickName} />
				<button type="submit">변경하기</button>
			</form>
			<span ref={nicknameValidMessage}></span>
		</section>
	);
};

export default ModifyNickname;
