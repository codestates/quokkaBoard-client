import React, { useCallback, useRef, useState } from 'react';
import axios from 'axios';
import env from 'react-dotenv';
import styles from './sections/createProject.module.css';
import AddProjectMember from '../addProjectMember/AddProjectMember';
import SelectUserList from '../addProjectMember/SelectUserList';

console.log(env.REACT_APP_SERVER_URI);

const CreateProject = (props: any) => {
	interface SelectUser {
		id: any;
		nickname: string;
		email: string;
	}
	const [isNewProjectMember, setNewProjectMember] = useState(false);
	const [selectUsers, setSelectUsers] = useState<SelectUser[]>([]); //useState<SelectUser[]>([])

	const subjectInputRef = useRef<HTMLInputElement>(null);
	const descriptionInputRef = useRef<HTMLInputElement>(null);
	const projectStartDateRef = useRef<HTMLInputElement>(null);
	const projectEndDateRef = useRef<HTMLInputElement>(null);

	// 검색했을 때 응답으로 오는 사람 목록 추가할 state (id, 닉네임, 이메일)

	// 프로젝트 만들기 화면에서 제목/설명/프로젝트 멤버(id, 닉네임) 목록을 요청보내기
	const handleNewProjectMember = (e: any) => {
		const title = subjectInputRef.current?.value;
		const userId = '3485c4e3-03aa-4674-80e1-fe289672c14c';
		const description = descriptionInputRef.current?.value;
		const startDate = projectStartDateRef.current?.value;
		const endDate = projectEndDateRef.current?.value;

		axios
			.post(`${env.REACT_APP_SERVER_URI}/project/create-project`, {
				title,
				userId,
				description,
				startDate,
				endDate,
			})
			.then((response) => console.log(response.data))
			.catch((err) => {
				console.log(err.data);
				console.log(err);
			});
	};

	// selectUser state update
	const handleSelectUsers = (value: any) => {
		if (selectUsers.length) {
			setSelectUsers([...selectUsers, value]);
		} else {
			setSelectUsers([value]);
		}
	};

	// select member label remove
	const handleSelectUserCancel = useCallback(
		(removeUser: any) => {
			const index = selectUsers.findIndex((user) => {
				return user.id === removeUser.id;
			});

			const copySelectUsers = [...selectUsers];
			copySelectUsers.splice(index, 1);

			setSelectUsers(copySelectUsers);
		},
		[selectUsers],
	);

	const isNewProjectMemberModalOpen = () => {
		setNewProjectMember(true);
	};

	const isNewProjectMemberModalClose = () => {
		setNewProjectMember(false);
	};

	const modalClose = () => {
		props.isNewProjectModalClose();
		isNewProjectMemberModalClose();
	};

	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<section>
					<div className={styles.close_btn} onClick={modalClose}>
						<i className="fas fa-times"></i>
					</div>
					<h2 className={styles.project__title}>새 프로젝트</h2>
					<div className={styles.div}>
						<label className={styles.subject} htmlFor="subject">
							제목
						</label>
						<input ref={subjectInputRef} className={styles.subject__input} type="text" name="" id="subject" />
					</div>
					<div className={styles.div}>
						<label htmlFor="description">설명</label>
						<input
							ref={descriptionInputRef}
							className={styles.description__input}
							type="text"
							name=""
							id="description"
						/>
					</div>
					<div className={styles.date_div1}>
						<span className={styles.span_start_date}>프로젝트 시작일</span>
						<input ref={projectStartDateRef} type="date" name="" id="start_date" />
					</div>
					<div className={styles.date_div2}>
						<span className={styles.span_end_date}>프로젝트 마감일</span>
						<input ref={projectEndDateRef} type="date" />
					</div>
					<div className={styles.div}>
						<p className={styles.p}>
							프로젝트 멤버 <span className={styles.span}>(선택사항)</span>
						</p>
						<button className={styles.project_member_add_btn} onClick={isNewProjectMemberModalOpen}>
							<i className="fas fa-plus"></i>
						</button>
					</div>
				</section>
				<ul className={styles.ul}>
					{selectUsers.map((user: any) => {
						return (
							<SelectUserList
								key={user.id}
								user={user}
								handleSelectUserCancel={handleSelectUserCancel}
								selectUsers={selectUsers}
							/>
						);
					})}
				</ul>

				<div className={styles.buttons}>
					<button className={styles.cancel_btn} onClick={modalClose}>
						취소
					</button>
					<button className={styles.make_btn} onClick={handleNewProjectMember}>
						만들기
					</button>
				</div>
				{isNewProjectMember ? (
					<AddProjectMember
						isNewProjectMemberModalClose={isNewProjectMemberModalClose}
						handleSelectUsers={handleSelectUsers}
						selectUsers={selectUsers}
					/>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default CreateProject;
