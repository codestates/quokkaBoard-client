import React, { useState, useEffect } from 'react';
import styles from './sections/dashBoard.module.css';
import MyStatusGraph from './graph/MyStatus';
import TeamStatusGraph from './graph/TeamStatus';
import ProjectStatus from './graph/ProjectStatus';
import MyCompleteTask from './graph/MyCompleteTask';
import aos from 'aos';
import 'aos/dist/aos.css';
import { data1, data2, data3, data4 } from './fakeData/data';
import quokka from './sections/quokka_bgR.png';
import leaf from './sections/leaf.png';
import Nav from '../nav/Nav';
import Loading from '../loading/Loading';

const DashBoard = (props) => {
	const [myStatus, setMyStatus] = useState(data1);
	const [teamStatus, setTeamStatus] = useState(data2);
	const [projectStatus, setProjectStatus] = useState(data3);
	const [completeStatus, setCompleteStatus] = useState(data4);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		aos.init();
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
	}, []);

	return isLoading ? (
		<Loading />
	) : (
		<>
			<Nav />
			<div className={styles.container}>
				<h1>Dash Board</h1>
				<img src={quokka} alt="" />
				<img src={leaf} alt="" />
				<span className={styles.bg_nemo}></span>
				<span className={styles.bg_nemo}></span>
				<span className={styles.bg_nemo}></span>
				<span className={styles.bg_nemo}></span>
				<span className={styles.bg_nemo}></span>
				<span className={styles.bg_nemo}></span>
				<section className={`${styles.totalBoard}`}>
					<ul>
						<li>
							<h2>16</h2>
							<span>total</span>
						</li>
						<span></span>
						<li>
							<h2>9</h2>
							<span>inProgress</span>
						</li>
						<span></span>
						<li>
							<h2>7</h2>
							<span>done</span>
						</li>
					</ul>
				</section>
				<section className={styles.taskBoard}>
					<ul>
						<h3>
							<i className="fas fa-burn"></i>Urgent Tasks
						</h3>
						<li>
							<span>Do</span>
							<span>https 배포</span>
							<span>오늘</span>
						</li>
						<li>
							<span>Do</span>
							<span>Route 기능 만들기</span>
							<span>1일 남음</span>
						</li>
						<li>
							<span>Doing</span>
							<span>CRA 세팅</span>
							<span>4일 남음</span>
						</li>
					</ul>
					<ul>
						<h3>
							<i className="fas fa-star"></i>New Tasks
						</h3>
						<li>
							<span>Do</span>
							<span>Redux 적용하기</span>
							<span>오늘</span>
						</li>
						<li>
							<span>Do</span>
							<span>Post Css plugin 설정</span>
							<span>4일 전</span>
						</li>
					</ul>
				</section>
				<section className={styles.graph1}>
					<div className={styles.myStatus}>
						<h2>My Tasks in Board</h2>
						<MyStatusGraph data={myStatus} />
					</div>
					<div className={styles.teamStatus}>
						<h2>Team Tasks Status</h2>
						<TeamStatusGraph data={teamStatus} />
					</div>
				</section>
				<section className={styles.graph2} data-aos="fade-zoom-in">
					<h2>Team Tasks</h2>
					<p>팀원들이 기여하고있는 임무 통계를 확인해보세요</p>
					<div className={styles.projectStatus}>
						<ProjectStatus data={projectStatus} />
					</div>
				</section>
				<section className={styles.graph3} data-aos="fade-zoom-in">
					<h2>Complete Tasks</h2>
					<p>최근 5일동안 완료한 임무의 갯수는?</p>
					<div className={styles.myCompleteTask}>
						<MyCompleteTask data={completeStatus} />
					</div>
				</section>
			</div>
		</>
	);
};

export default DashBoard;
