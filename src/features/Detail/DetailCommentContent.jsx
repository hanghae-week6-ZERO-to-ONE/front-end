import React from "react";
import styled from "styled-components";
import userImage from "../../images/userImage.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __deleteComment } from "../../redux/modules/comment";
const DetailCommentContent = ({ comment }) => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isEdit, setIsEdit] = useState(false);
	const onDeleteHandler = () => {
		dispatch(__deleteComment(comment.id));
		navigate(`/detail/${id}`);
	};
	return (
		<>
			{isEdit ? (
				<>
					<CommentWrap>
						<div>
							<img src={userImage} alt="userImage" />
							<span>국경훈</span>
							<input placeholder="댓글입력"></input>
						</div>
						<div>
							<button onClick={() => setIsEdit(isEdit)}>수정완료</button>
							<button
								onClick={() => {
									const result = window.confirm("이 게시글을 지울까요?");
									if (result) {
										return onDeleteHandler();
									} else {
										return;
									}
								}}
							>
								삭제
							</button>
						</div>
					</CommentWrap>
				</>
			) : (
				<CommentWrap>
					<div>
						<img src={userImage} alt="userImage" />
						<span>국경훈</span>
						<span>{comment.content}</span>
					</div>
					<div>
						<button onClick={() => setIsEdit(!isEdit)}>수정</button>
						<button
							onClick={() => {
								const result = window.confirm("이 게시글을 지울까요?");
								if (result) {
									return onDeleteHandler();
								} else {
									return;
								}
							}}
						>
							삭제
						</button>
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
	border: 1px solid #000000;
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
		background-color: #fff;
		background-color: #cde230;
		border: none;
		height: 25px;
		margin-right: 10px;
		cursor: pointer;
	}
	div:first-child {
		display: flex;
		align-items: center;
		margin-left: 20px;
		img {
			margin-right: 10px;
		}
		span {
			margin-right: 20px;
		}
	}
`;
