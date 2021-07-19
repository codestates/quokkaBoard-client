import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './sections/styles.module.css';
import aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import env from 'react-dotenv';

// Componenet
import LoginModal from '../modal/login/Login';
import LoadingPage from '../loading/Loading';

// actions
import { actionLogout } from '../../../_actions/index';

// Common image
import mainLogo from '../../../common/images/main_logo2.png';
import quokka from '../modal/login/sections/images/signup_img.png';
import quokka_profile from './sections/images/profile_img.png';
// About image
import awards from './sections/images/about/awards.png';
import projects from './sections/images/about/projects.png';
import repeat from './sections/images/about/repeat.png';
import total from './sections/images/about/total.png';
// Logo image
import naver from './sections/images/Logos/Naver.png';
import kakao from './sections/images/Logos/Kakao.png';
import toss from './sections/images/Logos/Toss.png';
import coupang from './sections/images/Logos/Coupang.png';
import baemin from './sections/images/Logos/Baemin.png';
// feature image
import ux from './sections/images/feature/ux.png';
import web from './sections/images/feature/web-design.png';
import tasks from './sections/images/feature/tasks.png';
import ecom from './sections/images/feature/ecommerce.png';
import social from './sections/images/feature/social-media.png';
import graph from './sections/images/feature/graphic-design.png';
// recent image
import blog1 from './sections/images/recent/blog1.png';
import blog2 from './sections/images/recent/blog2.png';
import blog3 from './sections/images/recent/blog3.png';
// team image
import jiye from './sections/images/team/jiye.png';
import jiun from './sections/images/team/jiun.png';
import sangwoo from './sections/images/team/sangwoo.png';
import seungyong from './sections/images/team/seungyong.png';
// contact image
import contact from './sections/images/contact/contact.jpg';
import LandingProjectList from '../modal/projectList/LandingProjectList';

