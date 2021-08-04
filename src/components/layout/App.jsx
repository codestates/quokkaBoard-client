import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './sections/App.css';

import Loading from '../views/loading/Loading';
import LandingPage from '../views/landing/LandingPage';
import MainPage from './MainPage';
import DashBoard from '../views/dashBoard/DashBoard';
import Nav from '../views/nav/Nav';
import KanbanBoard from '../views/kanbanBoard/KanbanBoard';
import ProjectSetting from '../views/projectSetting/ProjectSetting';

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Switch>
				<Route exact path="/" render={() => <LandingPage />}></Route>
				<Route exact path="/dash-board" render={() => <DashBoard />}></Route>
				<Route exact path="/kanban-board" render={() => <KanbanBoard />}></Route>
				<Route exact path="/project-setting" render={() => <ProjectSetting />}></Route>
			</Switch>
		</Suspense>
	);
}

export default App;
