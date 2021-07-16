import { USER_LOGIN, USER_LOGOUT } from '../_actions/type';

const users = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN:
			return { ...state, userInfo: action.payload };
		case USER_LOGOUT:
			return { ...state, userInfo: null };
		default:
			return state;
	}
};

export default users;
