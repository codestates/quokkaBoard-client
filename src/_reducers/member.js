import { SEARCH_USER } from '../_actions/type';

const member = (state = {}, action) => {
	switch (action.type) {
		case SEARCH_USER:
			return { ...state, searchUser: action.payload };
		default:
			return state;
	}
};

export default member;
