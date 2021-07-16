import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import style from './sections/task.module.css';

const Container = styled.div`
	padding: 0.8rem 0.8rem;
	border: 1px solid var(--green-c);
	border-radius: 0.3rem;
	font-size: 0.85rem;
	margin-bottom: 0.3rem;
	color: ${(props) => (props.isDragging ? 'var(--green-e)' : 'var(--black)')};
	background-color: ${(props) => (props.isDragging ? 'var(--green-d)' : 'var(--green-c)')};
	transition: all 0.3s ease;
`;

class Task extends Component {
	handleTask = () => {
		this.props.handleTaskModalOpen();
		this.props.handleCurrentTaskUpdate(this.props.task);
	};

	render() {
		return (
			<Draggable draggableId={this.props.task.id} index={this.props.index}>
				{(provided, snapshot) => (
					<Container
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
						isDragging={snapshot.isDragging}
						onClick={this.handleTask}
					>
						<section className={style.container}>
							<span className={style.due_date}>{this.props.task.dueDate}</span>
							<div className={style.task_content}>{this.props.task.content}</div>
							<ul className={style.members}>
								{this.props.task.members.map((member) => {
									return (
										<li key={member} className={style.member}>
											{member}
										</li>
									);
								})}
							</ul>
							<ul className={style.labels}>
								{this.props.task.labels.map((label) => {
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
