import React, { useRef } from 'react';
import env from 'react-dotenv';
import axios from 'axios';
import style from './sections/projectMemberDelete.module.css';

const ProjectMemberDelete = (props) => {
	const confirmRef = useRef();

	const handleMemberDelete = () => {
		const userId = props.deleteMember;
		const projectId = props.projectId;

		console.log(userId);
		console.log(projectId);

		if (confirmRef.current.value === '지금 삭제') {
			axios
				.delete(`${env.REACT_APP_SERVER_URI}/project/remove-member`, {
					data: {
						userId: `${userId}`,
						projectId: `${projectId}`,
					},
				})
				.then((response) => {
					console.log(response.data);
					props.handleProjectMemberDelModalClose();
				});
		}
	};

	return (
		<div className={style.div}>
			<div className={style.title}>프로젝트 멤버에서 삭제하시겠습니까?</div>
			<input ref={confirmRef} className={style.input} type="text" placeholder="'지금 삭제'를 입력해주세요." />
			<div className={style.confirm_btn}>
				<button className={style.cancel} onClick={props.handleProjectMemberDelModalClose}>
					취소
				</button>
				<button className={style.confirm} onClick={handleMemberDelete}>
					확인
				</button>
			</div>
		</div>
	);
};

export default ProjectMemberDelete;
