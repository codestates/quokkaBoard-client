import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import env from 'react-dotenv';
// import { bindActionCreators } from 'redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialData from './sections/initialData';
import Column from './Column';
import TaskEdit from '../modal/task/TaskEdit';
import AddTask from '../modal/task/AddTask';
import AddColumn from '../modal/newColumn/AddColumn';
import Nav from '../nav/Nav';
import styled from 'styled-components';
import style from './sections/boardAdd.module.css';
import { actionKanbanInfo } from '../../../_actions';

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
		this.userInfo = props.userInfo;
		this.currentProject = props.currentProject;
		console.log(`::::: kanban board :::::`);
		console.log(this.userInfo);
		// this.props.mapDispatchToProps(); //'a89666b6-96d5-41d6-8e99-2c8a64995d0e'
		this.state = {
			tasks: {},
			columns: {},
			columnOrder: [],
			isTaskClick: false,
			isNewTaskClick: false,
			isNewColumnClick: false,
			currentTask: {},
			newTask: {},
		};
	}

	/* bindActionCreators(dispatch) {
		return {
			dispatch,
			...bindActionCreators({ actionKanbanInfo }, dispatch),
		};
	} */

	// '30b1cc56-3e6a-4732-8dba-c6178fbd27b5',
	componentDidMount() {
		const projectId = this.currentProject?.projectId;

		axios
			.post(`${env.REACT_APP_SERVER_URI}/kanban/all-board-info`, {
				projectId,
			})
			.then((response) => response.data.data)
			.then((data) => {
				console.log(data);

				const columnsCopy = [...data.columns];
				const tasksCopy = [...data.tasks];

				let columns = {};
				let tasks = {};

				const columnOrder = columnsCopy?.map((column) => {
					columns = { ...columns, [column.id]: { ...column } };
					return column.id;
				});

				console.log(columns);
				console.log(columnOrder);

				this.setState({
					columns,
					columnOrder,
				});
			});
	}

	// new column
	handleColumnUpdate = (newColumn) => {
		let columnId = '';
		console.log(newColumn);
		for (let key in newColumn) {
			columnId = key;
		}
		let size = 0;
		for (let key in this.state.columns) {
			size++;
		}

		if (size) {
			this.setState({
				columns: { ...this.state.columns, ...newColumn },
				columnOrder: [...this.state.columnOrder, columnId],
			});
		} else {
			this.setState({
				columns: { ...newColumn },
				columnOrder: [...this.state.columnOrder, columnId],
			});
		}
	};

	// 새로운 task 1개 추가 시
	handleTaskUpdate = (newTask) => {
		this.setState({
			tasks: {
				...this.state.tasks,
				newTask,
			},
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

	onDragEnd = (result) => {
		const { destination, source, draggableId, type } = result;
		console.log(source);
		console.log(destination);
		console.log(`draggableId: ${draggableId}`);
		console.log(`type: ${type}`);

		if (!destination) {
			// 목적지(destination이 없을 때는 그냥 아무것도 하지 않음)
			return;
		}

		// draggable이 바뀌었는지 확인
		// 대상 삭제 가능한 id가 소스와 동일한지, 인덱스가 소스와 동일한 지 확인(두 가지가 다 일치할 경우 사용자가 항목을 다시 시작한 위치로 끌어다 놓은것이기 때문에 아무것도 할 필요 없음)
		if (destination.droppableId === source.droppableId && destination.index === source.index) {
			return;
		}
		// 태스크 시프트: cIdx, targetIdx, boardId, targetId
		// 태스크 시프트, 보드 시프트 둘다 각각 id는 필요 없습니다
		// 태스크 시프트 일때는 보드 아이디랑 타겟 보드 아이디가 필요합니다
		if (type === 'column') {
			// bInx: 이동전 보드 인덱스
			// targetIdx: 이동후 보드 인덱스
			const data = {
				bIdx: source.index,
				targetIdx: destination.index,
			};

			return;
		}

		if (type === 'task') {
			// cIdx: 이동전 task인덱스
			// targetIdx: 이동후 task 인덱스
			// boardId: 이동전 테스크가 담긴 보드아이디
			// targetId: 이동후 테스크가 담긴 보드아이디
			const data = {
				cIdx: source.index,
				targetIdx: destination.index,
				boardId: source.droppableId,
				targetId: destination.droppableId,
			};
			return;
		}
	};

	render() {
		return (
			<>
				<Nav />
				<DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
					<Droppable droppableId="all-columns" direction="horizontal" type="column">
						{(provided) => (
							<>
								<Page>
									<Container {...provided.droppableProps} ref={provided.innerRef}>
										{this.state.columnOrder?.map((columnId, index) => {
											// column을 state에서 뽑아옴
											const column = this.state.columns[columnId];

											// 해당 column에 관련된 task도 확인
											const tasks = column?.tasks?.map((taskId) => this.state.tasks[taskId]);

											return (
												<Column
													key={column?.id}
													column={column}
													tasks={tasks}
													index={index}
													handleTaskModalOpen={this.handleTaskModalOpen}
													handleCurrentTaskUpdate={this.handleCurrentTaskUpdate}
													handleAddTaskModalOpen={this.handleAddTaskModalOpen}
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
										<TaskEdit task={this.state.currentTask} handleTaskModalClose={this.handleTaskModalClose} />
									) : (
										''
									)}
									{this.state.isNewTaskClick ? <AddTask handleAddTaskModalClose={this.handleAddTaskModalClose} /> : ''}
									{this.state.isNewColumnClick ? (
										<AddColumn
											handleColumnModalClose={this.handleColumnModalClose}
											handleColumnUpdate={this.handleColumnUpdate}
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
