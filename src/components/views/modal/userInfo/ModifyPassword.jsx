import React from 'react';
import { useRef, useState, useCallback } from 'react';
import styles from './sections/modifyPassword.module.css';
import { actionUpdatePassword } from '../../../../_actions';

const ModifyPassword = (props) => {
	const [passwordCheck, setPasswordCheck] = useState(false);
	const [passwordConfirmCheck, setPasswordConfirmCheck] = useState(false);

	const passwordValidMessage = useRef(null);
	const confirmPasswordValidMessage = useRef(null);
	const prevPasswordValidMessage = useRef(null);
	const password = useRef(null);

	const handleCheckPassword = useCallback(
		(e) => {
			const validRegex =
				/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
			if (e.target.value.match(validRegex)) {
				if (passwordValidMessage.current) {
					passwordValidMessage.current.textContent = '';
				}
				e.target.classList.remove('invalid-outline');
				setPasswordCheck(true);
			} else {
				if (passwordValidMessage.current) {
					passwordValidMessage.current.textContent = '숫자, 영문, 기호를 한가지이상 입력해주세요';
				}
				e.target.classList.add('invalid-outline');
				setPasswordCheck(false);
			}
		},
		[passwordCheck, password],
	);

	const handleCheckConfirmPassword = useCallback(
		(e) => {
			if (password.current && e.target.value === password.current.value) {
				if (confirmPasswordValidMessage.current) {
					confirmPasswordValidMessage.current.textContent = '';
				}
				e.target.classList.remove('invalid-outline');
				setPasswordConfirmCheck(true);
			} else {
				if (confirmPasswordValidMessage.current) {
					confirmPasswordValidMessage.current.textContent = '비밀번호가 일치하지 않습니다';
				}
				e.target.classList.add('invalid-outline');
				setPasswordConfirmCheck(false);
			}
		},
		[passwordConfirmCheck, password],
	);

	const handleModifyPassword = async (e) => {
		e.preventDefault();
		const userId = props.userId;
		const password = e.target[0].value;
		const newpassword = e.target[1].value;
		const info = {
			userId,
			password,
			newpassword,
		};
		const message =
			passwordCheck && passwordConfirmCheck && (await actionUpdatePassword(info, props.handlePasswordClose));
		if (prevPasswordValidMessage.current) {
			prevPasswordValidMessage.current.textContent = message;
		}
	};

	return (
		<section className={styles.container}>
			<span onClick={props.handlePasswordClose}>
				<i className="far fa-times-circle"></i>
			</span>
			<h1>변경할 패스워드를 입력해 주세요</h1>
			<form onSubmit={handleModifyPassword}>
				<label htmlFor="">이전 비밀번호</label>
				<input type="password" />
				<span ref={prevPasswordValidMessage}></span>
				<label htmlFor="password">새로운 비밀번호</label>
				<input ref={password} type="password" id="password" onChange={handleCheckPassword} />
				<span ref={passwordValidMessage}></span>
				<label htmlFor="confirm">확인</label>
				<input type="password" id="confirm" onChange={handleCheckConfirmPassword} />
				<span ref={confirmPasswordValidMessage}></span>
				<button type="submit">변경하기</button>
			</form>
		</section>
	);
};

export default ModifyPassword;
