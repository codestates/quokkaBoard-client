import { EXAMPLE_CODE } from './type';

// actions creator functions
export const example = () => {
	return {
		type: EXAMPLE_CODE,
		payload: {
			data: 'test code..',
		},
	};
};
