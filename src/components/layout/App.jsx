import React from 'react';
import './sections/App.css';

// import LandingPage from '../views/landing/LandingPage';
import Nav from '../views/nav/Nav';
// import Login from '../views/modal/login/Login';
import DashBoard from '../views/dashBoard/DashBoard';

function App() {
	return (
		<>
			<Nav />
			<DashBoard />
		</>
	);
}

export default App;
