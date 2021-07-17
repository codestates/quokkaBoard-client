import React from 'react';

const UserProfile = (props) => {
	return (
		<section
			className={`popup-container ${this.props.profileClick ? '' : 'popup-hidden'}`}
			onClick={(e) => {
				if (e.target.classList[0] === 'userinfo-update-btn') {
					this.props.onClosePopup(e);
					this.props.history.push('/edituserinfo');
				} else if (e.target.classList[0] === 'user-logout-btn') {
					console.log(e.target.classList);
					this.props.onClosePopup(e);
				}
			}}
		>
			<div className="popup-profile">
				<button
					className="popup-close-btn"
					onClick={(e) => {
						this.props.onClosePopup(e);
					}}
				>
					<i className="fas fa-times"></i>
				</button>
				<img
					className="popup-user-img"
					src={
						!this.props.userData.image
							? quokkaImg
							: this.props.userData.image.data
							? this.arrayBufferToBase643(this.props.userData.image.data)
							: this.props.userData.image
					}
					alt="userProfile"
				></img>
				<h2 className="popup-profile-h2">{this.props.userData.nickname}</h2>
				<h3 className="popup-profile-h3">{this.props.userData.email}</h3>
			</div>

			<div className="popup-user-handling">
				<button className="popup-user-update">
					<i className="fas fa-user-cog" />
					<span className="userinfo-update-btn">My Info Update</span>
				</button>
				<button className="popup-user-logout" onClick={this.handleLogout}>
					<i className="fas fa-sign-out-alt" />
					<span className="user-logout-btn">Logout</span>
				</button>
			</div>
		</section>
	);
};

export default UserProfile;
