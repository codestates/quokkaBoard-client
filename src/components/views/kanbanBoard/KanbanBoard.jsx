import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialData from './sections/initialData';
import Column from './Column';
import TaskEdit from '../modal/task/TaskEdit';
import AddTask from '../modal/task/AddTask';
import AddColumn from '../modal/newColumn/AddColumn';
import Nav from '../nav/Nav';

import styled from 'styled-components';
import style from './sections/boardAdd.module.css';
import Loading from '../loading/Loading';

const Page = styled.div`
	width: 100%;
	height: 100vh;
	background-color: var(--yellow-light);
	overflow-x: auto;
`;

const Container = styled.div`
	position: relative;
	top: 8rem;
	left: 8rem;
	display: flex;
	overflow: auto;
`;

/* const actionCreators = {
	actionKanbanInfo,
}; */

class KanbanBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...initialData,
			// columns: {},
			// tasks: {},
			// columnOrder: [],
			isTaskClick: false,
			isNewTaskClick: false,
			isNewColumnClick: false,
			currentTask: {},
			currentBoarId: '',
			newTask: {},
			isLoading: true,
		};
	}

	// 라벨 업데이트
	updateLabel = (labels, taskId) => {
		const updateLabels = this.state.tasks[taskId].labels.filter((label) => label.id !== labels.id);
		console.log(updateLabels);
		this.setState({
			tasks: { ...this.state.tasks, [taskId]: { ...this.state.tasks[taskId], labels: updateLabels } },
		});
		this.setState({
			currentTask: { ...this.state.currentTask, labels: updateLabels },
		});
	};

	// dueDate 변경
	updateDueDate = (dueDate, taskId) => {
		this.setState({
			tasks: { ...this.state.tasks, [taskId]: { ...this.state.tasks[taskId], dueDate } },
		});
		this.setState({
			currentTask: { ...this.state.currentTask, dueDate },
		});
	};

	// task 멤버 삭제
	updateTaskMember = (members, taskId) => {
		const updateMembers = this.state.tasks[taskId].members.filter((member) => members !== member);
		console.log(updateMembers);
		this.setState({
			tasks: { ...this.state.tasks, [taskId]: { ...this.state.tasks[taskId], members: updateMembers } },
		});
		this.setState({
			currentTask: { ...this.state.currentTask, members: updateMembers },
		});
	};

	// task 제목 변경
	updateTaskTitle = (taskId, title) => {
		this.setState({
			tasks: { ...this.state.tasks, [taskId]: { ...this.state.tasks[taskId], content: title } },
		});
	};

	// task 삭제
	deleteTask = (boardId, taskId) => {
		let newTasks = {};
		for (let key in this.state.tasks) {
			if (key !== taskId) {
				newTasks = { ...newTasks, [key]: { ...this.state.tasks[key] } };
			}
		}
		const newTaskIds = this.state.columns[boardId].taskIds.filter((task) => task !== taskId);

		this.setState({
			tasks: newTasks,
			columns: { ...this.state.columns, [boardId]: { ...this.state.columns[boardId], taskIds: newTaskIds } },
		});
	};

	// board 삭제
	deleteBoard = (boardId) => {
		let newColumns = {};
		for (let key in this.state.columns) {
			if (key !== boardId) {
				newColumns = { ...newColumns, [key]: this.state.columns[key] };
			}
		}
		const newColumnOrder = this.state.columnOrder.filter((columnId) => columnId !== boardId);
		this.setState({
			columns: newColumns,
			columnOrder: newColumnOrder,
		});
	};

	// board name 수정
	updateBoardName = (boardId, boardName) => {
		this.setState({
			columns: { ...this.state.columns, [boardId]: { ...this.state.columns[boardId], title: boardName } },
		});
	};

	// 새로운 task 1개 추가 시
	updateTasks = (newTask) => {
		this.setState({
			tasks: {
				...this.state.tasks,
				[newTask.id]: newTask,
			},
		});
	};

	// Columns에 있는 taskIds에 만들어진 TaskId를 추가하기
	updateBoardTaskIds = (boardId, taskId) => {
		console.log(boardId);
		this.setState({
			columns: {
				...this.state.columns,
				[boardId]: {
					...this.state['columns'][boardId],
					taskIds: [...this.state.columns[boardId].taskIds, taskId],
				},
			},
		});
	};

	//현재 추가되는 task 의 보드아이디가 저장되는 함수
	updateCurrentBoardId = (boardId) => {
		this.setState({
			currentBoarId: boardId,
		});
	};

	// 새로운 보드 추가
	updateColumns = (newColumn) => {
		this.setState({
			columns: { ...this.state.columns, [newColumn.id]: newColumn },
		});
	};

	updateColumnOrder = (newColumnId) => {
		this.setState({
			columnOrder: [...this.state.columnOrder, newColumnId],
		});
	};

	// task --> task 1개 클릭할 때 뜨는 모달창 (task 상세 창 + 편집 창)
	handleCurrentTaskUpdate = (task) => {
		this.setState({
			currentTask: task,
		});
	};

	handleAddTaskModalOpen = () => {
		this.setState({
			isNewTaskClick: true,
		});
	};

	handleAddTaskModalClose = () => {
		this.setState({
			isNewTaskClick: false,
		});
	};

	handleAddNewTask = (newTask) => {
		this.setState({
			newTask: newTask,
		});
	};

	handleTaskModalOpen = () => {
		this.setState({
			isTaskClick: true,
		});
	};

	handleTaskModalClose = () => {
		this.setState({
			isTaskClick: false,
		});
	};

	handleColumnModalOpen = () => {
		this.setState({
			isNewColumnClick: true,
		});
	};

	handleColumnModalClose = () => {
		this.setState({
			isNewColumnClick: false,
		});
	};
	componentDidMount() {
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 1500);
	}

	onDragEnd = (result) => {
		const { destination, source, draggableId, type } = result;

		if (!destination) {
			// 목적지(destination이 없을 때는 그냥 아무것도 하지 않음)
			return;
		}

		// draggable이 바뀌었는지 확인
		// 대상 삭제 가능한 id가 소스와 동일한지, 인덱스가 소스와 동일한 지 확인(두 가지가 다 일치할 경우 사용자가 항목을 다시 시작한 위치로 끌어다 놓은것이기 때문에 아무것도 할 필요 없음)
		if (destination.droppableId === source.droppableId && destination.index === source.index) {
			return;
		}

		// 이전 columnOrder와 동일한 값을 갖는 newColumnOrder을 생성한다.
		if (type === 'column') {
			const newColumnOrder = Array.from(this.state.columnOrder);
			// 기존 열 id를 원래 인덱스에서 제거하고, 열 id를 새 위치에 삽입
			newColumnOrder.splice(source.index, 1);
			newColumnOrder.splice(destination.index, 0, draggableId);

			const newState = {
				...this.state,
				columnOrder: newColumnOrder,
			};

			this.setState(newState);
			return;
		}

		// column에 대한 taskIds의 순서를 재 정렬
		// state에서 column 가져오기
		const start = this.state.columns[source.droppableId];
		// 다른 column으로 이동할 수 있음
		const finish = this.state.columns[destination.droppableId];

		// 시작 열과 끝 열이 동일하면 이전에 사용하던 논리를 계속 사용 가능
		if (start === finish) {
			// 마지막 array와 동일한 내용을 포함하는 새 taskIds를 생성 (업데이트 할 때 기존 상태 변경 방지, 변경한 항목에 대해 새 객체를 생성)
			const newTaskIds = Array.from(start.taskIds);

			// taskId를 이전 인덱스에서 배열의 새 인덱스로 이동한다.
			newTaskIds.splice(source.index, 1);

			// destination(목적지) 인덱스부터 또 한번 splice한다. 아무것도 자르지 않고, 드래그 가능한 draggableId(taskId)를 삽입한다.
			newTaskIds.splice(destination.index, 0, draggableId);

			// 새 열을 생성한다. 이 열은 newTaskIds 배열에서 이전 열과 동일한 속성을 가진다.
			const newColumn = {
				...start,
				taskIds: newTaskIds,
			};

			// state의 이전 속성은 유지하면서 변경하고자 하는 참조를 무효화
			const newState = {
				...this.state,
				columns: {
					...this.state.columns,
					[newColumn.id]: newColumn,
				},
			};

			this.setState(newState);
			return;
		}

		// 시작 열과 끝 열이 다른지 여부를 확인
		// Moving from one list to another

		// start taskIds 배열과 동일한 id를 포함하는 startTaskIds를 생성
		const startTaskIds = Array.from(start.taskIds);
		// startTaskIds에서 끌어온 작업 id를 제거
		startTaskIds.splice(source.index, 1);
		// 이전 열과 동일한 속성을 포함하지만 startTaskIds가 없는 newStart 열을 생성한다.
		const newStart = {
			...start,
			taskIds: startTaskIds,
		};

		const finishTaskIds = Array.from(finish.taskIds);
		// 마지막 완료 열과 동일한 작업 ID를 포함하는 완료 작업 ID에 대한 새 어레이도 생성
		// 정의 인덱스에 드래그 가능한 ID를 삽입하기 위해 스플라이스 연산자를 사용
		finishTaskIds.splice(destination.index, 0, draggableId);
		// 새 열을 만든다. 해당 열에 대한 새 작업 ID가 있는 완료 열 위에 있다.
		const newFinish = {
			...finish,
			taskIds: finishTaskIds,
		};

		// 이전 상태 객체와 속성이 동일한 새 상태 객체를 생성하지만, 업데이트 된 taskIds가 포함된 열을 포함하도록 열의 맵을 업데이트
		const newState = {
			...this.state,
			columns: {
				...this.state.columns,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish,
			},
		};
		this.setState(newState);
	};

	render() {
		return this.state.isLoading ? (
			<Loading />
		) : (
			<>
				<Nav />
				<DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
					<Droppable droppableId="all-columns" direction="horizontal" type="column">
						{(provided) => (
							<>
								<Page>
									<Container {...provided.droppableProps} ref={provided.innerRef}>
										{this.state.columnOrder.map((columnId, index) => {
											// column을 state에서 뽑아옴
											const column = this.state.columns[columnId];

											// 해당 column에 관련된 task도 확인
											const tasks = column.taskIds.map((taskId) => this.state.tasks[taskId]);

											return (
												<Column
													key={column.id}
													column={column}
													tasks={tasks}
													index={index}
													handleTaskModalOpen={this.handleTaskModalOpen}
													handleCurrentTaskUpdate={this.handleCurrentTaskUpdate}
													handleAddTaskModalOpen={this.handleAddTaskModalOpen}
													updateCurrentBoardId={this.updateCurrentBoardId}
													updateBoardName={this.updateBoardName}
													deleteBoard={this.deleteBoard}
													deleteTask={this.deleteTask}
													updateTaskTitle={this.updateTaskTitle}
												/>
											);
										})}
										{provided.placeholder}
										<div className={style.div}>
											<span className={style.span} onClick={this.handleColumnModalOpen}>
												+
											</span>
										</div>
									</Container>
									{this.state.isTaskClick ? (
										<TaskEdit
											task={this.state.currentTask}
											handleTaskModalClose={this.handleTaskModalClose}
											updateLabel={this.updateLabel}
											updateDueDate={this.updateDueDate}
											updateTaskMember={this.updateTaskMember}
											deleteTask={this.deleteTask}
										/>
									) : (
										''
									)}
									{this.state.isNewTaskClick ? (
										<AddTask
											handleAddTaskModalClose={this.handleAddTaskModalClose}
											updateTasks={this.updateTasks}
											updateBoardTaskIds={this.updateBoardTaskIds}
											currentBoarId={this.state.currentBoarId}
										/>
									) : (
										''
									)}
									{this.state.isNewColumnClick ? (
										<AddColumn
											handleColumnModalClose={this.handleColumnModalClose}
											updateColumns={this.updateColumns}
											updateColumnOrder={this.updateColumnOrder}
										/>
									) : (
										''
									)}
								</Page>
							</>
						)}
					</Droppable>
				</DragDropContext>
			</>
		);
	}
}

const stateToProps = (state) => ({
	userInfo: state.users.userInfo,
	currentProject: state.project?.currentProject,
});

/* const mapDispatchToProps = (dispatch) => {
	// 'a89666b6-96d5-41d6-8e99-2c8a64995d0e'
	return {
		kanban: () => dispatch(actionKanbanInfo()), // { type: 'KANBAN_INFO' }
		dispatch,
		// decrement: () => dispatch({ type: 'DECREMENT' }),
	};
}; */

export default connect(stateToProps /* , mapDispatchToProps */)(KanbanBoard);

// updateLabel = (labels, taskId) => {};

// dueDate 변경
// updateDueDate = (dueDate, taskId) => {};

// task 멤버 삭제
// updateTaskMember = (members, taskId) => {};
