import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
	padding: 0.5rem;
	border: 1px solid var(--green-c);
	border-radius: 0.3rem;
	font-size: 0.85rem;
	margin-bottom: 0.3rem;
	color: ${(props) => (props.isDragging ? 'var(--green-e)' : 'var(--black)')};
	background-color: ${(props) => (props.isDragging ? 'var(--green-d)' : 'var(--green-c)')};
	transition: background-color 0.3s ease;
`;

class Task extends Component {
	render() {
		return (
			<Draggable draggableId={this.props.task.id} index={this.props.index}>
				{(provided, snapshot) => (
					<Container
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
						isDragging={snapshot.isDragging}
					>
						{this.props.task.content}
					</Container>
				)}
			</Draggable>
		);
	}
}
export default Task;
