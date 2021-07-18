import { USER_LOGIN, USER_LOGOUT, USER_NICKNAME } from '../_actions/type';

const users = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN:
			return { ...state, userInfo: action.payload };
		case USER_LOGOUT:
			return { ...state, userInfo: null };
		case USER_NICKNAME:
			return { ...state, userInfo: { ...state.userInfo, nickname: action.payload } };
		default:
			return state;
	}
};

export default users;
