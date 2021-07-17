import React, { useState } from 'react';
import style from './sections/taskEdit.module.css';
import TaskEditMember from './TaskEditMember';
import TaskEditLabel from './TaskEditLabel';
import TaskMemberModify from './TaskMemberModify';
import TaskDueDateModify from './TaskDueDateModify';
import TaskLabelModify from './TaskLabelModify';

const TaskEdit = (props) => {
	const [isMemberDelBtnClick, setMemberDelete] = useState(false);
	const [isDueDateDelBtnClick, setDueDate] = useState(false);
	const [isLabelDelBtnClick, setLabel] = useState(false);
	const [selectDelMember, setSelectDelMember] = useState({});
	const [selectDelLabel, setSelectDelLabel] = useState({});

	const handleDeleteMemberModalOpen = () => {
		setMemberDelete(true);
	};

	const handleDeleteMemberModalClose = () => {
		setMemberDelete(false);
	};

	const handleUpdateDateModalOpen = () => {
		setDueDate(true);
	};

	const handleUpdateDateModalClose = () => {
		setDueDate(false);
	};

	const handleLabelDeleteModalOpen = () => {
		setLabel(true);
	};

	const handleLabelDeleteModalClose = () => {
		setLabel(false);
	};

	const handleSelectDelMember = (delMember) => {
		console.log(delMember);
		setSelectDelMember(delMember);
	};

	const handleSelectDelLabel = (delLabel) => {
		console.log(delLabel);
		setSelectDelLabel(delLabel);
	};

	return (
		<div className={style.background}>
			<section className={style.container}>
				<div className={style.close_btn} onClick={props.handleTaskModalClose}>
					<i className="fas fa-times"></i>
				</div>
				<h2 className={style.title}>{props.task.content}</h2>
				<div className={style.content}>
					<div className={style.member_div}>
						<h3 className={style.member_title}>담당자</h3>
						<div className={style.member_div}>
							<ul className={style.members}>
								{props.task.members.map((member, idx) => {
									return (
										<TaskEditMember
											key={idx}
											member={member}
											handleDeleteMemberModalOpen={handleDeleteMemberModalOpen}
											handleSelectDelMember={handleSelectDelMember}
										/>
									);
								})}
							</ul>
						</div>
					</div>
					<div className={style.date_div}>
						<h3 className={style.due_date}>마감 날짜</h3>
						<span className={style.date}>{props.task.dueDate}</span>
						<input type="date" className={style.date_select} />
						<button className={style.date_change_btn} onClick={handleUpdateDateModalOpen}>
							<span>변경하기</span>
						</button>
					</div>
					<div className={style.label_div}>
						<h3 className={style.label_title}>
							<i className="fas fa-tags"></i>
						</h3>
						<ul className={style.labels}>
							{props.task.labels.map((label) => {
								return (
									<TaskEditLabel
										key={label.id}
										label={label}
										handleLabelDeleteModalOpen={handleLabelDeleteModalOpen}
										handleSelectDelLabel={handleSelectDelLabel}
									/>
								);
							})}
						</ul>
					</div>
				</div>
				{isMemberDelBtnClick ? (
					<TaskMemberModify
						handleDeleteMemberModalClose={handleDeleteMemberModalClose}
						selectDelMember={selectDelMember}
					/>
				) : (
					''
				)}
				{isDueDateDelBtnClick ? <TaskDueDateModify handleUpdateDateModalClose={handleUpdateDateModalClose} /> : ''}
				{isLabelDelBtnClick ? (
					<TaskLabelModify handleLabelDeleteModalClose={handleLabelDeleteModalClose} selectDelLabel={selectDelLabel} />
				) : (
					''
				)}
			</section>
		</div>
	);
};

export default TaskEdit;
