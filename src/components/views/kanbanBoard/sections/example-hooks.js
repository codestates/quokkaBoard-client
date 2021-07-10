// onDragStart
const start = {
	draggableId: 'task-1', // 드래그 가능 id
	type: 'TYPE', // 아직 들어가지 않은 유형..
	// 소스 위치
	source: {
		droppableId: 'column-1',
		index: 0,
	},
};

// onDragUpdate
const update = {
	...start,
	// destination은 옵션(선택 사항)과 동일,
	// 아직 아무것도 해결되지 않은 경우 or 시스템에서 끌 수 있는 현재 위치
	destination: {
		droppableId: 'column-1',
		index: 1,
	},
};

// onDragEnd
const result = {
	...update,
	reason: 'DROP',
};
