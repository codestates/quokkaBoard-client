import React from 'react';
import './sections/App.css';

import LandingPage from '../views/landing/LandingPage';
import Nav from '../views/nav/Nav';
import Login from '../views/modal/login/Login';
import UserInfo from '../views/userInfo/UserInfo';
import ProjectSetting from '../views/projectSetting/ProjectSetting';

function App() {
	return (
		<>
			<Nav />
			<ProjectSetting />
		</>
	);
}

export default App;
