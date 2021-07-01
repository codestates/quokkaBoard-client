import React from 'react';
import './sections/App.css';

// import Loading from '../views/loading/Loading';
import Navbar from '../views/navbar/Navbar';
import MainNavbar from '../views/mainNavbar/MainNavbar';
import ProjectListModal from '../views/navbar/projectListModal/ProjectListModal';

function App() {
	return (
		<>
			<ProjectListModal />
			<Navbar />
			<MainNavbar />
		</>
	);
}

export default App;
