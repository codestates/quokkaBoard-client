import React, { useState, useRef, useCallback } from 'react';
import style from './sections/addTask.module.css';
import AddTaskMember from './AddTaskMember';
import Label from '../label/Label';

const AddTask = (props) => {
	const taskNameinputRef = useRef();

	// 담당자 추가하기 버튼 클릭 상태
	// 라벨 만들기 버튼 클릭 상태
	const [taskAddMemberBtn, setTaskAddMemberBtn] = useState(false);
	const [taskMembers, setTaskMemebrs] = useState([]);
	const [taskAddLabelBtn, setTaskAddLabelBtn] = useState(false);
	const [taskLabels, setTaskLabels] = useState([]);

	// addTaskModal member remove
	const handleRemoveTaskMember = useCallback(
		(removeMember) => {
			const index = taskMembers.findIndex((user) => {
				return user.id === removeMember.id;
			});

			const copyTaskMembers = [...taskMembers];
			copyTaskMembers.splice(index, 1);
			setTaskMemebrs(copyTaskMembers);
		},
		[taskMembers],
	);

	const handleAddTaskMemberModalOpen = () => {
		setTaskAddMemberBtn(true);
	};

	const handleAddTaskMemberModalClose = (members) => {
		setTaskAddMemberBtn(false);
	};

	const handleAddTaskMember = (member) => {
		setTaskMemebrs([...taskMembers, member]);
	};

	const handleAddLabelModalOpen = () => {
		setTaskAddLabelBtn(true);
	};

	const handleAddLabelModalClose = () => {
		setTaskAddLabelBtn(false);
	};

	const handleAddTaskLabel = (label) => {
		setTaskLabels([...taskLabels, label]);
	};

	const handleRemoveTaskLabel = useCallback(
		(removeLabel) => {
			const index = taskLabels.findIndex((label) => {
				return label.id === removeLabel.id;
			});
			console.log(removeLabel.id);

			console.log(index);
			const copyLabels = [...taskLabels];
			copyLabels.splice(index, 1);
			setTaskLabels(copyLabels);
		},
		[taskLabels],
	);

	return (
		<div className={style.background}>
			<section className={style.container}>
				<div className={style.close_btn} onClick={props.handleAddTaskModalClose}>
					<i className="fas fa-times"></i>
				</div>
				<div className={style.task_title}>새 Task 만들기</div>
				<label htmlFor="task__name" className={style.task__name}>
					task 이름
				</label>
				<input ref={taskNameinputRef} className={style.task__name__input} type="text" id="task__name" />
				<div className={style.task__member} onClick={handleAddTaskMemberModalOpen}>
					<span>담당자 추가하기</span>
					<button className={style.task__member_btn}>+</button>
				</div>
				<div className={style.add__task__member_list}>
					{taskMembers
						? taskMembers.map((user) => {
								return (
									<p key={user.id} className={style.add__member_nickname} onClick={() => handleRemoveTaskMember(user)}>
										{user.nickname}
									</p>
								);
						  })
						: ''}
				</div>
				<div className={style.task__date}>
					<span className={style.date}>마감일 지정하기</span>
					<input type="date" className={style.date__input} />
				</div>
				<div className={style.label} onClick={handleAddLabelModalOpen}>
					<span className={style.label_make}>라벨 만들기</span>
					<button className={style.label_btn}>+</button>
				</div>
				<div className={style.label_div}>
					{taskLabels
						? taskLabels.map((label) => {
								return (
									<p
										key={label.id}
										className={style.added_label}
										style={{ backgroundColor: `${label.hex}` }}
										onClick={() => handleRemoveTaskLabel(label)}
									>
										{label.content}
									</p>
								);
						  })
						: ''}
				</div>
				<div className={style.buttons}>
					<button className={style.cancel_btn} onClick={props.handleAddTaskModalClose}>
						취소
					</button>
					<button className={style.make_btn}>만들기</button>
				</div>
			</section>
			{taskAddMemberBtn ? (
				<AddTaskMember
					handleAddTaskMemberModalClose={handleAddTaskMemberModalClose}
					handleAddTaskMember={handleAddTaskMember}
					taskMembers={taskMembers}
				/>
			) : (
				''
			)}
			{taskAddLabelBtn ? (
				<Label
					handleAddLabelModalClose={handleAddLabelModalClose}
					handleAddTaskLabel={handleAddTaskLabel}
					taskLabels={taskLabels}
				/>
			) : (
				''
			)}
		</div>
	);
};

export default AddTask;
