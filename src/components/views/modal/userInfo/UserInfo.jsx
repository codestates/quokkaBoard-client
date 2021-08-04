import React, { useState, useCallback, useEffect } from 'react';
import styles from './sections/userInfo.module.css';
import ModifyNickname from './ModifyNickname';
import ModifyPassword from './ModifyPassword';
import DeleteUserAlert from './DeleteUserAlert';
import { useDispatch, useSelector } from 'react-redux';
import { actionEditUserImg } from '../../../../_actions';

// img
import quokkaImage from './sections/profile_img.png';
import { useRef } from 'react';

const UserInfo = (props) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.users);
	const [isNicknameButton, setIsNicknameButton] = useState(false);
	const [isPasswordButton, setIsPasswordButton] = useState(false);
	const [isDeleteUser, setIsDeleteUser] = useState(false);

	const handleDeleteUserOn = useCallback(
		(e) => {
			e.preventDefault();
			setIsDeleteUser(true);
		},
		[isDeleteUser],
	);

	const handleDeleteUserOff = () => {
		setIsDeleteUser(false);
	};

	const handleNicknameOpen = useCallback(
		(e) => {
			e.preventDefault();
			setIsNicknameButton(true);
		},
		[isNicknameButton],
	);

	const handleNicknameClose = useCallback(
		(e) => {
			setIsNicknameButton(false);
		},
		[isNicknameButton],
	);

	const handlePasswordOpen = useCallback(
		(e) => {
			e.preventDefault();
			setIsPasswordButton(true);
		},
		[isPasswordButton],
	);
	const handlePasswordClose = (e) => {
		setIsPasswordButton(false);
	};

	const imgRef = useRef(null);
	const fileRef = useRef(null);
	const uploadBtn = useRef(null);

	// 패스워드 변경 버튼

	return (
		<section className={styles.container}>
			<div className={styles.close} onClick={props.handleEditUserInfoClose}>
				<i className="fas fa-times-circle"></i>
			</div>

			<header className={styles.header}>
				<h1 className={styles.header__title}>개인 정보</h1>
				<p className={styles.header__description}>프로필 사진, 닉네임과 같이 정보를 변경해보세요!</p>
			</header>
			<main className={styles.main}>
				<header className={styles.main__header}>
					<h2 className={styles.main__title}>{`${userInfo?.name ? userInfo?.name : 'Guest'}님의 기본 정보`}</h2>
					<p className={styles.main__description}>
						일부 정보가 QuokkaBoard 서비스를 사용하는 다른 사람에게 표시될 수 있습니다.
					</p>
					<p className={styles.main__social__description}>계정 연동 회원은 정보 수정이 불가합니다</p>
				</header>
				<ul className={styles.userInfoContainer}>
					<li className={styles.userInfoContainer__image}>
						<h3>사진</h3>
						<span>사진을 추가 또는 변경을 해보세요!</span>
						<input
							type="file"
							name=""
							className="file"
							id="file"
							ref={fileRef}
							onChange={() => {
								const chooseFile = fileRef.current.files[0];
								if (chooseFile) {
									const reader = new FileReader();
									reader.addEventListener('load', () => {
										imgRef.current.src = reader.result;
										actionEditUserImg(dispatch, reader.result);
										props.setImageChange(reader.result);
									});
									reader.readAsDataURL(chooseFile);
								}
							}}
						/>
						<img src={userInfo?.image ? userInfo.image : quokkaImage} alt="" ref={imgRef} />
						<label htmlFor="file" id="uploadBtn" ref={uploadBtn}>
							Choose Photo
						</label>
					</li>
					<li className={styles.userInfoContainer__nickname} onClick={handleNicknameOpen}>
						<h3>닉네임</h3>
						<span>{`${userInfo?.nickname ? userInfo?.nickname : 'Guest'}`}</span>
						<i className="fas fa-greater-than"></i>
					</li>
					<li className={styles.userInfoContainer__password} onClick={handlePasswordOpen}>
						<h3>비밀번호</h3>
						<span>{`***...`}</span>
						<i className="fas fa-greater-than"></i>
					</li>
					<li>
						<span>회원님의 정보보호를 위해 주기적으로 비밀번호를 변경해주세요!</span>
					</li>
				</ul>
			</main>
			<footer className={styles.footer}>
				<h3 className={styles.footer__label}>탈퇴</h3>
				<button className={styles.deleteUserButton} onClick={handleDeleteUserOn}>
					회원 탈퇴
				</button>
			</footer>
			{isNicknameButton ? <ModifyNickname handleNicknameClose={handleNicknameClose} userId={userInfo?.id} /> : ''}
			{isPasswordButton ? <ModifyPassword handlePasswordClose={handlePasswordClose} userId={userInfo?.id} /> : ''}
			{isDeleteUser ? <DeleteUserAlert handleDeleteUserOff={handleDeleteUserOff} userId={userInfo?.id} /> : ''}
		</section>
	);
};

export default UserInfo;
