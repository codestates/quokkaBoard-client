// module
import React, { useState, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import env from 'react-dotenv';
// css
import './sections/styles.css';
// component
import loginQuokka from './sections/images/signup_img.png';
// actions
import { actionLogin } from '../../../../_actions/index';

// axios.defaults.withCredentials = true;

function Login({ handleCloseLoginModal, handleIsLoadingOn, handleIsLoadingOff }) {
	const dispatch = useDispatch();
	const GITHUB_LOGIN_URL = 'https://github.com/login/oauth/authorize?client_id=5a0ba47d6cec26f64fda';
	const [emailCheck, setEmailCheck] = useState(false);
	const [nickNameCheck, setNickNameCheck] = useState(false);
	const [passwordCheck, setPasswordCheck] = useState(false);
	const [passwordConfirmCheck, setPasswordConfirmCheck] = useState(false);

	const container = useRef(null);
	const email = useRef(null);
	const nickname = useRef(null);
	const password = useRef(null);
	const passwordConfirm = useRef(null);
	const loginEmail = useRef(null);
	const loginPassword = useRef(null);

	const emailValidMessage = useRef(null);
	const nicknameValidMessage = useRef(null);
	const passwordValidMessage = useRef(null);
	const confirmPasswordValidMessage = useRef(null);
	const registerErrorMessage = useRef(null);
	const loginErrorMessage = useRef(null);

	const handleRegisterButton = useCallback(() => {
		if (container.current !== null) {
			container.current.classList.add('right-panel-active');
		}
	}, []);

	const handleLoginButton = useCallback(() => {
		if (container.current !== null) {
			container.current.classList.remove('right-panel-active');
		}
	}, [container]);

	// 유효성 검사 함수
	const handleCheckEmail = useCallback(
		async (e) => {
			const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			if (e.target.value.match(validRegex)) {
				try {
					const { data } = await axios.post(`https://server.quokkaboard.com/user/exist-email`, {
						email: e.target.value,
					});
					console.log(data);
					if (!data.success) {
						if (emailValidMessage.current) {
							emailValidMessage.current.textContent = '';
						}
						e.target.classList.remove('invalid-outline');
						setEmailCheck(true);
					} else {
						if (emailValidMessage.current) {
							emailValidMessage.current.textContent = '이미 존재하는 이메일입니다';
						}
						e.target.classList.add('invalid-outline');
						setEmailCheck(false);
					}
				} catch (err) {
					if (emailValidMessage.current) {
						emailValidMessage.current.textContent = '서버와 연결이 불안정합니다';
					}
				}
			} else {
				if (emailValidMessage.current) {
					emailValidMessage.current.textContent = '이메일 형식에 맞지않습니다';
				}
				e.target.classList.add('invalid-outline');
				setEmailCheck(false);
			}
		},
		[emailCheck, email],
	);
	const handleCheckNickName = useCallback(
		(e) => {
			if (e.target.value.length >= 2) {
				// 닉네임 체크
				axios
					.post(`https://server.quokkaboard.com/user/exist-nickname`, {
						nickname: e.target.value,
					})
					.then((response) => {
						console.log(response.data);
						if (!response.data.success) {
							if (nicknameValidMessage.current) nicknameValidMessage.current.textContent = '';
							e.target.classList.remove('invalid-outline');
							setNickNameCheck(true);
						} else {
							if (nicknameValidMessage.current)
								nicknameValidMessage.current.textContent = '이미 존재하는 닉네임 입니다';
							e.target.classList.add('invalid-outline');
							setNickNameCheck(false);
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
				setNickNameCheck(false);
			}
		},
		[nickNameCheck, nickname],
	);
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
		[passwordConfirmCheck, password, passwordConfirm],
	);

	// 회원가입 버튼
	const handleRegisterSubmit = useCallback(
		(e) => {
			e.preventDefault();
			const user = {
				email: e.target[0].value,
				nickname: e.target[1].value,
				password: e.target[2].value,
			};
			console.log(user);

			if (emailCheck && nickNameCheck && passwordCheck && passwordConfirmCheck) {
				if (registerErrorMessage.current) {
					registerErrorMessage.current.textContent = '';
				}
				axios
					.post(`https://server.quokkaboard.com/user/register`, {
						...user,
					})
					.then((response) => {
						console.log(response.data);
						if (response.status === 200) {
							handleLoginButton();
						}
						e.target.reset();
					})
					.catch((err) => {
						console.log(err.data);
						console.error(err);
					});
			} else {
				if (registerErrorMessage.current) {
					registerErrorMessage.current.textContent = '입력한 값을 다시 확인해주세요';
				}
				return;
			}
		},
		[emailCheck, nickNameCheck, passwordCheck, passwordConfirmCheck],
	);

	// 로그인 버튼
	const handleLoginSubmit = useCallback(
		(e) => {
			e.preventDefault();
			loginErrorMessage.current?.classList.remove('shake-animation');
			const user = {
				email: loginEmail.current?.value,
				password: loginPassword.current?.value,
			};
			axios
				.post(`https://server.quokkaboard.com/user/login`, user)
				.then((response) => {
					// 성공 했을때
					if (response.data.success) {
						dispatch(actionLogin(response.data.data));
						if (loginErrorMessage.current) {
							loginErrorMessage.current.textContent = '';
						}
						e.target.reset();
						handleCloseLoginModal();
					} else {
						if (loginErrorMessage.current) {
							loginErrorMessage.current.textContent = response.data.message;
							loginErrorMessage.current.classList.add('shake-animation');
						}
						return;
					}
				})
				.catch((err) => {
					console.log(err.data);
					console.log(err);
				});
		},
		[loginEmail, loginPassword],
	);

	const socialLoginHandler = (e) => {
		e.preventDefault();
		window.location.assign(GITHUB_LOGIN_URL);
	};

	return (
		<div className="body_container">
			<div className="container" ref={container}>
				<div onClick={handleCloseLoginModal}>
					<i className="fas fa-times-circle"></i>
				</div>
				<div className="form-container sign-up-container">
					<h1>회원 가입</h1>
					<p>간단한 정보로 회원등록을 해보세요!</p>
					<form action="#" onSubmit={handleRegisterSubmit}>
						<input type="email" name="email" placeholder="이메일" onBlur={handleCheckEmail} ref={email} />
						<span className="email__span" ref={emailValidMessage}></span>
						<input type="text" name="nickname" placeholder="닉네임" onBlur={handleCheckNickName} ref={nickname} />
						<span className="nickname__span" ref={nicknameValidMessage}></span>
						<input type="password" name="password" placeholder="비밀번호" onBlur={handleCheckPassword} ref={password} />
						<span className="password__span" ref={passwordValidMessage}></span>
						<input
							type="password"
							name="confirmPassword"
							placeholder="확인"
							onBlur={handleCheckConfirmPassword}
							ref={passwordConfirm}
						/>
						<span className="confirmPassword__span" ref={confirmPasswordValidMessage}></span>
						<span ref={registerErrorMessage}></span>
						<button type="submit">가입하기</button>
					</form>
				</div>
				<div className="form-container sign-in-container">
					<form action="#" onSubmit={handleLoginSubmit}>
						<h1>로그인</h1>
						<div className="social-container">
							<a href="#" className="social" onClick={socialLoginHandler}>
								<i className="fab fa-github"></i>
							</a>
							<a href="#" className="social">
								<i className="fab fa-gofore"></i>
							</a>
							<a href="#" className="social">
								<i className="fab fa-linkedin-in"></i>
							</a>
						</div>
						<span>또는 당신의 계정을 입력하세요</span>
						<input type="email" ref={loginEmail} placeholder="이메일" />
						<input type="password" ref={loginPassword} placeholder="비밀번호" />
						<span ref={loginErrorMessage} className="login-check"></span>
						<a className="forgot_password" href="#">
							비밀번호 잊어버리셨나요?
						</a>
						<button>로그인</button>
					</form>
				</div>
				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-left">
							<img src={loginQuokka} alt="loginImg" />
							<h1>환영합니다! :)</h1>
							<p>
								좀더 많은 기능을 사용하시려면
								<br /> 로그인을 해주세요!
							</p>
							<button className="ghost" id="signIn" onClick={handleLoginButton}>
								로그인
							</button>
						</div>
						<div className="overlay-panel overlay-right">
							<img src={loginQuokka} alt="loginLogo" />
							<p>혹시 회원이 아니신가요?!</p>
							<button className="ghost" id="signUp" onClick={handleRegisterButton}>
								회원 가입
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
