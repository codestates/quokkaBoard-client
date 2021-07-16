import { EXAMPLE_CODE, USER_LOGIN, USER_LOGOUT } from './type';
import axios from 'axios';

// actions creator functions
export const example = () => {
	return {
		type: EXAMPLE_CODE,
		payload: {
			data: 'test code..',
		},
	};
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
export const actionLogout = () => {
	return {
		type: USER_LOGOUT,
		payload: {},
	};
};
