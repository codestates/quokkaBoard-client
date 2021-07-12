import React, { Component } from 'react';
import styled from 'styled-components';
import style from './sections/column.module.css';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task';
import ColumnTitle from '../modal/column/ColumnTitle';
import ColumnTitleModifyModal from '../modal/column/ColumnTitleModifyModal';
import ColumnDeleteModal from '../modal/column/ColumnDeleteModal';

const Container = styled.div`
	border: 1px solid var(--green-b);
	border-radius: 0.3rem;
	background-color: var(--green-b);
	width: 330px;
	display: flex;
	flex-direction: column;
	margin-right: 1rem;
	position: relative;
	padding: 0.4rem;
`;

const Title = styled.h3`
	padding: 0.5rem;
`;

const TaskList = styled.div`
	padding: 0.5rem;
	background-color: ${(props) => (props.isDraggingOver ? 'var(--green-b-dark)' : 'var(--green-b)')};
	transition: background-color 0.3s ease;
	flex-grow: 1;
	min-height: 30px;
`;

const AddContainer = styled.div`
	position: absolute;
	right: 8rem;
	left: 8rem;
	display: flex;
`;

// task를 매핑하고, task 구성 요소를 내부 목록 구성요소로 반환하기 위해 논리 이동
/* class InnerList extends React.Component {
	shouldComponentUpdate(nextProps) {
		// 새 작업 배열이 기존 작업 배열과 참조 동일성을 공유하는 경우 렌더링을 건너뜀. 어레이에 대한 참조가 변경된 경우 렌더링을 허용
		if (nextProps.tasks === this.props.tasks) {
			return false;
		}
		return true;
	}

	render() {
		return this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />);
	}
} */

class Column extends Component {
	state = {
		isTitleClick: false,
		isDeleteClick: false,
	};

	handleTitleModalOpen = () => {
		this.setState({
			isTitleClick: true,
		});
	};

	handleTitleModalClose = () => {
		this.setState({
			isTitleClick: false,
		});
	};

	handleColumnDeleteModalOpen = () => {
		this.setState({
			isDeleteClick: true,
		});
	};

	handleColumnDeleteModalClose = () => {
		this.setState({
			isDeleteClick: false,
		});
	};

	// 제목 수정 axios
	handleColumnTitleUpdate = (e) => {
		console.log('제목 수정 클릭');
		this.handleTitleModalClose();
	};

	// 컬럼 지우기 axios
	handleColumnDelete = (e) => {
		this.handleColumnDeleteModalClose();
		console.log('컬럼 지우기');
	};

	render() {
		return (
			<>
				<Draggable draggableId={this.props.column.id} index={this.props.index}>
					{(provided) => (
						<Container {...provided.draggableProps} ref={provided.innerRef}>
							<div className={style.div}>
								<Title {...provided.dragHandleProps}>{this.props.column.title}</Title>
								<ColumnTitle
									handleTitleModalOpen={this.handleTitleModalOpen}
									handleColumnDeleteModalOpen={this.handleColumnDeleteModalOpen}
								/>
								{this.state.isTitleClick ? (
									<ColumnTitleModifyModal
										handleTitleModalClose={this.handleTitleModalClose}
										handleColumnTitleUpdate={this.handleColumnTitleUpdate}
									/>
								) : (
									''
								)}
								{this.state.isDeleteClick ? (
									<ColumnDeleteModal
										handleColumnDeleteModalClose={this.handleColumnDeleteModalClose}
										handleColumnDelete={this.handleColumnDelete}
										title={this.props.column.title}
									/>
								) : (
									''
								)}
							</div>

							<Droppable
								droppableId={this.props.column.id}
								type="task"
								// isDropDisabled={this.props.isDropDisabled}
							>
								{(provided, snapshot) => (
									<>
										<TaskList
											ref={provided.innerRef}
											{...provided.droppableProps}
											isDraggingOver={snapshot.isDraggingOver}
										>
											{/* <InnerList tasks={this.props.tasks} /> */}

											{this.props.tasks.map((task, index) => (
												<Task
													key={task.id}
													task={task}
													index={index}
													handleTaskModalOpen={this.props.handleTaskModalOpen}
												/>
											))}
											{provided.placeholder}
										</TaskList>
									</>
								)}
							</Droppable>
							{/* 							<AddContainer>
								<button onClick={() => console.log('click!!')}>
									<i className="fas fa-plus"></i>
								</button>
							</AddContainer> */}
						</Container>
					)}
				</Draggable>
			</>
		);
	}
}
export default Column;