function LandingPage() {
	const dispatch = useDispatch();
	const nav = useRef(null);
	const arrowUp = useRef(null);
	const slider = useRef(null);
	const navMove = styles.nav__move;
	const hide = styles.hide;

	const { userInfo } = useSelector((state) => state.users);
	console.log(userInfo);
	const [isLoginModal, setIsLoginModal] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [isStart, setIsStart] = useState(false);
	const [accessToken, setAccessToken] = useState('');

	const handleIsStartClick = useCallback(
		(e) => {
			e.preventDefault();
			userInfo?.id && setIsStart(true);
		},
		[isStart, userInfo],
	);
	const handleIsStartClose = (e) => {
		e.preventDefault();
		setIsStart(false);
	};

	const handleIsLoadingOn = useCallback(
		(e) => {
			e.preventDefault();
			setIsLoading(true);
		},
		[isLoading],
	);
	const handleIsLoadingOff = () => {
		setIsLoading(false);
	};
	const handleOpenLoginModal = useCallback(
		(e) => {
			e.preventDefault();
			setIsLoginModal(true);
		},
		[isLoginModal],
	);
	const handleCloseLoginModal = () => {
		setIsLoginModal(false);
	};
	const handleClickLogout = useCallback(
		(e) => {
			e.preventDefault();
			setIsLoading(true);
			if (userInfo?.id) {
				actionLogout(dispatch, userInfo?.id, handleIsLoadingOff);
			}
		},
		[userInfo],
	);

	const handleArrowClick = useCallback(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	const getAccessToken = async (authorizationCode) => {
		let resp = await axios.post(`${env.REACT_APP_SERVER_URI}/user/social-login`, {
			authorizationCode: authorizationCode,
		});
		setAccessToken(resp.data.accessToken);
	};

	useEffect(() => {
		const url = new URL(window.location.href);
		const authorizationCode = url.searchParams.get('code');
		if (authorizationCode) {
			getAccessToken(authorizationCode);
		}
		aos.init();
		window.addEventListener('scroll', (e) => {
			if (window.scrollY >= 50) {
				nav.current?.classList.add(navMove);
				arrowUp.current?.classList.add(hide);
			} else {
				nav.current?.classList.remove(navMove);
				arrowUp.current?.classList.remove(hide);
			}
		});
		setIsLoading(false);
	}, []);
	return isLoading ? (
		<LoadingPage />
	) : (
		<div className={styles.container}>
			{isLoginModal ? (
				<LoginModal
					handleCloseLoginModal={handleCloseLoginModal}
					handleIsLoadingOn={handleIsLoadingOn}
					handleIsLoadingOff={handleIsLoadingOff}
				/>
			) : (
				''
			)}
			<nav className={styles.nav} ref={nav}>
				<div className={styles.nav__container}>
					<h1>
						<a href="#">
							<img src={mainLogo} alt="" />
						</a>
					</h1>
					<ul>
						<li>
							{userInfo ? (
								<a href="#" onClick={handleClickLogout}>
									로그아웃
								</a>
							) : (
								<a
									href="#"
									onClick={handleOpenLoginModal}
									handleIsLoadingOn={handleIsLoadingOn}
									handleIsLoadingOff={handleIsLoadingOff}
								>
									로그인
								</a>
							)}
						</li>
						<li>
							{userInfo ? (
								<a href="#" onClick={handleIsStartClick}>
									시작하기
								</a>
							) : (
								''
							)}
						</li>
					</ul>
				</div>
			</nav>
			<div className={styles.wrapper}>
				<section className={styles.about}>
					<div>
						<img src={quokka_profile} alt="" />
						<h1>Welcome QuokkaBoard</h1>
						<p>최고의 협업 툴</p>
						<div>
							<span className={styles.tri}></span>
							개인, 팀, 회사, 학교 등 어디에서나 계획은 필요합니다.
							<br />
							<span>쿼카 보드</span>를 이용하여 처음부터 끝까지 협업과 관리를 시작해보세요!
						</div>
					</div>
				</section>
				<section className={styles.sub_about}>
					<ul>
						<li>
							<img src={projects} alt="" />
							<span>4,000+</span>
							<span>완료된 프로젝트</span>
						</li>
						<li>
							<img src={total} alt="" />
							<span>2,072</span>
							<span>사용중인 회원</span>
						</li>
						<li>
							<img src={repeat} alt="" />
							<span>1,854</span>
							<span>다시 찾아주신 회원</span>
						</li>
						<li>
							<img src={awards} alt="" />
							<span>1,522</span>
							<span>압도적인 만족도</span>
						</li>
					</ul>
				</section>
				<section className={styles.feature}>
					<div className={styles.feature__container}>
						<h2>효율적인 기능</h2>
						<ul>
							<li>
								<img src={ux} alt="ux" />
								<h3>간편한 UI/UX</h3>
								<p>깔끔하고 간편한 UI/UX를 제공</p>
							</li>
							<li>
								<img src={web} alt="web" />
								<h3>프로젝트</h3>
								<p>손쉬운 프로젝트 관리</p>
							</li>
							<li>
								<img src={tasks} alt="tasks" />
								<h3>칸반보드</h3>
								<p>칸반보드를 이용한 업무관리</p>
							</li>
						</ul>
						<ul>
							<li>
								<img src={ecom} alt="ecom" />
								<h3>무료 기능</h3>
								<p>모든 기능을 제한없이 사용</p>
							</li>
							<li>
								<img src={social} alt="social" />
								<h3>커뮤니케이션</h3>
								<p>채팅기능을 통한 효율적인 소통</p>
							</li>
							<li>
								<img src={graph} alt="graph" />
								<h3>대시보드</h3>
								<p>프로젝트 현황을 한눈에</p>
							</li>
						</ul>
						<span>쿼카보드를 사용해보시겠어요?</span>
						<button onClick={handleIsStartClick}>시작하기</button>
					</div>
				</section>
				<section className={styles.testimonial}>
					<h2 className={styles.testimonial}>리뷰를 확인해보세요 !</h2>

					<div className={styles.testimonial__container} data-aos="zoom-in">
						<div className={styles.testimonial__header}>
							<div></div>
							<div>
								<i className="fas fa-quote-left"></i>
							</div>
							<div></div>
						</div>
						<div className={styles.testi__slider__continaer}>
							<div className={styles.slider__area} ref={slider}>
								<div className={styles.slider__content}>
									<p>취업을 위해 팀 프로젝트를 관리하는데 있어 정말 유용하게 사용했습니다 :)</p>
									<span>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
									</span>
									<span>Team Coco (CodeStates)</span>
								</div>
								<div className={styles.slider__content}>
									<p>
										개인 프로젝트를 준비하기위해 이곳저곳 알아보다가 무료이면서 사용하기 편한 쿼카보드를 사용했습니다.
										간단하게 사용가능해서 좋았습니다!
									</p>
									<span>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
									</span>
									<span>김XX (프론트엔드 개발자)</span>
								</div>
								<div className={styles.slider__content}>
									<p>이번에 친구들과 여행에서 할 To-Do-List를 관리하기위해 사용했는데, 유용하고 쉽게 사용했습니다 !!</p>
									<span>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
									</span>
									<span>MoXXX (대학 동아리)</span>
								</div>
								<div className={styles.slider__content}>
									<p>취업을 위해 팀 프로젝트를 관리하는데 있어 정말 유용하게 사용했습니다 :)</p>
									<span>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
									</span>
									<span>Team Coco (CodeStates)</span>
								</div>
							</div>
							{/* <button>
						<i className="fas fa-angle-right"></i>
					</button> */}
						</div>
						<div className={styles.testimonial__footer}></div>
					</div>
				</section>
				<section className={styles.logos}>
					<ul>
						<li>
							<img src={naver} alt="naver" />
						</li>
						<li>
							<img src={kakao} alt="kakao" />
						</li>
						<li>
							<img src={toss} alt="line" />
						</li>
						<li>
							<img src={coupang} alt="coupang" />
						</li>
						<li>
							<img src={baemin} alt="yanolja" />
						</li>
					</ul>
				</section>
				<section className={styles.recent}>
					<div className={styles.recent__container}>
						<h2>최신 뉴스</h2>
						<ul>
							<li data-aos="flip-left">
								<img src={blog1} alt="" />
								<div>
									<span>업데이트</span>
								</div>
								<ul className={styles.recent__list}>
									<li>
										<i className="far fa-dot-circle"></i> 칸반 기능 추가
									</li>
									<li>
										<i className="far fa-dot-circle"></i> 대시보드 기능 추가
									</li>
								</ul>
								<span> ** 3 July 2021</span>
							</li>
							<li data-aos="flip-left">
								<img src={blog2} alt="" />
								<div>
									<span>협력</span>
								</div>
								<ul className={styles.recent__list}>
									<li>
										<i className="far fa-dot-circle"></i> 코드스테이츠 수강생 협업툴 체결
									</li>
								</ul>
								<span> ** 15 February 2021</span>
							</li>
							<li data-aos="flip-left">
								<img src={blog3} alt="" />
								<div>
									<span>업데이트 예정</span>
								</div>
								<ul className={styles.recent__list}>
									<li>
										<i className="far fa-dot-circle"></i> 채팅 기능
									</li>
									<li>
										<i className="far fa-dot-circle"></i> 코멘트 기능
									</li>
								</ul>
								<span> ** August 2021</span>
							</li>
						</ul>
					</div>
				</section>
				<section className={styles.team}>
					<div className={styles.team__container}>
						<h2>개발팀 멤버</h2>
						<ul>
							<li data-aos="flip-left">
								<div>
									<div>
										<img src={jiye} alt="profile_jiye" />
									</div>
									<h3>유지예</h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, beatae!</p>
									<div>
										<a href="a" target="_blank">
											<i className="fab fa-github"></i> Github
										</a>
										<a href="a" target="_blank">
											<i className="fas fa-blog"></i> Blog
										</a>
									</div>
								</div>
							</li>
							<li data-aos="flip-left">
								<div>
									<div>
										<img src={jiun} alt="profile_jiye" />
									</div>
									<h3>정지운</h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, beatae!</p>
									<div>
										<a href="a" target="_blank">
											<i className="fab fa-github"></i> Github
										</a>
										<a href="a" target="_blank">
											<i className="fas fa-blog"></i> Blog
										</a>
									</div>
								</div>
							</li>
							<li data-aos="flip-right">
								<div>
									<div>
										<img src={sangwoo} alt="profile_jiye" />
									</div>
									<h3>박상우</h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, beatae!</p>
									<div>
										<a href="a" target="_blank">
											<i className="fab fa-github"></i> Github
										</a>
										<a href="a" target="_blank">
											<i className="fas fa-blog"></i> Blog
										</a>
									</div>
								</div>
							</li>
							<li data-aos="flip-right">
								<div>
									<div>
										<img src={seungyong} alt="profile_jiye" />
									</div>
									<h3>하승용</h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, beatae!</p>
									<div>
										<a href="a" target="_blank">
											<i className="fab fa-github"></i> Github
										</a>
										<a href="a" target="_blank">
											<i className="fas fa-blog"></i> Blog
										</a>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</section>
				<section className={styles.contact}>
					<div className={styles.contact__container}>
						<div className={styles.contact__left}>
							<h2>Contact Us</h2>
							<form>
								<div>
									<label htmlFor="">
										<i className="far fa-envelope-open"></i>
									</label>
									<input type="text" placeholder="email" />
								</div>
								<div>
									<label htmlFor="">
										<i className="far fa-user"></i>
									</label>
									<input type="text" placeholder="name" />
								</div>
								<div>
									<textarea rows="3" cols="38" placeholder="Message..."></textarea>
								</div>
								<button>
									보내기<i className="far fa-paper-plane"></i>
								</button>
							</form>
						</div>
						<div className={styles.contact__right}>
							<img src={contact} alt="" />
						</div>
					</div>
				</section>
			</div>
			<footer className={styles.footer}>
				<span>@ 2021 Team Coco Web Portfolio Site</span>
			</footer>
			<div ref={arrowUp} className={styles.arrowUp} onClick={handleArrowClick}>
				<i className="fas fa-arrow-circle-up"></i>
			</div>
			{isStart ? <LandingProjectList handleIsStartClose={handleIsStartClose} /> : ''}
		</div>
	);
}

export default LandingPage;
