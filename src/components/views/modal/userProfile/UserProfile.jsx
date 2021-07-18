import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import style from './sections/userProfile.module.css';
import quokkaImg from '../../nav/subNavbar/sections/profile_img.png';
import UserInfo from '../userInfo/UserInfo';

const UserProfile = ({ isProfileClicked, isProfileModalClose }) => {
	const { userInfo } = useSelector((state) => {
		return state.users;
	});

	const [isEditUserInfo, setIsEditUserInfo] = useState(false);

	const handleEditUserInfoOpen = useCallback(
		(e) => {
			setIsEditUserInfo(true);
		},
		[isEditUserInfo],
	);
	const handleEditUserInfoClose = (e) => {
		setIsEditUserInfo(false);
	};

	return (
		<section className={style.container}>
			<div className={style.profile}>
				<button className={style.close_btn} onClick={isProfileModalClose}>
					<i className="fas fa-times"></i>
				</button>
				<div className={style.div_img}>
					<img
						className={style.user_img}
						src={`${!userInfo?.image ? quokkaImg : userInfo.image}`}
						alt="userProfile"
					></img>
				</div>
				<h2 className={style.nickname}>{userInfo?.nickname ? userInfo.nickname : 'Guest'}</h2>
				<h2 className={style.email}>{userInfo?.email ? userInfo.email : 'Guest'}</h2>
			</div>

			<div className={style.user}>
				<button className={style.update} onClick={handleEditUserInfoOpen}>
					<i className="fas fa-user-cog" />
					<span className={style.info_btn}>My Info Update</span>
				</button>
				<button className={style.logout}>
					<i className="fas fa-sign-out-alt" />
					<span className={style.logout_btn}>Logout</span>
				</button>
			</div>
			{isEditUserInfo ? <UserInfo handleEditUserInfoClose={handleEditUserInfoClose} /> : ''}
		</section>
	);
};

export default UserProfile;
