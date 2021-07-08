import React, { useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Login from '../modal/login/Login';
import styles from './sections/styles.module.css';

// image
import mainLogo from '../../../common/images/main_logo2.png';
import quokka from '../register/sections/images/signup_img.png';

function LandingPage() {
	return (
		<div className={styles.container}>
			{/* 네비게이션 */}
			<nav className={styles.navigation}>
				<ul className={styles.navigation__left}>
					<img src={mainLogo} alt="main logo" />
					<li>
						<a href="#">홈</a>
					</li>
					<li>
						<a href=".part5">문의하기</a>
					</li>
				</ul>
				<div className={styles.navigation__right}>
					<a href="#">로그인</a>
					<a href="#">무료 체험</a>
				</div>
			</nav>
			{/* 소개 및 타이틀 */}
			<section className={styles.part1}>
				<div className={styles.part1__left}>
					<div>
						<h1>
							최고의 팀을
							<br />
							위한 도구
						</h1>
						<p>
							간단하게 프로젝트를 관리하고 팀원들의 업무를
							<br />
							추적하여 원활한 협업을 경함하세요.
						</p>
						<a href="#">지금 시작하기</a>
					</div>
				</div>
				<div className={styles.part1__right}>
					<img src={quokka} alt="main image" />
				</div>
			</section>
			{/* 간략한 소개 */}
			<section className={styles.part2}>
				<h1>우수한 프로젝트 관리</h1>
				<div className={styles.part2__card_container}>
					<div className={styles.part2__card}>
						<div>
							<i className="fas fa-users"></i>
						</div>
						<h2>프로젝트 관리</h2>
						<p>팀 또는 개인프로젝트를 빠르게 설정하고 관리할 수 있습니다.</p>
					</div>
					<div className={styles.part2__card}>
						<div>
							<i className="fas fa-tasks"></i>
						</div>
						<h2>내 업무 관리</h2>
						<p>업무를 위한 칸반보드를 제공하여 더욱더 효율적으로 관리가 가능합니다.</p>
					</div>
					<div className={styles.part2__card}>
						<div>
							<i className="far fa-clock"></i>
						</div>
						<h2>시간 관리</h2>
						<p>
							마감일이 얼마남지않은 업무, 최근 완료한 업무등의 알림으로 전체적인 시간을 효율적으로 관리할 수 있습니다.
						</p>
					</div>
				</div>
			</section>
			{/* 상세 소개 */}
			<section className={styles.part3}>
				<h1>당신의 효율을 위해 제공되는 강력한 기능</h1>
				<div className={styles.part3__card_container}>
					<div className={styles.part3__card}>
						<img src="https://media.giphy.com/media/NLIPqilkyziF2/giphy.gif" alt="#" />
						<div className={styles.part3__card__description}>
							<h2>프로젝트 관리</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio facilis repellendus molestiae
								molestias! Tempora facilis repudiandae corporis debitis cupiditate. Temporibus odit necessitatibus neque
								distinctio?
							</p>
						</div>
					</div>
					<div className={styles.part3__card}>
						<img src="https://media.giphy.com/media/NLIPqilkyziF2/giphy.gif" alt="#" />
						<div className={styles.part3__card__description}>
							<h2>대쉬보드 현황</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio facilis repellendus molestiae
								molestias! Tempora facilis repudiandae corporis debitis cupiditate. Temporibus odit necessitatibus neque
								distinctio?
							</p>
						</div>
					</div>
					<div className={styles.part3__card}>
						<img src="https://media.giphy.com/media/NLIPqilkyziF2/giphy.gif" alt="#" />
						<div className={styles.part3__card__description}>
							<h2>칸반보드 관리</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio facilis repellendus molestiae
								molestias! Tempora facilis repudiandae corporis debitis cupiditate. Temporibus odit necessitatibus neque
								distinctio?
							</p>
						</div>
					</div>
					<div className={styles.part3__card}>
						<img src="https://media.giphy.com/media/NLIPqilkyziF2/giphy.gif" alt="#" />
						<div className={styles.part3__card__description}>
							<h2></h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio facilis repellendus molestiae
								molestias! Tempora facilis repudiandae corporis debitis cupiditate. Temporibus odit necessitatibus neque
								distinctio?
							</p>
						</div>
					</div>
					<div className={styles.part3__card}>
						<img src="https://media.giphy.com/media/NLIPqilkyziF2/giphy.gif" alt="#" />
						<div className={styles.part3__card__description}>
							<h2>프로젝트 관리</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio facilis repellendus molestiae
								molestias! Tempora facilis repudiandae corporis debitis cupiditate. Temporibus odit necessitatibus neque
								distinctio?
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* 문의 */}
			<section className={styles.part4} id="contact">
				<h1>Contact & Feedback</h1>
				<p>
					Quokka Baord는 개인과 팀을 위한 최고의 툴이 되기위해 항상 노력하고 발전하고자 합니다.
					<br />
					언제나 문의사항 및 피드백이 있다면 연락을 해주세요!
				</p>
				<a href="#">문의하기</a>
			</section>
			{/* 푸터 */}
			<footer className={styles.footer}>
				<div className={styles.footer__logo}>
					<img
						src="https://lh3.googleusercontent.com/proxy/5_kOrq2d9Zo2v7plcbWq4PiMmkPOaBtHwZfw1WptN4y0SSGAC2J4hQf4zXuzMLSvNrDi7FCo0XLFzMW3ot0s0nCpxxvx_htxH_UZKuHqS2E5smnXNGdefPOfUcb7IO3d1HcQI5QhP2RPu0w9x8JwozzUMQ"
						alt="kakao"
					/>
					<img src="https://image.zdnet.co.kr/2020/11/23/3346470b81d65cea46b616a3f83b3287.png" alt="house" />
					<img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="google" />
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png"
						alt="samsung"
					/>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png"
						alt="toss"
					/>
				</div>
				<div className={styles.footer__team}>
					<div className={styles.footer_info}>
						<img src={mainLogo} alt="" />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, porro. Dolores voluptates provident
							commodi repellendus quisquam veritatis explicabo sapiente minus quidem ipsa hic aspernatur, earum possimus
							voluptatem dolore maxime ut reprehenderit aperiam excepturi facere. Iste dolorum commodi tenetur deserunt
							voluptatibus! Aliquid beatae mollitia ipsam consectetur soluta animi quo illum expedita.
						</p>
					</div>
					<ul>
						<li>
							<h1>연락하기</h1>
						</li>
						<li>
							유지예
							<i className="fab fa-github"></i>
							<i className="fas fa-blog"></i>
						</li>
						<li>
							정지운
							<i className="fab fa-github"></i>
							<i className="fas fa-blog"></i>
						</li>
						<li>
							박상우
							<i className="fab fa-github"></i>
							<i className="fas fa-blog"></i>
						</li>
						<li>
							하승용
							<i className="fab fa-github"></i>
							<i className="fas fa-blog"></i>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
}

export default LandingPage;
