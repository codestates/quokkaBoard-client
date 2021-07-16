import React from 'react';
import './sections/App.css';

import DashBoard from '../views/dashBoard/DashBoard';
import LandingPage from '../views/landing/LandingPage';
import Nav from '../views/nav/Nav';
import Login from '../views/modal/login/Login';
import KanbanBoard from '../views/kanbanBoard/KanbanBoard';
import Loading from '../views/loading/Loading';

function App() {
	return (
		<>
			<LandingPage />
		</>
	);
}

export default App;
