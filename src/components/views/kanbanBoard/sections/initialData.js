const initialData = {
	tasks: {
		'task-1': {
			id: 'task-1',
			content: 'ToDoList 레이아웃 만들기',
			members: [
				'김코딩',
				'고길동',
				'고희동',
				'둘리',
				'푸',
				'닉',
				'주디',
				'짱구',
				'칩',
				'콩',
				'쿠',
				'데일',
				'스누피',
				'시바',
			],
			dueDate: '2021-07-13',
			labels: [
				{ id: 1, content: 'Nightmare', hex: '#795548' },
				{ id: 2, content: 'Advanced', hex: '#673ab7' },
				{ id: 3, content: 'Bare Minimum', hex: '#ff7043' },
				{ id: 4, content: 'bug', hex: '#c62828' },
				{ id: 5, content: 'client', hex: '#00695c' },
				{ id: 6, content: 'server', hex: '#00bcd4' },
				{ id: 7, content: 'duplicate', hex: '#f44336' },
				{ id: 8, content: 'enhancement', hex: '#ffa726' },
				{ id: 9, content: 'Feature', hex: '#c0ca33' },
				{ id: 10, content: 'good first issue', hex: '#e1bee7' },
				{ id: 11, content: 'help wanted', hex: '#7cb342' },
				{ id: 12, content: 'invalid', hex: '#ec407a' },
				{ id: 13, content: 'question', hex: '#fdd835' },
				{ id: 14, content: 'settings', hex: '#a1887f' },
			],
		},
		'task-2': {
			id: 'task-2',
			content: 'Drag&Drop 기능 구현하기',
			members: ['김코딩', '시바'],
			dueDate: '2021-07-13',
			labels: [
				{ id: 1, content: 'Nightmare', hex: '#795548' },
				{ id: 2, content: 'Advanced', hex: '#673ab7' },
			],
		},
		'task-3': {
			id: 'task-3',
			content: '여러개의 column 만들기',
			members: ['스누피'],
			dueDate: '2021-07-13',
			labels: [
				{ id: 1, content: 'Nightmare', hex: '#795548' },
				{ id: 13, content: 'question', hex: '#fdd835' },
				{ id: 14, content: 'settings', hex: '#a1887f' },
			],
		},
		'task-4': {
			id: 'task-4',
			content: '여러개의 column Drag&Drop 기능 구현하기',
			members: ['고길동', '시바'],
			dueDate: '2021-07-13',
			labels: [
				{ id: 1, content: 'Nightmare', hex: '#795548' },
				{ id: 2, content: 'Advanced', hex: '#673ab7' },
				{ id: 3, content: 'Bare Minimum', hex: '#ff7043' },
			],
		},
	},
	columns: {
		'column-1': {
			id: 'column-1',
			title: 'To do',
			taskIds: ['task-1', 'task-3', 'task-4'],
		},
		'column-2': {
			id: 'column-2',
			title: 'In progress',
			taskIds: ['task-2'],
		},
		'column-3': {
			id: 'column-3',
			title: 'Done',
			taskIds: [],
		},
	},
	// Facilitate reordering of the columns
	columnOrder: ['column-1', 'column-2'],
};

export default initialData;
