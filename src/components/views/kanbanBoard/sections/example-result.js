// example result object
const result = {
	draggableId: 'task-1',
	type: 'TYPE',
	reason: 'DROP',
	source: {
		droppableId: 'column-1',
		index: 0,
	},
	destination: null, // 사용자가 목록 외부에서 드롭하는 경우
	// destination: {
	//   droppableId: 'column-1',
	//   index: 1,
	// },
};
