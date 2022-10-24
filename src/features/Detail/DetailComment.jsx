import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import DetailCommentContent from "../../features/Detail/DetailCommentContent";
import { __addComment, __getComment } from "../../redux/modules/comment";

const DetailComment = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(__getComment());
	}, [dispatch]);
	const comment = useSelector(state => state.comment.comment);
	console.log(comment);
	return (
		<DetailCommentWrap>
			<h2>댓글</h2>
			<CommentWriteWrap>
				<div>
					<input type="text" name="content" placeholder="댓글을 입력해주세요" />
					<button>작성</button>
				</div>
			</CommentWriteWrap>
			{comment?.map((com, idx) => {
				return <DetailCommentContent comment={com} key={idx} />;
			})}
		</DetailCommentWrap>
	);
};

export default DetailComment;

const DetailCommentWrap = styled.section`
	h2 {
		font-size: 30px;
		margin-bottom: 60px;
	}
`;

const CommentWriteWrap = styled.article`
	width: 1280px;
	display: flex;
	justify-content: center;
	form {
		input {
			width: 930px;
			height: 30px;
			margin-right: 20px;
		}
		button {
			width: 100px;
			height: 35px;
			background-color: #cde230;
			border: none;
			cursor: pointer;
		}
	}
`;
