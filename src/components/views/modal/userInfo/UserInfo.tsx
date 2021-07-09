import React from 'react';
import styles from './sections/styles.module.css';

const UserInfo = (props: any) => {
	return (
		<section className={styles.container}>
			<i className="fas fa-times-circle"></i>
			<header className={styles.header}>
				<h1 className={styles.header__title}>개인 정보</h1>
				<p className={styles.header__description}>프로필 사진, 닉네임과 같이 정보를 변경해보세요!</p>
			</header>
			<main className={styles.main}>
				<header className={styles.main__header}>
					<h2 className={styles.main__title}>{`${'TEST'}님의 기본 정보`}</h2>
					<p className={styles.main__description}>
						일부 정보가 QuokkaBoard 서비스를 사용하는 다른 사람에게 표시될 수 있습니다.
					</p>
					<p className={styles.main__social__description}>계정 연동 회원은 정보 수정이 불가합니다</p>
				</header>
				<ul className={styles.userInfoContainer}>
					<li className={styles.userInfoContainer__image}>
						<h3>사진</h3>
						<span>사진을 추가 또는 변경을 해보세요!</span>
						<input type="file" name="" id="" />
					</li>
					<li className={styles.userInfoContainer__nickname}>
						<h3>닉네임</h3>
						<span>{`Test`}</span>
						<i className="fas fa-greater-than"></i>
					</li>
					<li className={styles.userInfoContainer__password}>
						<h3>비밀번호</h3>
						<span>{`*******`}</span>
						<i className="fas fa-greater-than"></i>
					</li>
					<li>
						<span>회원님의 정보보호를 위해 주기적으로 비밀번호를 변경해주세요!</span>
					</li>
				</ul>
			</main>
			<footer className={styles.footer}>
				<h3 className={styles.footer__label}>탈퇴</h3>
				<button className={styles.deleteUserButton}>회원 탈퇴</button>
			</footer>
		</section>
	);
};

export default UserInfo;
