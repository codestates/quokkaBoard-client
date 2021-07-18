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
	margin: 0.5rem 0;
`;

const TaskList = styled.div`
	padding: 0.5rem;
	background-color: ${(props) => (props.isDraggingOver ? 'var(--yellow)' : 'var(--green-b)')};
	transition: background-color 0.3s ease;
	flex-grow: 1;
	min-height: 30px;
`;

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
		this.handleTitleModalClose();
	};

	// 컬럼 지우기 axios
	handleColumnDelete = (e) => {
		this.handleColumnDeleteModalClose();
	};

	render() {
		return (
			<>
				<Draggable draggableId={this.props.column?.id} index={this.props.index}>
					{(provided) => (
						<Container {...provided.draggableProps} ref={provided.innerRef}>
							<div className={style.div}>
								<Title {...provided.dragHandleProps}>{this.props.column?.title}</Title>
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
										title={this.props.column?.title}
									/>
								) : (
									''
								)}
							</div>

							<Droppable droppableId={this.props.column?.id} type="task">
								{(provided, snapshot) => (
									<>
										<TaskList
											ref={provided.innerRef}
											{...provided.droppableProps}
											isDraggingOver={snapshot.isDraggingOver}
										>
											{this.props.tasks?.map((task, index) => (
												<Task
													key={task.id}
													task={task}
													index={index}
													handleTaskModalOpen={this.props.handleTaskModalOpen}
													handleCurrentTaskUpdate={this.props.handleCurrentTaskUpdate}
												/>
											))}

											<div className={style.task__div}>
												<span className={style.task__btn} onClick={this.props.handleAddTaskModalOpen}>
													+
												</span>
											</div>
											{provided.placeholder}
										</TaskList>
									</>
								)}
							</Droppable>
						</Container>
					)}
				</Draggable>
			</>
		);
	}
}
export default Column;
