import React, { useState, useCallback, useRef } from 'react';
import './sections/styles.css';
import loginQuokka from './sections/images/signup_img.png';

function Login() {
	const [emailCheck, setEmailCheck] = useState(false);
	const [nickNameCheck, setNickNameCheck] = useState(false);
	const [passwordCheck, setPasswordCheck] = useState(false);
	const [passwordConfirmCheck, setPasswordConfirmCheck] = useState(false);

	const container = useRef<HTMLDivElement>(null);
	// Input Values
	const email = useRef<HTMLInputElement>(null);
	const nickname = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);
	const passwordConfirm = useRef<HTMLInputElement>(null);

	const handleRegisterButton = useCallback(() => {
		if (container.current !== null) {
			container.current.classList.add('right-panel-active');
		}
	}, []);

	const handleLoginButton = useCallback(() => {
		if (container.current !== null) {
			container.current.classList.remove('right-panel-active');
		}
	}, []);

	// 유효성 검사 함수
	const handleCheckEmail = useCallback(
		(e) => {
			const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			if (e.target.value.match(validRegex)) {
				// 이메일 체크
				e.target.classList.remove('invalid-outline');
				setEmailCheck(true);
			} else {
				e.target.classList.add('invalid-outline');
				setEmailCheck(false);
			}
		},
		[emailCheck],
	);
	const handleCheckNickName = useCallback(
		(e) => {
			if (e.target.value.length > 3) {
				// 닉네임 체크
				e.target.classList.remove('invalid-outline');
				setNickNameCheck(true);
			} else {
				e.target.classList.add('invalid-outline');
				setNickNameCheck(false);
			}
		},
		[nickNameCheck],
	);
	const handleCheckPassword = useCallback(
		(e) => {
			const validRegex =
				/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
			if (e.target.value.match(validRegex)) {
				e.target.classList.remove('invalid-outline');
				setPasswordCheck(true);
			} else {
				e.target.classList.add('invalid-outline');
				setPasswordCheck(false);
			}
		},
		[passwordCheck],
	);
	const handleCheckConfirmPassword = useCallback(
		(e) => {
			if (password.current && e.target.value === password.current.value) {
				e.target.classList.remove('invalid-outline');
				setPasswordConfirmCheck(true);
			} else {
				e.target.classList.add('invalid-outline');
				setPasswordConfirmCheck(false);
			}
		},
		[passwordConfirmCheck],
	);

	// 회원가입 버튼
	const handleRegisterSubmit = useCallback((e) => {
		e.preventDefault();
	}, []);

	// 로그인 버튼
	const handleLoginSubmit = useCallback((e) => {
		e.preventDefault();
	}, []);

	return (
		<div className="body_container">
			<div className="container" ref={container}>
				<div className="form-container sign-up-container">
					<h1>회원 가입</h1>
					<span>간단한 정보로 회원등록을 해보세요!</span>
					<form action="#">
						<input type="email" placeholder="이메일" onChange={handleCheckEmail} ref={email} />
						<input type="text" placeholder="닉네임" onChange={handleCheckNickName} ref={nickname} />
						<input type="password" placeholder="비밀번호" onChange={handleCheckPassword} ref={password} />
						<input type="password" placeholder="확인" onChange={handleCheckConfirmPassword} ref={passwordConfirm} />
						<button type="submit">가입하기</button>
					</form>
				</div>
				<div className="form-container sign-in-container">
					<form action="#">
						<h1>로그인</h1>
						<div className="social-container">
							<a href="#" className="social">
								<i className="fab fa-kickstarter-k"></i>
							</a>
							<a href="#" className="social">
								<i className="fab fa-gofore"></i>
							</a>
							<a href="#" className="social">
								<i className="fab fa-linkedin-in"></i>
							</a>
						</div>
						<span>또는 당신의 계정을 입력하세요</span>
						<input type="email" placeholder="이메일" />
						<input type="password" placeholder="비밀번호" />
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
