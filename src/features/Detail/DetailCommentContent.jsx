import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import userImage from "../../images/userImage.png";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { __deleteComment, __updateComment, __getComment } from "../../redux/modules/comment";
const DetailCommentContent = ({ comments, setClicked, clicked }) => {
	const dispatch = useDispatch();
	const [isEdit, setIsEdit] = useState(false);
	const [editText, setEditText] = useState(comments.content);
	const [writer] = useState(comments.writer);
	const { id } = useParams();

	useEffect(() => {
		dispatch(__getComment(id));
	}, [dispatch, id]);

	const onDeleteHandler = () => {
		dispatch(__deleteComment(comments.id));
		setClicked(!clicked);
	};
	const editHandler = () => {
		dispatch(__updateComment({ ...comments, content: editText, writer: writer }));
		setIsEdit(!isEdit);
	};
	const edit = e => {
		setEditText(e.target.value);
	};
	return (
		<>
			{isEdit ? (
				<>
					<CommentWrap>
						<div>
							<img src={userImage} alt="userImage" />
							<span>{comments.writer}</span>
						</div>
						<div>
							<input placeholder="댓글입력" type="text" value={editText} onChange={edit} />
							<button onClick={editHandler}>수정완료</button>
							<button onClick={() => setIsEdit(!isEdit)}>이전</button>
						</div>
					</CommentWrap>
				</>
			) : (
				<CommentWrap>
					<div>
						<img src={userImage} alt="userImage" />
						<span>{comments.writer}</span>
					</div>
					<div>
						<Content>{comments.content}</Content>
					</div>
					<div>
						<ButtonWrap>
							<button onClick={() => setIsEdit(!isEdit)}>수정</button>
							<button
								onClick={() => {
									const result = window.confirm("댓글을 지울까요?");

									if (result) {
										return onDeleteHandler();
									} else {
										return;
									}
								}}
							>
								삭제
							</button>
						</ButtonWrap>
					</div>
				</CommentWrap>
			)}
		</>
	);
};

export default DetailCommentContent;

const CommentWrap = styled.article`
	margin: 0 auto;
	width: 1060px;
	height: 40px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 11px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
	img {
		width: 22px;
		height: 22px;
		object-fit: cover;
	}
	button {
		background-color: #cde230;
		border: none;
		height: 25px;
		margin-right: 10px;
		cursor: pointer;
	}
	div {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
		margin-left: 20px;
		img {
			margin-right: 10px;
		}
		span {
			margin-right: 20px;
		}
	}
	input {
		width: 650px;
		margin-right: 8px;
	}
`;
const ButtonWrap = styled.div``;
const Content = styled.span`
	width: 500px;
`;
