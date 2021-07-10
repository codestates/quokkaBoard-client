// Draggable
const draggableSnapshot = {
	isDragging: true, // 현재 드래그할 때 true로 설정
	draggingOver: 'column-1', // 현재 끌어다 놓기 가능한 드롭 테이블의 id로 설정, 현재 끌어서 놓을 수 없는 경우에는 null로 설정된다.
};

// Droppable
const droppableSnapshot = {
	isDraggingOver: true, // 끌어서 놓을 때 true로 설정
	draggingOverWith: 'task-1', // 드롭 테이블 위로 끌어오는 드래그 파일의 id로 설정, 드롭 파일이 끌어지지 않을 경우 null로 설정된다.
};
