import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import style from './sections/task.module.css';
import TaskTitleModify from '../modal/task/TaskTitleModify';
import TaskDelete from '../modal/task/TaskDelete';

const Container = styled.div`
	padding: 0.8rem 0.8rem;
	border: 1px solid var(--green-c);
	border-radius: 0.3rem;
	font-size: 0.85rem;
	margin-bottom: 0.3rem;
	position: relative;
	color: ${(props) => (props.isDragging ? 'var(--green-e)' : 'var(--black)')};
	background-color: ${(props) => (props.isDragging ? 'var(--green-d)' : 'var(--green-c)')};
	// transition: all 0.3s ease;
`;

class Task extends Component {
	state = {
		isTitleModifyBtnClick: false,
		isTitleDeleteBtnClick: false,
	};

	handleTask = () => {
		this.props.handleTaskModalOpen();
		this.props.handleCurrentTaskUpdate(this.props.task);
	};

	handleTaskTitleModify = () => {
		// task title modify 요청
	};

	handleTaskDelete = () => {
		// task 삭제 요청
	};

	handleTaskTitleModalOpen = () => {
		console.log('태스크 제목 변경');
		this.setState({
			isTitleModifyBtnClick: true,
		});
	};

	handleTaskTitleModalClose = () => {
		console.log('태스크 제목 모달 닫음');
		this.setState({
			isTitleModifyBtnClick: false,
		});
	};

	handleTaskDeleteModalOpen = () => {
		console.log('태스크 삭제');
		this.setState({
			isTitleDeleteBtnClick: true,
		});
	};

	handleTaskDeleteModalClose = () => {
		console.log('태스크 삭제 모달 닫음');
		this.setState({
			isTitleDeleteBtnClick: false,
		});
	};

	render() {
		return (
			<Draggable draggableId={this.props.task?.id} index={this.props.index}>
				{(provided, snapshot) => (
					<Container
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
						isDragging={snapshot.isDragging}
					>
						<div className={style.title}>
							<span className={style.due_date}>{this.props.task?.dueDate}</span>
							<button onClick={this.handleTaskTitleModalOpen} className={style.update_btn}>
								<i className="fas fa-pencil-alt"></i>
							</button>
							<button onClick={this.handleTaskDeleteModalOpen} className={style.remove_btn}>
								<i className="fas fa-trash-alt"></i>
							</button>
						</div>
						{this.state.isTitleModifyBtnClick ? (
							<TaskTitleModify
								handleTaskTitleModalClose={this.handleTaskTitleModalClose}
								taskTitle={this.props.task?.content}
							/>
						) : (
							''
						)}
						{this.state.isTitleDeleteBtnClick ? (
							<TaskDelete
								handleTaskDeleteModalClose={this.handleTaskDeleteModalClose}
								taskTitle={this.props.task?.content}
							/>
						) : (
							''
						)}
						<section className={style.container} onClick={this.handleTask}>
							<div className={style.task_content}>{this.props.task?.content}</div>
							<ul className={style.members}>
								{this.props.task?.members.map((member, idx) => {
									return (
										<li key={idx} className={style.member}>
											{member}
										</li>
									);
								})}
							</ul>
							<ul className={style.labels}>
								{this.props.task?.labels.map((label) => {
									return (
										<li key={label.id} style={{ backgroundColor: `${label.hex}` }} className={style.label}>
											{label.content}
										</li>
									);
								})}
							</ul>
						</section>
					</Container>
				)}
			</Draggable>
		);
	}
}
export default Task;
