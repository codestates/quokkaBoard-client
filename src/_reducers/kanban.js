import { CREATE_COLUMN } from '../_actions/type';

const kanban = (state = {}, action) => {
	switch (action.type) {
		case CREATE_COLUMN:
			return { ...state, columns: [...state.columns, action.payload] };
		default:
			return state;
	}
};

export default kanban;
