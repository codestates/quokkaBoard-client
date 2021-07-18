import env from 'react-dotenv';
import { EXAMPLE_CODE, USER_LOGIN, USER_LOGOUT } from './type';
import { SEARCH_USER, PROJECT_LIST, PROJECT_MEMBER, CREATE_COLUMN } from './type';
import axios from 'axios';

// axios.defaults.withCredentials = true; // cookie 사용(접근권한을 주기위한) 설정

// action 객체를 리턴하기위한 액션 함수
// member search
export const actionSearchUser = (dispatch, searchWord) => {
	return axios
		.post(`${env.REACT_APP_SERVER_URI}/member/search-follower`, {
			nickname: searchWord,
		})
		.then((response) => response.data?.data)
		.then((data) => {
			// action 객체를 리턴
			// action: 함수를 통해 state를 update하기 위한 데이터를 만드는 곳
			// payload에 들어가는 데이터가 그대로 state에 들어간다.
			dispatch({
				type: SEARCH_USER,
				payload: [...data],
			});
		});
};

// project search
export const actionProjectList = (dispatch, userId) => {
	return axios
		.post(`${env.REACT_APP_SERVER_URI}/project/project-list`, {
			userId,
		})
		.then((response) => response.data?.data)
		.then((data) => {
			dispatch({
				type: PROJECT_LIST,
				payload: [...data],
			});
		});
};

// project member
export const actionProjectMember = (dispatch, projectId, handleLoadingClose) => {
	return axios
		.post(`${env.REACT_APP_SERVER_URI}/project/project-members`, {
			projectId,
		})
		.then((response) => response.data?.data)
		.then((data) => {
			handleLoadingClose();
			dispatch({
				type: PROJECT_MEMBER,
				payload: [...data],
			});
		})
		.catch((error) => {
			handleLoadingClose();
			console.error(error);
			console.log(error.data);
		});
};

// create board
export const actionCreateColumn = (dispatch, projectId, boardTitle) => {
	return axios
		.post(`${env.REACT_APP_SERVER_URI}/kanban/create-board`, {
			projectId,
			boardTitle,
		})
		.then((response) => console.log(response.data));
	// .then((data) => {
	// 	dispatch({
	// 		type: CREATE_COLUMN,
	// 		payload: [...data],
	// 	});
	// })
	// .catch((error) => {
	// 	console.error(error);
	// 	console.log(error.data);
	// });
};

// User
export const actionLogin = (userInfo) => {
	return {
		type: USER_LOGIN,
		payload: {
			...userInfo,
		},
	};
};
export const actionLogout = async (dispatch, userId, handleIsLoadingOff) => {
	try {
		const response = await axios.post(`${env.REACT_APP_SERVER_URI}/user/logout`, { userId });
		console.log();
		if (response.data?.success) {
			handleIsLoadingOff();
			dispatch({
				type: USER_LOGOUT,
				payload: {},
			});
		}
	} catch (e) {
		console.error(e);
		console.log(e.data);
	}
};
