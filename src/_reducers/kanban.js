import { CREATE_COLUMN, KANBAN_INFO } from '../_actions/type';

const kanban = (state = {}, action) => {
	switch (action.type) {
		case CREATE_COLUMN:
			return { ...state, columns: [...state.columns, action.payload] };
		case KANBAN_INFO:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default kanban;
